import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

import { Observable } from '@apollo/client/utilities';
import { Subscription } from 'rxjs';

//import * as L from 'leaflet'
import { MapOptions, tileLayer, ZoomAnimEvent } from 'leaflet';
import { latLng } from 'leaflet';

import 'leaflet.heat/dist/leaflet-heat.js'



declare const L;
// declare const HeatmapOverlay;
@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.scss',
  ]
})
export class DashboardDefaultComponent implements OnInit, OnDestroy {


  orders;
  
  /* heatmapLayer = new HeatmapOverlay({
    radius: 2,
    maxOpacity: 0.8,
    scaleRadius: true,
    useLocalExtrema: true,
    latField: 'lat',
    lngField: 'lng',
    valueField: 'count'
  }); */

  options: MapOptions= {
    layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.5,
      maxZoom: 24,
      detectRetina: true,
      attribution: ''
    })],
    zoom:19,
    center:latLng(33.58368306601847, -7.636966872068143)
  };
  map;
  zoom = 17;
  
  skip=0;

  

  subscriptions = [];
  lastMonthTotal;
  totalUsersCount;
  totalAddress;

  constructor(private apollo: Apollo) { }
  ngOnDestroy(): void {
    this.subscriptions.forEach((e: Subscription) => e.unsubscribe());
  }

  async ngOnInit() {

    this.getOrders();

    const getDate = new Date();
    getDate.setMonth(getDate.getMonth() - 1);

    this.getTotalBYMonth(getDate);
    this.totalUsers();
    this.totalAdresses();
   
   
  }


  onMapReady(map) {

    this.map = map;

    const myIcon = L.divIcon({className: 'ti-location-pin '});
    
    L.marker([33.58368306601847, -7.636966872068143],{icon: myIcon}).addTo(this.map);
    
    
    this.zoom = map.getZoom();

    

    //const heat = L.heatLayer(orders).addTo(this.map)
    

  }

  onMapZoomEnd(e: ZoomAnimEvent) {
    this.zoom = e.target.getZoom();
    
  }

  getOrders(surname?,skip?) {
    this.apollo
        .watchQuery({
          query: gql`
              query getAllOrders($surname: String) {
                getAllOrders(surname: $surname){
                    
                    from {
                      lat
                      lng
                    }
                    
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
          (res:any) => {
              this.orders = res.data?.getAllOrders;

              const orders = this.orders.map( e => e.from );
              const heat = L.heatLayer(orders,{minOpacity: 0.5 }).addTo(this.map);

          },
          err => console.log(err)
        )
  }

  getMore() {
    this.skip += 10;
    this.getOrders(null,this.skip);
  }

  

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

  getTotalBYMonth(date) {
    const query = this.apollo.watchQuery({
      query: gql`
        query getMonthCount($date: String!){
        getMonthCount(date: $date)
      }
      `,
      variables: {
        date
      }
    }).valueChanges
      .subscribe((result: any) => {
        this.lastMonthTotal = result?.data?.getMonthCount;
      });

    this.subscriptions.push(query);
  }


  async totalUsers() {
    const query = this.apollo.watchQuery({
      query: gql`
        query totalUsers{
          totalUsers
      }
      `,
      variables: {
        
      }
    }).valueChanges
      .subscribe((result: any) => {
        this.totalUsersCount = result?.data?.totalUsers;
      });

    this.subscriptions.push(query);
    
  }

  async totalAdresses() {
    const query = this.apollo.watchQuery({
      query: gql`
        query getTotalAdress{
          getTotalAdress
      }
      `,
      variables: {
        
      }
    }).valueChanges
      .subscribe((result: any) => {
        this.totalAddress = result?.data?.getTotalAdress;
      });

    this.subscriptions.push(query);
  }
  

}



