import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';
import { Observable } from '@apollo/client/utilities';
import { Subscription } from 'rxjs';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.scss',
    '../../../../assets/icon/svg-animated/svg-weather.css'
  ]
})
export class DashboardDefaultComponent implements OnInit, OnDestroy {

  totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
  totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
  totalValueGraphOption = buildChartOption();

  subscriptions = [];
  lastMonthTotal;
  totalUsersCount;
  totalAddress;

  constructor(private apollo: Apollo) { }
  ngOnDestroy(): void {
    this.subscriptions.forEach((e: Subscription) => e.unsubscribe());
  }

  async ngOnInit() {

    const getDate = new Date();
    getDate.setMonth(getDate.getMonth() - 1);

    this.getTotalBYMonth(getDate);
    this.totalUsers();
    this.totalAdresses();
    const year = await this.getYearTotal();
    const data = year.data.map((e,i)=>({ year: year.months[i] ,value: e}));
    AmCharts.makeChart('statistics-chart', {
      type: 'serial',
      marginTop: 0,

      marginRight: 0,
      dataProvider: [...data],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'year',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });
   
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

  getTotalByMonthAsync(date) {
    return new Promise((res, rej) => {
      this.apollo.watchQuery({
        query: gql`
        query getMonthCountAsync($date: String!){
        getMonthCount(date: $date)
      }
      `,
        variables: {
          date
        }
      }).valueChanges
        .subscribe((result: any) => {
          res(result.data.getMonthCount)
        },
          err => {
            rej(err);
          }
        );
    })
  }

  async getYearTotal() {

    const getDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
    const total = [];
    const months = [];

    for (let i = 1; i < 13; i++) {
      getDate.setMonth(getDate.getMonth() - i);
      months.push(monthNames[getDate.getMonth()]);
      total.push(await this.getTotalByMonthAsync(getDate));
    }


     const data =  await Promise.all([...total]);

    return {months, data};

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



function buildChartJS(a, b, f, c) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: c,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'rgba(0,0,0,0.5)',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function buildChartOption() {
  return {
    title: {
      display: false
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
      }
    }
  };
}
