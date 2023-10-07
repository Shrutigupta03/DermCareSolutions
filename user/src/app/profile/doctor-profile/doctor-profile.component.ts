import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  constructor(private router: Router){}

  doctor: any = {
    name: 'Dr. John Doe',
    degree: 'MD',
    specialization: 'Cardiology',
    experience: 10,
    patientsTreated: 500,
    fee: '$200',
    phoneNumber: '123-456-7890',
    email: 'doctor@example.com',
    profilePicUrl: 'path-to-profile-pic.jpg'
  };

  editedDoctor: any = { ...this.doctor }; // Make a copy for editing
  isEditMode = false;

  ngOnInit(): void {
    this.router.navigate
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  updateDetails() {
    //  HTTP request 
    // Excluding email 

    this.doctor = { ...this.editedDoctor };

    // Exit edit mode
    this.isEditMode = false;
  }

  Home(){
    this.router.navigate([''])
  }
}
