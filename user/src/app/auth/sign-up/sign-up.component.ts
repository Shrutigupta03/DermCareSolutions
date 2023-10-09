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

  Username: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
      const signupData = {
        username: this.Username,
        email: this.email,
        password: this.password
      };
      this.http.post('http://localhost:5000/signup', signupData).subscribe(
        (response: any) => {
          const token = response.token;
          const userName = response.username; 
          const Email = response.email;
          this.authService.setToken(token);
          this.authService.setUserMail(Email);
          this.authService.setUserName(userName);
          console.log('Signup successful:', response);
          console.log(Email); 
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