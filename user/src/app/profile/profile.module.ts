import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DoctorProfileComponent,
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
  ]
})
export class ProfileModule { }
