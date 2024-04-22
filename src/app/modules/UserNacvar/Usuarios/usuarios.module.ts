// usuarios.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppUserComponent } from './app-user.component';


import { ProyectosComponent } from './proyectos/proyectos.component';
import { RetirosComponent } from './retiros/retiros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TiketsComponent } from './tikets/tikets.component';
import { RouterModule } from '@angular/router'; 
import { TokenCompradoComponent } from '../../../component/token-comprado/token-comprado.component';
import { TokenHolderComponent } from '../../../component/token-holder/token-holder.component';
import { TokensCompradosComponent } from '../../../component/tokens-comprados/tokens-comprados.component';
import { HistorialPagosComponent } from '../../../component/historial-pagos/historial-pagos.component';
import { DatosUsuarioComponent } from '../../../component/datos-usuario/datos-usuario.component';
import { DatosBasicosComponent } from '../../../component/datos-basicos/datos-basicos.component';
import { NotificacionesComponent } from '../../../component/notificaciones/notificaciones.component';
import { CrearUsuariosComponent } from '../../../component/crear-usuarios/crear-usuarios.component';
import { FormsModule } from '@angular/forms'; 






@NgModule({
  declarations: [
    AppUserComponent,
    ProyectosComponent,
    RetirosComponent,
    PerfilComponent,
    TiketsComponent,
    TokenCompradoComponent, 
    TokenHolderComponent,
    TokensCompradosComponent,
    HistorialPagosComponent,
    DatosUsuarioComponent,
    DatosBasicosComponent,
    NotificacionesComponent,
    CrearUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
  
    
  ],
  exports: [
    AppUserComponent,
    ProyectosComponent,
    RetirosComponent,
    PerfilComponent,
    TiketsComponent,
    TokenCompradoComponent, 
    TokenHolderComponent,
    TokensCompradosComponent,
    HistorialPagosComponent,
    DatosUsuarioComponent,
    DatosBasicosComponent,
    NotificacionesComponent,
    
    CrearUsuariosComponent
  ]
})
export class UsuariosModule { }

