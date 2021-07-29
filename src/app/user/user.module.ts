import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { MainComponent } from './main/main.component';
import { UserRouting } from './user-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ToastyModule} from 'ng2-toasty';

@NgModule({
  declarations: [AddComponent, MainComponent],
  imports: [
    CommonModule,
    UserRouting, 
    SharedModule, 
    FormsModule, 
    ReactiveFormsModule,
    ToastyModule.forRoot()
  ]
})
export class UserModule { }
