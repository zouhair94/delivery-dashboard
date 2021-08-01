import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ModalBasicComponent } from '../../shared/modal-basic/modal-basic.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Variables, Response } from '../../shared/model'
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import * as L from 'leaflet'
import { MapOptions, tileLayer, ZoomAnimEvent } from 'leaflet';
import { latLng } from 'leaflet';

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
export class MainComponent implements OnInit {


  addresses;
  address;
  text= "";
  
  map;
  zoom;
  options: MapOptions= {
    layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.7,
      maxZoom: 24,
      detectRetina: true,
      attribution: ''
    })],
    zoom:19,
    center:latLng(33.58368306601847, -7.636966872068143)
  };

  @ViewChild(ModalBasicComponent) modal;

  addressForm= this.fb.group({
    title: [""],
    address: [""],
    lat: [""],
    lng: [""],

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
    
  ) { }

  

  ngOnInit(): void {
    this.getAddresses();
    
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


  getAddresses() {
      this.apollo.watchQuery({
        fetchPolicy: 'no-cache',
        query: gql`
            query getAllAdress{
              getAllAdress {
                 _id
                 title
                 address
                 lat
                 lng
                 by {
                   name
                   surname
                 }
              }
            }
        `,
        variables: {

        }
      })
      .valueChanges
      .subscribe((result: any) => this.addresses = result.data.getAllAdress )
  }
  

  deleteAddress(id) {
        this.apollo.mutate({
          mutation: gql`
            mutation removeAddress($id: String!) {
              removeAddress(id: $id) {
                _id
              }
            }
          `,
          variables: {
            id
          }
        })
        .subscribe(
          res => {
            this.getAddresses()
            this.addToast({
              title: 'Done',
              msg: 'Address has been Deleted!',
              timeout: 5000,
              theme: 'material',
              position: 'bottom-right',
              type: 'success'
            });
          }
        )
  }

  updateAddress(address) {
      this.modal.show();
      this.address = address;
      this.addressForm.patchValue(this.address);
      
  }


  onMapReady(map) {

    this.map = map;

    const myIcon = L.divIcon({className: 'ti-location-pin '});
    if(this.address && this.address.lat && this.address.lng) {
      L.marker([this.address.lat , this.address.lng],{icon: myIcon}).addTo(this.map);
    } else {
      L.marker([33.58368306601847, -7.636966872068143],{icon: myIcon}).addTo(this.map);
    }
    
    this.zoom = map.getZoom();
    

  }

  onMapZoomEnd(e: ZoomAnimEvent) {
    this.zoom = e.target.getZoom();
    
  }

  onUpdate() {

    const { _id: id} = this.address;
    const data = this.addressForm.value;
    delete data._id
    this.apollo
    .mutate<Response,Variables>({
      mutation: gql`
        mutation Update($id: String!, $UpdateAddress: UpdateAddress!){
          updateAddress(id:$id, UpdateAddress:$UpdateAddress) {
            title
            address
            by{
              _id
            }
          }
}
      `,
      variables: {
        id,
        UpdateAddress: data
      }
    }).subscribe(
      res => {
        this.address = {};
        this.modal.hide();
        this.addToast({
          title: 'Done',
          msg: 'Address has been Updated!',
          timeout: 5000,
          theme: 'material',
          position: 'bottom-right',
          type: 'success'
        });
      },
      (err) => this.addToast({
        title: 'Error',
        msg: err.message,
        timeout: 5000,
        theme: 'material',
        position: 'bottom-right',
        type: 'error'
      })
    )
  }

  checkAddress() {
    this.map.panTo([this.addressForm.value.lat, this.addressForm.value.lng]);
  }

}
