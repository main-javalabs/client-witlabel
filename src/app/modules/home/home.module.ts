import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { AuthModule} from '../auth/auth.module';
import { UsuariosModule} from '../UserNacvar/Usuarios/usuarios.module';
import { TokenvendidoComponent } from '../../component/tokenvendido/tokenvendido.component';
import { CartasdepropiComponent } from '../../component/cartasdepropi/cartasdepropi.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent,
    TokenvendidoComponent,
    CartasdepropiComponent
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AuthModule,
    UsuariosModule,
    SharedModule 
    
  ],
  exports:[
    HomeComponent,
    TokenvendidoComponent,
    CartasdepropiComponent
  ]
})
export class HomeModule { }
