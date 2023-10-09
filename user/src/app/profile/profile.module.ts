import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    DoctorProfileComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
  ]
})
export class ProfileModule { }
