import { Component} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PdfGeneratorServiceService } from 'src/app/pdf-generator-service.service';
import { HttpClient } from '@angular/common/http';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts"; 

pdfMake.vfs = pdfFonts.pdfMake.vfs; 
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
	detail: boolean = false;
	recommend: boolean = false;
	report: boolean = false;
	reportRes: string |null = null;

	userAnswers: string[] = ['', ''];
	questions = [

		{
		    text: 'Symptoms: ',
		    options: [],
		},
		{
			text: 'Name: ',
			answer: '', 
		},
		{
			text: 'Age: ',
			answer: '', 
		},
		{
			text: 'Gender: ',
			answer: '', 
		},
		{
			text: 'Blood-group: ',
			answer: '', 
		},
		{
			text: 'skin type: ',
			answer: '', 
		},
		{
			text: 'How long have you been experiencing these symptoms?',
			answer: '', 
		},
		{
			text: 'Provide a brief description of your condition:',
			answer: '', 
		},
	];
	textQuestions: string[] = ['', ''];
// router: any;

  	constructor(private http: HttpClient,private router: Router){}

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
		this.detail = false;
		this.recommend = false;
		this.report=false;
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
			this.questions[0].options = this.generateOptions();
        },
        (error) => {
			console.error('Error uploading image:', error);
		}
      );
     }
    }
	showDetail() {
		if(this.detail === true){
			this.detail = false;
		}
		else if(this.recommend===true){
			this.detail = true;
			this.recommend = false;
		}
		else{
			this.detail = true;
		}
	}
	showRecommend() {
		if(this.recommend === true){
			this.recommend = false;
		}
		else if(this.detail===true){
			this.recommend=true;
			this.detail=false;
		}
		else{
			this.recommend = true;
		}
	}
	generateReport(){
		if(this.report===true){
			this.report=false;
		}
		else{
			this.report=true;
		}
	}
	
	generateOptions() {
		const options = [];
		if (this.res==='BCC') {
			options.push(
				{ text: 'Lumps, bumps, pimples, scabs or scaly lesions on your skin.', selected: false },
				{ text: 'The lump is slightly see-through (translucent) and close to your normal skin color or white to pink, brown to black or black to blue.', selected: false },
				{ text: 'The lump appears shinier than the skin around it with tiny visible blood vessels.', selected: false },
				{ text: 'The lump grow slowly over time.', selected: false },
				{ text: 'The lump is itchy or painful.', selected: false },
				{ text: 'The lump form an ulcer, which can ooze clear fluid or bleed with contact', selected: false },
			);
		} else if (this.res === 'AK') {
			options.push(
				{ text: 'Colour of bumps is gray, pink, red or same as skin colour', selected: false },
				{ text: 'Bleeding', selected: false },
				{ text: 'Burning, stinging or itching', selected: false },
				{ text: 'Dry, scaly lips', selected: false },
				{ text: 'Hornlike skin growths that stick out (like an animal’s horn)', selected: false },
				{ text: 'Loss of color in the lips', selected: false },
				{ text: 'Pain or tenderness', selected: false }
			);
		} else if (this.res === 'BK-lL'){
			options.push(
				{ text: 'Raised Bumps or Spots on the skin surface', selected: false },
				{ text: 'Changes in skin color, such as brown, gray, or flesh-colored spots or patches', selected: false },
				{ text: 'Variable size spots', selected: false },
				{ text: 'Itching or irritation in the affected areas', selected: false },
				{ text: 'Slow growth of lesions', selected: false },
				{ text: 'Associated with long-term sun exposure', selected: false }
			);
		}else if(this.res === 'DMF'){
			options.push(
				{ text: 'Present as a small, firm, brownish to reddish-brown nodule on the skin', selected: false },
				{ text: 'Slightly darker or reddish-brown spot ', selected: false },
				{ text: 'Feels hard or firm to the touch', selected: false },
				{ text: 'Surface is smooth or slightly raised and may have a dimpled or depressed center', selected: false },
				{ text: 'Tenderness or mild itching in the area of the dermatofibroma', selected: false },
				{ text: 'Well defined borders', selected: false }
			);
		}else if(this.res === 'MN'){
			options.push(
				{ text: 'Small, round or oval, and raised above the skin surface', selected: false },
				{ text: 'Different colored moles, including brown, tan, black, or even pink', selected: false },
				{ text: 'Variable size, ranging from tiny, pinpoint-sized moles to larger ones', selected: false },
				{ text: 'Symmetric and regular shape.', selected: false },
				{ text: 'Change in color, size, shape, or texture over time', selected: false }
			);
		}else if(this.res === 'PGH'){
			options.push(
				{ text: 'Small, raised, and dome-shaped growths on the skin or mucous membranes', selected: false },
				{ text: 'Appear in shades of red, pink, or reddish-brown,', selected: false },
				{ text: 'Growths bleed spontaneously or with minor trauma, such as scratching or rubbing', selected: false },
				{ text: 'Mild discomfort, pain, or itching', selected: false },
				{ text: 'grow quickly (suddenly over a few weeks)', selected: false }
			);
		}else if(this.res === 'MLNM'){
			options.push(
				{ text: 'Appear as atypical moles or develop within an existing mole', selected: false },
				{ text: 'Change in size, shsape, texture or color over time', selected: false },
				{ text: 'Color of moles are shades of brown, black, blue, red, or white', selected: false },
				{ text: 'Have uneven, irregular, or poorly defined borders', selected: false },
				{ text: 'Itches, bleeds, or becomes painful', selected: false },
				{ text: 'Unexplained fatigue, unintended weight loss, or swollen lymph nodes', selected: false },
			);
		}
		else {
		  options.push(
			{ text: 'Default Option', selected: false }
		  );
		}
		return options;
	  }
	
	  generatePDF() {

		// if (this.questions.every((question) => question.options.every((option) => !option.selected))) {
		// 		alert('Please select at least one answer before generating the PDF.');		
		// 	return; 
		// }

		const docDefinition = {
		  content: [
			{ text: 'Skin Diagnosis Report', style: 'header' },
			{ text: '\n' },
		  ],

		  	styles: {
				header: {
			  		fontSize: 22,
					color: '#0818A8',
					alignment: 'center',
					decoration: 'underline',
			  		bold: true
				},
				subheader: {
					fontSize: 10,
					bold: true
				},
				answer: {
					margin: [ 10, 0],
					color: '#28282B',
					fontSize: 10
				}
			}
		};

		for (let i = 0; i < this.questions.length; i++) {
			const question = this.questions[i];
			docDefinition.content.push({ text: `${question.text}`, style: 'subheader' });
  
			if (question.hasOwnProperty('answer')) {
			  docDefinition.content.push({ text: `  ${question.answer}`, style: 'answer' });
			} else {
			  for (let j = 0; j < question.options.length; j++) {
				if (question.options[j].selected) {
				  docDefinition.content.push({ text: `  ${question.options[j].text}`, style:'answer' });
				}
			  }
			}
  
			docDefinition.content.push({ text: '\n'});
	  	}
	  	const pdfDocGenerator = pdfMake.createPdf(docDefinition);
	  	pdfDocGenerator.open();
	
	}

    meetDoctor():void{
		this.router.navigate(['connect-to-doctor']);
	}

}
