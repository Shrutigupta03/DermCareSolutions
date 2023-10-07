import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrouselComponent } from './crousel/crousel.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CrouselComponent,
    UploadImgComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UploadModule { }
