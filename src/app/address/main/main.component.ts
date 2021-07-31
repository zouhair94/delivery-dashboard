import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ModalBasicComponent } from '../../shared/modal-basic/modal-basic.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Variables, Response } from '../../shared/model'
import { ToastyService } from 'ng2-toasty';
import * as L from 'leaflet'
import { MapOptions, tileLayer, ZoomAnimEvent } from 'leaflet';
import { latLng } from 'leaflet';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })],
    zoom:1,
    center:latLng(33.58368306601847, -7.636966872068143)
  };

  @ViewChild(ModalBasicComponent) modal;

  addressForm= this.fb.group({
    title: [""],
    address: [""],
    lat: [""],
    lng: [""],

  });
  

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastyService: ToastyService
  ) { }

  

  ngOnInit(): void {
    this.getAddresses();
  }


  getAddresses() {
      this.apollo.watchQuery({
        query: gql`
            query getAllAdress{
              getAllAdress {
                 _id
                 title
                 address
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
  

  deleteAddress() {

  }

  updateAddress(address) {
      this.modal.show();
  }


  onMapReady(map) {
    this.map = map;

    this.zoom = map.getZoom();

  }

  onMapZoomEnd(e: ZoomAnimEvent) {
    this.zoom = e.target.getZoom();
    
  }

  onUpdate() {}

}
