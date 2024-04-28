import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { CrouselComponent } from './crousel/crousel.component';
import {HomeComponent} from './home/home.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ResultComponent } from './result/result.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HeroComponent } from './hero/hero.component';
import {ImageComponent} from './image/image.component';
import { ErrorComponent } from './error/error.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { WhyToChoseComponent } from './why-to-chose/why-to-chose.component';
import { ConnectToDoctorComponent   } from './connect-to-doctor/connect-to-doctor.component';
const routes: Routes = [
  // { path:'', redirectTo:'home',pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'hero',component:HeroComponent},
 
  { path:'home', component:HomeComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'benefits', component:BenefitsComponent},
    {path:'why-to-chose', component:WhyToChoseComponent},
  {path:'get-started',component:GetStartedComponent},
  { path:'index.html', component:HomeComponent},
  { path:'about-section',component:ImageComponent},
  { path:'check', component:CrouselComponent },
  { path:'image', component:UploadImgComponent },
  { path:'result', component:ResultComponent},
  {path:'connect-to-doctor',component:ConnectToDoctorComponent},
  
  {path:"**", component:ErrorComponent}
    
];
const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
};
@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',scrollOffset: [0, 64]})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
