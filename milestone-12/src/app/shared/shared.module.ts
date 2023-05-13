import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MaterialModule } from '../material/material.module';
/* import { ScrollDirective } from './directives/scroll.directive';
import { ScrollBackDirective } from './directives/scroll-back.directive'; */
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ScrolrightDirective } from './directives/scrolright.directive';
import { ScrollleftDirective } from './directives/scrollleft.directive';
import { MoviescrolldisplayComponent } from './moviescrolldisplay/moviescrolldisplay.component';
import { MovieitemsComponent } from './moviescrolldisplay/movieitems/movieitems.component';
import { MoviesliderComponent } from './moviescrolldisplay/movieslider/movieslider.component';

import { TypesfilterPipe } from './pipes/typesfilter.pipe';
import { FiltermoviePipe } from './services/filtermovie.pipe';
import { ReviewfilterPipe } from './pipes/reviewfilter.pipe';
/* import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core'; */
import { UserlistService } from './services/userlist.service';

/* export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,"./assets/i18n",".json");
}
 */




@NgModule({
  declarations: [
    MenuOutlineComponent,
    FiltermoviePipe,
    TypesfilterPipe,
    ReviewfilterPipe ,
    ScrolrightDirective,
    ScrollleftDirective,
    MoviescrolldisplayComponent,
    MovieitemsComponent,
    MoviesliderComponent,


/* ,
    ScrollDirective,
    ScrollBackDirective */
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
/*     TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }) */
  ],
  exports:[MenuOutlineComponent,FiltermoviePipe,TypesfilterPipe,ReviewfilterPipe,MoviescrolldisplayComponent,ScrollleftDirective ,ScrolrightDirective,/* TranslateModule */]
})
export class SharedModule { }
