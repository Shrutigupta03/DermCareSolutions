import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  role: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.role = this.authService.getUserType();
    console.log(this.role);
  }
}
