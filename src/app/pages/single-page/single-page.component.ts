import { Component } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-singlepage',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglepageComponent {

  single:any

  ngOnInit(){
    let id = Number(localStorage.getItem('id'))
    this.single = data.filter(e=>e.id===id)
    console.log("title",this.single)
  }
}