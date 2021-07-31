import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AddressRouting } from './address-route.module'
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    AddressRouting,
    FormsModule, 
    ReactiveFormsModule,
    LeafletModule
  ]
})
export class AddressModule { }
