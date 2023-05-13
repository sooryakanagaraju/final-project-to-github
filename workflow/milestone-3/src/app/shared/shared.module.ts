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




@NgModule({
  declarations: [
    MenuOutlineComponent,
    FiltermoviePipe,
    TypesfilterPipe
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
  exports:[MenuOutlineComponent,FiltermoviePipe,TypesfilterPipe]
})
export class SharedModule { }
