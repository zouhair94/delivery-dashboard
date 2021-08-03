import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { ModalBasicComponent } from '../../shared/modal-basic/modal-basic.component'
import { Title } from "@angular/platform-browser";
import { Variables, Response } from '../../../app/shared/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastyService: ToastyService,
    private titleService: Title
  ) { }

  subscriptions = [];

  orders = [];
  order: any = {};

  delivery;

  text = 'Update order status';
  surname;

  @ViewChild(ModalBasicComponent) modal;

  orderForm = this.fb.group({
    status: [""],
    delivery: [""],
  });

  //notify
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  skip = 0;
  ordersLength = 0;

  ngOnInit(): void {
    this.titleService.setTitle('Orders management');
    this.getOrders();
    this.getDeliveryMen();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((e: Subscription) => e.unsubscribe());
  }


  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
        console.log('Toast  has been added!');

      },
      onRemove: (toast: ToastData) => {
        /* removed */
        console.log('deleted!');
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

  getOrders(surname?, skip = 0) {

    const query = this.apollo
      .watchQuery({
        fetchPolicy: 'no-cache',
        query: gql`
              query getAllOrders($surname: String, $skip: Float) {
                getAllOrders(surname: $surname, skip:$skip){
                    _id
                    title
                    description
                    from {
                      address
                    }
                    to {
                      address
                    }
                    by {
                      name
                      surname
                    }
                    status
                    createdAt
                }
              }

              
          `,
        variables: {
          surname,
          skip
        }
      })
      .valueChanges
      .subscribe(
        (res: any) => {

          this.orders = [...this.orders, ...res.data?.getAllOrders];
          this.ordersLength = this.orders.length;


        },
        err => console.log(err)
      );

      this.subscriptions.push(query)
  }


  getDeliveryMen() {


    const query = this.apollo.watchQuery({
      query: gql`
        query DeliveryList {
          findAllDelivery{
                _id
                name
                surname
              }
          }
      `
    }).valueChanges
      .subscribe(
        (res: any) => {
          console.log(res.data?.findAllDelivery)
          this.delivery = res.data?.findAllDelivery;
        }

      );

      this.subscriptions.push(query);



  }

  getMore() {
    this.skip = this.skip + 10;
    this.getOrders(null, this.skip);
  }
  search(e) {
    this.orders = []
    this.getOrders(e);
  }
  updateOrder(order) {
    this.order = order;
    this.orderForm.patchValue({
      status: this.order.status,
      delivery: this.order.delivery
    });
    this.modal.show()
  }
  onUpdate() {

    const { _id: id } = this.order;
    const UpdateOrderDto = this.orderForm.value;

    const mutate = this.apollo
      .mutate<Response, Variables>({
        mutation: gql`
          mutation updateOrder($id: String!, $UpdateOrderDto : UpdateOrderDto! ) {
            updateOrder(id: $id, UpdateOrderDto : $UpdateOrderDto ){
                title
            }
          }
      `,
        variables: {
          id,
          UpdateOrderDto
        }
      })
      .subscribe(
        (res) => {
          this.orders = [];
          this.skip = 0;
          this.getOrders();
          this.modal.hide();
          this.addToast({
            title: 'Done',
            msg: 'Order has been Updated!',
            timeout: 5000,
            theme: 'material',
            position: 'bottom-right',
            type: 'success'
          });
        },
        (err) => {
          this.addToast({
            title: 'Error',
            msg: err.message,
            timeout: 5000,
            theme: 'material',
            position: 'bottom-right',
            type: 'error'
          })
        }
      );
      this.subscriptions.push(mutate);

  }

}
