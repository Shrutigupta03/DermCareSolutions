import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent{
	msg: string | null = null;
	selectedFile: File | null = null;
	selectedImage: string | ArrayBuffer | null = null;
  	response: string | null = null;
	show: boolean = true;
	res: string |null = null;

  	constructor(private http: HttpClient) { }

	onFileSelected(event: any) {
		this.show = true;
		const file = event.target.files[0] as File;
		if (this.isAllowedExtension(file)) {
		    this.selectedFile = file;
		    this.selectedImage = URL.createObjectURL(this.selectedFile);
		    this.msg = null;
		} else {
		    this.selectedFile = null;
		    this.selectedImage = null;
		    this.msg = 'Invalid file type! Please select a valid image.';
		}
	}

	isAllowedExtension(file: File): boolean {
		const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif'];
		const extension = file.name.split('.').pop()?.toLowerCase();
		return !!extension && allowedExtensions.includes(extension);
	}

  	onSubmit() {
		this.show=false;
    	if (this.selectedImage) {
      	const formData = new FormData();
      	formData.append('image', this.selectedFile);

      	this.http.post<any>('http://localhost:5000/upload', formData).subscribe(
		(response) => {
			this.response = response.message;
			if(this.response==='Basal Cell Carcinoma'){
				this.res = 'BCC';
			}
			if(this.response==='Actinic keratoses and intraepithelial carcinomae'){
				this.res = 'AK';
			}
			if(this.response==='Benign Keratosis-like Lesions'){
				this.res = 'BK-lL';
			}
			if(this.response==='Dermatofibroma'){
				this.res = 'DMF';
			}
			if(this.response==='Melanocytic Nevi'){
				this.res = 'MN';
			}
			if(this.response==='Pyogenic Granulomas and Hemorrhage'){
				this.res = 'PGH';
			}
			if(this.response==='Melanoma'){
				this.res = 'MLNM';
			}

        },
        (error) => {
			console.error('Error uploading image:', error);
		}
      );
    }
  }
}
