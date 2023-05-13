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

  // changing now for filtering types
  genre:string[]=[
    "All",
    "Adventure",
    "Action",
    "Fantasy",
    "Drama",
    "Comedy"
  ]
  movietypes:any;
  selected="All"

/// ending here 
  constructor(private ms:MovieService) { }
  All(){
    this.selected="All";
  }

  Action(){
    this.selected="Action";
  }

  Adventure(){
    this.selected="Adventure"
  }

  Drama(){
    this.selected="Drama"
  }

  Fantasy(){
    this.selected="Fantasy"
  }

  ngOnInit(): void {
    this.ms.getProducts().subscribe( {
     next: (data:movie[])=>this.movies = data,
     error: ()=> this.movies = []


    }
    )

    this.ms.getProducts().subscribe(
      {
          next : (data:any)=> this.movietypes =data,
          error:()=>this.movietypes=[]
      }
   )

    this.ms.search.subscribe((val:any)=>{
      this.searchkey=val;
    })

    

}}