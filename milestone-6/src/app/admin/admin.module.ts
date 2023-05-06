import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CrudoperationComponent } from './adminhome/crudoperation/crudoperation.component';
import { MaterialModule } from '../material/material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: AdminhomeComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent,
    CrudoperationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    


  ]
})
export class AdminModule { }
