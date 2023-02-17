import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'signin',component:SigninPageComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'single-page',component:SinglepageComponent
  },
  
  
  {
    path:'artforms',component:ArtformsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
