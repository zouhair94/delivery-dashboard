import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { UserRouting } from './user-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ToastyModule} from 'ng2-toasty';

@NgModule({
  declarations: [ MainComponent],
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
