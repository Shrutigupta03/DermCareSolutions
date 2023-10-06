import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IsActiveMatchOptions } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router,private activatedRoute: ActivatedRoute)
  
  {}
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  newCrousel(): void {
      this.router.navigate(['check']);
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

}
