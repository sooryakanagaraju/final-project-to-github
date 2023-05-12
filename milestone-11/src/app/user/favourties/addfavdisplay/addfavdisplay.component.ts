import { Component, OnInit,Input } from '@angular/core';
import { CoreService } from 'src/app/admin/services/core.service';
import { FavouritesService } from 'src/app/shared/services/favourites.service';
import { movie } from 'src/app/models/types';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addfavdisplay',
  templateUrl: './addfavdisplay.component.html',
  styleUrls: ['./addfavdisplay.component.css']
})
export class AddfavdisplayComponent implements OnInit {
  @Input() movie:any;
  movies:movie[]=[];
  constructor(private fs:FavouritesService, private cs:CoreService,
    public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  
   deletefav(id: number) {
    this.fs.deletefavourites(id).subscribe({
      next: (res) => {
        this.cs.openSnackBar('Movie deleted from favourites!', 'done');
        location.reload();
      },
      error: console.log
    });

  }

  changeroutedetails(){
   
      this.router.navigate(['./details',this.movie.id],{relativeTo:this.route,state:this.movie});
    }
  
}