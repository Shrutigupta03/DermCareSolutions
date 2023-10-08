import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { BrowserModule } from '@angular/platform-browser';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPswrdComponent } from './forgot-pswrd/forgot-pswrd.component';


@NgModule({
  declarations: [
    SignUpComponent,
    LogInComponent,
    ForgotPswrdComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
})
export class AuthModule { }
