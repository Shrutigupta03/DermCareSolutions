import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrouselComponent } from './crousel/crousel.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'crousel', component:CrouselComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
