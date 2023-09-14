import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrouselComponent } from './crousel/crousel.component';
import {HomeComponent} from './home/home.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ResultComponent } from './result/result.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HeroComponent } from './header/hero/hero.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'hero',component:HeroComponent},
  { path:'home', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'get-started',component:GetStartedComponent},
  { path:'index.html', component:HomeComponent},
  { path:'check', component:CrouselComponent },
  { path:'image', component:UploadImgComponent },
  { path:'result', component:ResultComponent},
  {path:"**", component:ErrorComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }