import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { OrderRouteModule } from './order-route.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    OrderRouteModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ToastyModule
  ]
})
export class OrderModule { }
