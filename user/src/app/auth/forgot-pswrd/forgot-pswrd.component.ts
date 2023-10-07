import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pswrd',
  templateUrl: './forgot-pswrd.component.html',
  styleUrls: ['./forgot-pswrd.component.css']
})
export class ForgotPswrdComponent {
  constructor(private router : Router){}

  email: string = ''
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
