import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { DetailsComponent } from './userhome/details/details.component';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './userhome/movie/movie.component';
import { TestredirectComponent } from './testredirect/testredirect.component';





const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"details",
      component: DetailsComponent
    },{
      path:"testredirect",
      component: TestredirectComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    DetailsComponent,
    MovieComponent,
    TestredirectComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }
