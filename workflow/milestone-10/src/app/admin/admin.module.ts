import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CrudoperationComponent } from './adminhome/crudoperation/crudoperation.component';
import { MaterialModule } from '../material/material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminfeedbackhomeComponent } from './adminfeedbackhome/adminfeedbackhome.component';
import { CRUDFeedbackComponent } from './adminfeedbackhome/crudfeedback/crudfeedback.component';
import { AdminusercontrolhomeComponent } from './adminusercontrolhome/adminusercontrolhome.component';
import { CrudoperationuserComponent } from './adminusercontrolhome/crudoperationuser/crudoperationuser.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [ 
    {
      path: "adminhome",
      component: AdminhomeComponent
    },
    {
      path:"adminfeedbackhome",
      component:AdminfeedbackhomeComponent
    },
    {
      path:"adminusercontrol",
      component:AdminusercontrolhomeComponent
    }
  ],
  
}

]

@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent,
    CrudoperationComponent,
    AdminfeedbackhomeComponent,
    CRUDFeedbackComponent,
    AdminusercontrolhomeComponent,
    CrudoperationuserComponent
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
