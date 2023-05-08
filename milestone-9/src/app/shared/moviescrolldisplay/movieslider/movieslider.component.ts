import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-movieslider',
  templateUrl: './movieslider.component.html',
  styleUrls: ['./movieslider.component.css']
})
export class MoviesliderComponent implements OnInit {
  @Input() movies:any[]=[];
  @Input() movietitle:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
