import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/app/models/types';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MoviereviewService } from 'src/app/shared/services/moviereview.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  state?:any;
  reviews:any;  
  id:any;
 service:any;
 details:any;
 movie:any
 movietypes:any

  constructor(private route:ActivatedRoute,private router:Router,private hs:MovieService,rs:MoviereviewService) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;


    rs.getReviews().subscribe(
      {
        next:(data:any)=>this.reviews=data,
        error:()=>this.reviews={}
      }
    )
     this.route.params.subscribe(
       {
         next: (params)=>{ 
          this.id =params['id']
          this.readData()
         },
         error: () => this.id = 0
       }
     )

  }

  ngOnInit(): void {
  }

  
readData(){

  this.hs.getMoviesById(this.id).subscribe({
     next: (data:any)=> this.movie =data,
     error: ()=> this.movie = {}
  })

  this.hs.getDetails(this.id).subscribe({
      next: (data:any)=> this.details =data,
      error: ()=> this.details = {}
  })
 this.hs.getMovies().subscribe({
  next: (data:any)=> this.movietypes =data,
      error: ()=> this.movietypes = []
 })
}
}

