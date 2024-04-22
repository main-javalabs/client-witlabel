import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUserComponent } from './User/navbar-user/navbar-user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SharedRoutingModule } from './shared-routing.module'; // Importa SharedRoutingModule
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from '../app-routing.module';
import { UsuariosRoutingModule } from '../modules/UserNacvar/Usuarios/usuarios-routing.module';
import { HeaderHomComponent } from './header-hom/header-hom.component';
import {NavbarAdminComponent } from './Admin/navbar-admin/navbar-admin.component';
import { HeaderAdminComponent} from './Admin/header-admin/header-admin.component';

import { HeaderCreaHomeComponent} from './header-crea-home/header-crea-home.component';



@NgModule({
  declarations: [
    
    NavbarUserComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderHomComponent,
    NavbarAdminComponent,
    HeaderAdminComponent,
    HeaderCreaHomeComponent,
    

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
   
  ],
  exports: [ 
   
    NavbarUserComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    RouterModule,
   HeaderHomComponent,
    UsuariosRoutingModule , 
    NavbarAdminComponent,
    HeaderAdminComponent,
    HeaderCreaHomeComponent
  ]
})
export class SharedModule { }