import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { FooterComponent } from './units/footer/footer.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SigninPageComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
    ContactComponent,
    ArtformsComponent,
  SinglepageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
