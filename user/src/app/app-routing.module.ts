import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrouselComponent } from './crousel/crousel.component';
import {HomeComponent} from './home/home.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch:'full'},
  { path:'index.html', component:HomeComponent},
  { path:'check', component:CrouselComponent },
  { path:'image', component:UploadImgComponent },
  { path:'result', component:ResultComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
