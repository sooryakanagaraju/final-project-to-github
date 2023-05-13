import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/app/models/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  state?:any;

  constructor(private route:ActivatedRoute,private router:Router) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
  }

}
