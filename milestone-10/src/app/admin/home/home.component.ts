import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,
    public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  changeroute( ){
    this.router.navigate(['adminfeedbackhome'],{relativeTo:this.route});
  }

  routetomoviereview(){
    this.router.navigate(['adminhome'],{relativeTo:this.route})
  }
  routetousercontrol(){
    this.router.navigate(['adminusercontrol'],{relativeTo:this.route})
  }
}
