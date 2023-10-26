import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IsActiveMatchOptions } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router,private activatedRoute: ActivatedRoute, private authService: AuthService){}

  showProfile(): boolean {
    return this.authService.isAuthenticated();
  }

  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  newCrousel(): void {
      this.router.navigate(['/check']);
  }

  tohome(){
    document.getElementById("home").scrollIntoView({behavior:'smooth'});
  }
  toabout(){
    document.getElementById("about").scrollIntoView({behavior:'smooth'});
  }
  toWhy(){
    document.getElementById("why").scrollIntoView({behavior:'smooth'});
  }
  toBenefits(){
    document.getElementById("benefits").scrollIntoView({behavior:'smooth'});
  }
  meetDoctor(){
		this.router.navigate(['connect-to-doctor']);
	}
  // toreview(){
  //   document.getElementById("reviews").scrollIntoView({behavior:'smooth'});
  // }

  Profile(){
    this.router.navigate(['profile'])
  }

}
