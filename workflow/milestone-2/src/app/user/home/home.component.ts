import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pictures:string[]=["shipping.png","wishlist.png","profile.png"];
  urls:string[]=["orders","wishlist","profile"];
  strings:string[]=["Orders","Wishlist","Profile"];

  constructor() { }

  ngOnInit(): void {
  }

}
