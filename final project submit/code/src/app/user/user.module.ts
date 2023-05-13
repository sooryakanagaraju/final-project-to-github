import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { DetailsComponent } from './userhome/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './userhome/movie/movie.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FavourtiesComponent } from './favourties/favourties.component';
import { AddfavdisplayComponent } from './favourties/addfavdisplay/addfavdisplay.component';








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
      path: "details/:id",
      component: DetailsComponent
    },
    {
      path: "favourites",
      component: FavourtiesComponent
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
    ReviewsComponent,
    FavourtiesComponent,
    AddfavdisplayComponent



  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
