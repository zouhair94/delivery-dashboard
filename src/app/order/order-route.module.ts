import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";



const routes: Routes = [
    { path: '', component: MainComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class OrderRouteModule{}