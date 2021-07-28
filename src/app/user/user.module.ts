import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { MainComponent } from './main/main.component';
import { UserRouting } from './user-routing.module'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddComponent, MainComponent],
  imports: [
    CommonModule, UserRouting, SharedModule
  ]
})
export class UserModule { }
