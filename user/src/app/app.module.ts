import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { pdfMake } from "pdfmake/build/pdfmake";  
import { pdfFonts } from "pdfmake/build/vfs_fonts";  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { FooterComponent } from './home/footer/footer.component';
import { ImageComponent } from './home/image/image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BenefitsComponent} from './home/benefits/benefits.component';
import {HeaderComponent} from './home/header/header.component';
import {HeroComponent} from './home/hero/hero.component';
import { GetStartedComponent } from './home/get-started/get-started.component';
import { WhyToChoseComponent } from './home/why-to-chose/why-to-chose.component';
import { BasicImportanceComponent } from './home/basic-importance/basic-importance.component';
import { PdfGeneratorServiceService } from './pdf-generator-service.service';
import { ConnectToDoctorComponent } from './connect-to-doctor/connect-to-doctor.component';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    BenefitsComponent,
    FooterComponent,
    ImageComponent,
    HeroComponent,
    BenefitsComponent,
    HeaderComponent,
    GetStartedComponent,
    WhyToChoseComponent,
    BasicImportanceComponent,
    ConnectToDoctorComponent,
  ],
  imports: [
    AuthModule, 
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    UploadModule,
  ],
  providers: [PdfGeneratorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
