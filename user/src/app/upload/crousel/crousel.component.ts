import { Component, Input, OnInit } from '@angular/core';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

interface crouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {
  @Input() images: crouselImage[] = [
    {
      imageSrc: 'assets/images/distance-slider.png',
      imageAlt: 'first',
    },
    {
      imageSrc: "assets/images/focus-slider.png",
      imageAlt: 'second',
    },
    {
      imageSrc: 'assets/images/hand-slider.png',
      imageAlt: 'third',
    },
  ]

  @Input() indicators = true;
  @Input() controls = true;
  @Input() lastSlider = false;

  selectedIndex = 0;

  ngOnInit(): void {

  }

  // sets index of image on dot/indicator click
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0){
      this.lastSlider = false;
    }
    else{
      this.selectedIndex--;
      this.lastSlider = false;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1) {
      this.lastSlider = true;
    }
    else{
      this.selectedIndex++;
      this.lastSlider = false;
    }
  }

  constructor(private router: Router) {}

    UploadImage(): void {
        this.router.navigateByUrl('image');
    }

}
