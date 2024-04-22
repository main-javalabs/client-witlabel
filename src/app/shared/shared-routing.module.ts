import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarUserComponent } from './User/navbar-user/navbar-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
