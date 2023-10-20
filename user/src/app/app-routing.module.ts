import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { CrouselComponent } from './upload/crousel/crousel.component';
import { HomeComponent } from './home/home.component';
import { UploadImgComponent } from './upload/upload-img/upload-img.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { GetStartedComponent } from './home/get-started/get-started.component';
import { HeroComponent } from './home/hero/hero.component';
import { ImageComponent } from './home/image/image.component';
import { ErrorComponent } from './error/error.component';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { WhyToChoseComponent } from './home/why-to-chose/why-to-chose.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { ConnectToDoctorComponent } from './connect-to-doctor/connect-to-doctor.component';
import { DoctorProfileComponent } from './profile/doctor-profile/doctor-profile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ForgotPswrdComponent } from './auth/forgot-pswrd/forgot-pswrd.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // { path:'', redirectTo:'home',pathMatch:'full'},
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'why-to-chose', component: WhyToChoseComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'about-section', component: ImageComponent },

  { path: 'connect-to-doctor', component: ConnectToDoctorComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { path: 'reset', component: ForgotPswrdComponent},

  {
    path: 'Upload',
    loadChildren: () =>
      import('./upload/upload.module').then((m) => m.UploadModule),
  },
  { path: 'image', component: UploadImgComponent },
  { path: 'check', component:CrouselComponent, canActivate: [AuthGuard]},

  {
    path: 'Profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  { path: 'profile', component:ProfileComponent},

  { path: '**', component: ErrorComponent },
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
