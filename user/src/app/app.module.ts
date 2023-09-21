import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ImageComponent } from './image/image.component';
import { CrouselComponent } from './crousel/crousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ResultComponent } from './result/result.component';
import {BenefitsComponent} from './benefits/benefits.component';
import {HeaderComponent} from './header/header.component';
import {HeroComponent} from './hero/hero.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { WhyToChoseComponent } from './why-to-chose/why-to-chose.component';
import { BasicImportanceComponent } from './basic-importance/basic-importance.component';


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
    CrouselComponent,
    UploadImgComponent,
    ResultComponent,
    HeroComponent,
    BenefitsComponent,
    HeaderComponent,
    GetStartedComponent,
    WhyToChoseComponent,
    BasicImportanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
