import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/types';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  movies:movie[]=[];
  smovies:movie[]=[];
  vmovies:movie[]=[];
  fmovies:movie[]=[];
  searchkey:string="";

  constructor(private ms:MovieService) { }

  ngOnInit(): void {
    this.ms.getProducts().subscribe( {
     next: (data:movie[])=>this.movies = data,
     error: ()=> this.movies = []


    }
    )

    this.ms.search.subscribe((val:any)=>{
      this.searchkey=val;
    })

}}