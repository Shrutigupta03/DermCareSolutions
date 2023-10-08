import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patient: any = {
    name: 'Shrey Awasti',
    phone: '8064680482',
    email: 'shrey12@gmail.com',
    age: '20',
    gender: 'male',
    bloodGroup: 'A+',
    skinType: 'Oily',
    travelHistory: 'No Travel History'

  };

  isEditing: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    // Fetch patient details from a service or API and update the 'patient' object.
    // For this example, we initialize it with default values.
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    // Send a request to update the patient's profile on the server
    // You can use Angular's HttpClient to make an API request here.
    // For this example, we're just displaying an alert.
    alert('Profile saved successfully!');
    this.isEditing = false;
  }

  Home(){
    this.router.navigate([''])
  }
}
