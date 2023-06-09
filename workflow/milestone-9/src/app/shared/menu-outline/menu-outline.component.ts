import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';
import { MovieService } from '../services/movie.service';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent implements OnInit {

@Input() pictures:string[]=[];
@Input() strings:string[]=[];
@Input() urls:string[]=[];

public searchTerm : string="";
cartshow:boolean=true;
cartCount:number=1;
username:any=""
  constructor(private log:LogService, private cartService:MovieService,private router:Router,private route:ActivatedRoute
   , private translateService: TranslateService) { }

  ngOnInit(): void {
    let usertype=sessionStorage.getItem("usertype");
    this.username=sessionStorage.getItem("username");
    if(usertype=="admin")
     this.cartshow=false;
    let cart=localStorage.getItem("cart");
    if(cart)
       this.cartCount=JSON.parse(cart).length;
    else
       this.cartCount=0;

       
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm)
  }
  
  navigate(url:string){
    
    if(url=="")
    window.location.reload()
    else
    this.router.navigate([url], {relativeTo:this.route});
  }
  logout(){
    this.log.logout();
    window.location.reload();
}


setLanguage(lang: string){
  this.translateService.language = lang;
  this.translateService.refreshMessageBundle();
}
}
