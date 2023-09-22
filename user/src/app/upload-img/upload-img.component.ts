import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent{
	msg = "";

	selectedFile: File | null = null;
	selectedImage: string | ArrayBuffer | null = null;
  	response: string | null = null;

  	constructor(private http: HttpClient) { }

  	onFileSelected(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image!!';
			return;
		}
		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported!!";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0] as File);

		reader.onload = (_event) => {
			this.msg = "";
			this.selectedFile = event.target.files[0] as File;
			this.selectedImage = this.selectedFile ? URL.createObjectURL(this.selectedFile) : null;
		}

  	}

  	onSubmit() {
    	if (this.selectedFile) {
      	const formData = new FormData();
      	formData.append('image', this.selectedFile);

      	this.http.post<any>('http://localhost:5000/upload', formData).subscribe(
		(response) => {
			this.response = response.message;
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }
}
