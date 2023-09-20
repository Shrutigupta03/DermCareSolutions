import { Component, OnInit} from '@angular/core';
import { UploadImgService } from '../upload-img.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent{
  	
    url: any;
	msg = "";
	selectFile(event: any) { 
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
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

	constructor(private http: HttpClient) {
		
	}

	onsubmit(data:any){
		const rqstdata = { image: data.image };
		this.http.post(
			'http://localhost:5000/image', 
			rqstdata)
			.subscribe((res) => {
				console.log(res)
			}
		);
		
	}
}
