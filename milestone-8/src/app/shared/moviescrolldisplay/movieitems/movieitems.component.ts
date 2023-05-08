import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-movieitems',
  templateUrl: './movieitems.component.html',
  styleUrls: ['./movieitems.component.css']
})
export class MovieitemsComponent implements OnInit {
  @Input() movie:any;
  constructor() { }

  ngOnInit(): void {
  }

}
