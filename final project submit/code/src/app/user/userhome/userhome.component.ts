import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/app/models/types';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  movies:movie[]=[];
  searchkey:string="";

  // FILTER ACCORDING TO GENRE
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


  constructor(private ms:MovieService,public router:Router,
    public route:ActivatedRoute) { }
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

  routefav(){
    this.router.navigate(['favourites'],{relativeTo:this.route});
  }

  ngOnInit(): void {
    this.ms.getMovies().subscribe( {
     next: (data:movie[])=>this.movies = data,
     error: ()=> this.movies = []
    }
    )

    this.ms.getMovies().subscribe(
      {
          next : (data:any)=> this.movietypes =data,
          error:()=>this.movietypes=[]
      }
   )

    this.ms.search.subscribe((val:any)=>{
      this.searchkey=val;
    })
}
}
