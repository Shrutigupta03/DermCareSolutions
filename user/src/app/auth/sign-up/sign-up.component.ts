import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  selectedUserType: string = 'doctor';
  email: string = '';
  password: string = '';

  onSubmit() {
      const signupData = {
        userType: this.selectedUserType,
        email: this.email,
        password: this.password
      };
    this.http.post('http://localhost:5000/signup', signupData)
      .subscribe(
        (response: any) => {
          const token = response.token;
          this.authService.setToken(token);
          console.log('Signup successful:', response);
        },
        (error: any) => {
          if (error.error && error.error.error === 'Email is already registered') {
            console.log('Email is already registered. Please use another email address.');
          } else {
            console.error('Signup error:', error);
          }
        }
      );
      this.router.navigate(['home'])
  }
}