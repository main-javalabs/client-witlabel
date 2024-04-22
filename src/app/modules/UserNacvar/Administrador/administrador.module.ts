import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';


import { AdministradorRoutingModule } from './administrador-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TokensRecibirComponent } from './tokens-resibir/tokens-resibir.component';
import { RetirosComponent } from './retiros/retiros.component';
import { UtilidadesComponent } from './utilidades/utilidades.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import {UsuariosModule} from '../../UserNacvar/Usuarios/usuarios.module';
import { PropiedadesAdminComponent } from '../../../component/propiedades-admin/propiedades-admin.component';
import { GenerarUsuariosComponent } from '../../../component/generar-usuarios/generar-usuarios.component';
import { GraficaComponent } from '../../../component/grafica/grafica.component';
import {ModalComponent } from '../../../component/modal/modal.component';
import {GenerarPropiedadComponent } from '../../../component/generar-propiedad/generar-propiedad.component';
import {FloatingComComponent } from '../../../component/floating-com/floating-com.component';


import {CreateHomeModule } from '../../create-home/create-home.module';
import { SoporteComponent } from './soporte/soporte.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';






@NgModule({
  declarations: [
    UsuariosComponent,
    ProyectosComponent,
    TokensRecibirComponent,
    RetirosComponent,
    UtilidadesComponent,
    MarketplaceComponent,
    PropiedadesAdminComponent ,
    GenerarUsuariosComponent,
    GraficaComponent,
    ModalComponent,
    GenerarPropiedadComponent,
    FloatingComComponent,
    SoporteComponent,
    EditarPerfilComponent,
   
    
   
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    UsuariosModule,
    FormsModule,
    CreateHomeModule,

  ]
})
export class AdministradorModule { }
