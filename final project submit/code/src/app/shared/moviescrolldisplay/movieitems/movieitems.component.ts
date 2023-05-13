import { Component, OnInit ,Input} from '@angular/core';
import { CoreService } from 'src/app/admin/services/core.service';

@Component({
  selector: 'app-movieitems',
  templateUrl: './movieitems.component.html',
  styleUrls: ['./movieitems.component.css']
})
export class MovieitemsComponent implements OnInit {
  @Input() movie:any;
  constructor(private cs:CoreService) { }

  ngOnInit(): void {
  }
  openloginsnack(){
    this.cs.openSnackBar('Login in to access the movies', 'done');
  }
}
