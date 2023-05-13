import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MaterialModule } from '../material/material.module';
/* import { ScrollDirective } from './directives/scroll.directive';
import { ScrollBackDirective } from './directives/scroll-back.directive'; */
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { FiltermoviePipe } from './filtermovie.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypesfilterPipe } from './typesfilter.pipe';
import { ReviewfilterPipe } from './reviewfilter.pipe';
import { ScrolrightDirective } from './directives/scrolright.directive';
import { ScrollleftDirective } from './directives/scrollleft.directive';
import { MoviescrolldisplayComponent } from './moviescrolldisplay/moviescrolldisplay.component';
import { MovieitemsComponent } from './moviescrolldisplay/movieitems/movieitems.component';
import { MoviesliderComponent } from './moviescrolldisplay/movieslider/movieslider.component';
import { TranslatePipe } from './pipes/translate.pipe';





@NgModule({
  declarations: [
    MenuOutlineComponent,
    FiltermoviePipe,
    TypesfilterPipe,
    ReviewfilterPipe,
    ScrolrightDirective,
    ScrollleftDirective,
    MoviescrolldisplayComponent,
    MovieitemsComponent,
    MoviesliderComponent,
    TranslatePipe,

/* ,
    ScrollDirective,
    ScrollBackDirective */
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MenuOutlineComponent,FiltermoviePipe,TypesfilterPipe,ReviewfilterPipe,MoviescrolldisplayComponent,ScrollleftDirective ,ScrolrightDirective, TranslatePipe]
})
export class SharedModule { }
