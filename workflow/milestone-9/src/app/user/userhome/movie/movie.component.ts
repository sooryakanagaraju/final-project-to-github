import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie:any;
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  changeRoute(){
    this.router.navigate(['details',this.movie.id],{relativeTo:this.route,state:this.movie});
  }

}
