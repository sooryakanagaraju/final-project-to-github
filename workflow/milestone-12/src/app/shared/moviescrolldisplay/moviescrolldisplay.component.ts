import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/types';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-moviescrolldisplay',
  templateUrl: './moviescrolldisplay.component.html',
  styleUrls: ['./moviescrolldisplay.component.css']
})
export class MoviescrolldisplayComponent implements OnInit {
  movies:movie[]=[];


  constructor(private ps:MovieService) { }

  ngOnInit(): void {
    this.ps.getMovies().subscribe( {
     next: (data:movie[])=>this.movies = data,
     error: ()=> this.movies = []
    }
    )
  }
}