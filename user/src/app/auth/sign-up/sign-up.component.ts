import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
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
      this.http.post('http://localhost:5000/signup', signupData).subscribe(
        (response: any) => {
          const token = response.token;
          const userType = response['User-type']; // Make sure the server returns 'User-type' instead of 'userType'
          this.authService.setToken(token);
          this.authService.updateProfile(userType);
          console.log('Signup successful:', response);
          console.log(userType); // Make sure the case matches the response from the server
          alert('Successfully Signed In !!');
          this.router.navigate(['home']);
        },
        (error: any) => {
          if (error.error && error.error.error === 'Email is already registered') {
            alert("Email is already registered. Please use another email address.");
          } else {
            alert("Unexpected Error");
            console.error('Signup error:', error);
          }
        }
      );
  }
  
}