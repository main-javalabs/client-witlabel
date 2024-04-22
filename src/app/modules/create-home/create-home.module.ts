import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHomeComponent } from './create-home.component';
import {EditMenuHomeComponent} from './edit-menu-home/edit-menu-home.component';
import {EditHomePublicComponent} from './edit-home-public/edit-home-public.component';



import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';




@NgModule({
  declarations: [
    CreateHomeComponent,
    EditMenuHomeComponent,
    EditHomePublicComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
  ]
})
export class CreateHomeModule { }
