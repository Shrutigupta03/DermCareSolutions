import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router){}
  
  selectedUserType: string = 'doctor';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('User Type:', this.selectedUserType);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  
}
