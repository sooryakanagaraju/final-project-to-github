import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';
import { MovieService } from '../services/movie.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent implements OnInit {


lang:any="english"
languages:any=[
{name:"english", value:"english"},
{name:"french", value:"french"}

]

public searchTerm : string="";

username:any=""
  constructor(private log:LogService, private ms:MovieService,private router:Router,private route:ActivatedRoute
   , private ts:TranslateService) { this.ts.use(this.lang) }


   changeLang():void{
    this.ts.use(this.lang)
   }


  ngOnInit(): void { }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.ms.search.next(this.searchTerm)
  }
  
  logout(){
    this.log.logout();
    window.location.reload();
}

}
