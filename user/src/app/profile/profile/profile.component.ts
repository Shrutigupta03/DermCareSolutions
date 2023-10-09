import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(private router : Router, private authservice : AuthService) { }


  patient: any = {
    name: this.authservice.getUserName(),
    phone: '',
    email: this.authservice.getUserMail(),
    age: '',
    gender: '',
    bloodGroup: '',
    skinType: '',
  };

  isEditing: boolean = false;

  ngOnInit(): void {
    // Fetch patient details from a service or API and update the 'patient' object.
    // For this example, we initialize it with default values.
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    alert('Profile saved successfully!');
    this.isEditing = false;
  }

  Home(){
    this.router.navigate([''])
  }


}
