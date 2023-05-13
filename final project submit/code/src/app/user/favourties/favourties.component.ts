import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/types';
import { FavouritesService } from 'src/app/shared/services/favourites.service';
@Component({
  selector: 'app-favourties',
  templateUrl: './favourties.component.html',
  styleUrls: ['./favourties.component.css']
})
export class FavourtiesComponent implements OnInit {
  movies:movie[]=[];
  constructor(private fs:FavouritesService) { }

  ngOnInit(): void {
    this.fs.getfavourites().subscribe( {
      next: (data:movie[])=>this.movies = data,
      error: ()=> this.movies = [] 
     }
     )

}
}