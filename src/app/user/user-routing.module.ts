import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component'

const router: Routes = [
    {
        path: '',
        component: MainComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(router),
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class UserRouting {}