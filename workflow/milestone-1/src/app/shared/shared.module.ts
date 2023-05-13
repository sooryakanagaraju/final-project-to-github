import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MaterialModule } from '../material/material.module';
/* import { ScrollDirective } from './directives/scroll.directive';
import { ScrollBackDirective } from './directives/scroll-back.directive'; */
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MenuOutlineComponent/* ,
    ScrollDirective,
    ScrollBackDirective */
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[MenuOutlineComponent]
})
export class SharedModule { }
