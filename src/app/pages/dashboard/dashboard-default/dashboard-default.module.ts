import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDefaultRoutingModule } from './dashboard-default-routing.module';
import { DashboardDefaultComponent } from './dashboard-default.component';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    CommonModule,
    DashboardDefaultRoutingModule,
    SharedModule,
    ChartModule,
    LeafletModule
  ],
  declarations: [DashboardDefaultComponent]
})
export class DashboardDefaultModule { }
