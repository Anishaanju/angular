
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-artforms',
  templateUrl: './artforms.component.html',
  styleUrls: ['./artforms.component.css']
})
export class ArtformsComponent  {

  constructor(private router: Router) { }
  artforms=data
  goToNextPage(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/single-page']);
  
  }
}