import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ModalBasicComponent } from '../../shared/modal-basic/modal-basic.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Variables, Response } from '../../shared/model'
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss',
    '../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../node_modules/ng2-toasty/style-material.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnChanges {


  users: any;
  user: any = {};

  surname;

  //form
  userRule = [
    "_id",
    "name",
    "surname",
    "email",
    "phone",
    "role",
    "credit",
    "companyId"]

  @ViewChild(ModalBasicComponent) modal;
  text = "Create new user.";
  update = false;
  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
    companyId: [''],
    password: [''],
    credit: [''],
  });

  //notify
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;


  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastyService: ToastyService,
    private router: Router
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log(changes.surname)
    }

  }



  ngOnInit(): void {
    this.getUsers();


  }

  ngAfterViewInit() {
    /* console.log('only after THIS EVENT "child" is usable!!');
    this.modal.show();
    console.dir(this.modal) */
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

  getUsers(surname?) {
    this.apollo.watchQuery({
      fetchPolicy: 'no-cache',
      query: gql`
          query findAllUser($surname: String){
                findAllUser(surname: $surname){
                  _id
                  name
                  surname
                  email
                  phone
                  role
                  credit
                }}
      `,
      //pollInterval: 1000,
      variables: {
        surname
      }
    }).valueChanges.subscribe(
      (result: any) => {
        this.users = result?.data?.findAllUser;
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
    )
  }


  search(e) {
    this.getUsers(e);
  }


  updateUser(user) {

    Object.keys(user).forEach(e => {
      if (this.userRule.includes(e)) {
        this.user[e] = user[e];
      }
    })

    this.text = `Update User ${user.surname} ${user.name} .`
    this.update = true;
    this.patchForm()



    this.modal.show();
  }


  patchForm() {
    this.userForm.patchValue(
      this.user
    )
    /* this.userForm.patchValue({
     
    }); */
  }

  deleteUser(id) {

    this.apollo.mutate({
      mutation: gql`
        
        mutation deleteUser($id: String!) {
          deleteUser(id: $id){
                  surname
                }
            }
        
      `,
      variables: {
        id
      }
    }).subscribe(
      (result: any) => {
        // console.log(id);
        this.getUsers();
        this.addToast({
          title: 'Done',
          msg: 'User has been Deleted!',
          timeout: 5000,
          theme: 'material',
          position: 'bottom-right',
          type: 'success'
        });
    },
      (err) => console.dir(err)
    );
  }


  onUpdate() {

    const { _id: id } = this.user;
    const data = this.userForm.value;
    delete data.password;

    this.apollo.mutate<Response, Variables>({
      mutation: gql`
        
        mutation editUser($id: String!, $data: UpdateUserDto!) {
              updateUser(id: $id, data: $data){
                _id
                name
                surname
                phone
                email
              }
            }
        
      `,
      variables: {
        id,
        data: this.userForm.value
      }
    }).subscribe(async (result: any) => {
      this.addToast({
        title: 'Done',
        msg: 'User has been Updated!',
        timeout: 5000,
        theme: 'material',
        position: 'bottom-right',
        type: 'success'
      });
      this.modal.hide();
      this.users = null;
      this.user = {};
      await this.getUsers();
    },
      (err) => {
        this.addToast({
          title: 'Error',
          msg: err.message,
          timeout: 5000,
          theme: 'material',
          position: 'bottom-right',
          type: 'error'
        });

      }
    );
  }

  addUser() {

    this.text = `Add new User .`
    this.user = {};
    this.update = false;
    this.modal.show();
  }

  async createUser() {

    const data = this.userForm.value;
    delete data.credit;
    if (this.userForm.valid) {
      this.apollo.mutate<Response, Variables>({
        mutation: gql`
          
          mutation create($InputUserDto: InputUserDto!){
  
                createUser(InputUserDto: $InputUserDto){
                  _id
                  name
                  surname
                  email
                  password
                  phone
                  role
                }
              }
          
        `,
        variables: {
          InputUserDto: data
        }
      }).subscribe(async (result: any) => {

        this.modal.hide();
        this.users = null;
        this.user = {};
        this.addToast({
          title: 'Done',
          msg: 'User has been created!',
          timeout: 5000,
          theme: 'material',
          position: 'bottom-right',
          type: 'success'
        });
        await this.getUsers();
      },
        (err) => {
          this.addToast({
            title: 'Error While adding new User',
            msg: err.message,
            timeout: 5000,
            theme: 'material',
            position: 'bottom-right',
            type: 'error'
          });
        }
      );
    } else {
      this.addToast({
        title: 'Error',
        msg: 'please check all fields.',
        timeout: 5000,
        theme: 'material',
        position: 'bottom-right',
        type: 'error'
      });
    }


  }


}
