import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TokensRecibirComponent } from './tokens-resibir/tokens-resibir.component';
import { RetirosComponent } from './retiros/retiros.component';
import { UtilidadesComponent } from './utilidades/utilidades.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import {CreateHomeComponent } from '../../create-home/create-home.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { SoporteComponent } from './soporte/soporte.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'usuarios', component:UsuariosComponent },
      { path: 'proyectos', component:ProyectosComponent },
      { path: 'tokensResibir', component:TokensRecibirComponent },
      { path: 'retiros', component:RetirosComponent },
      { path: 'utilidades', component:UtilidadesComponent },
      { path: 'marketplace', component:MarketplaceComponent },
      { path: 'createHome', component:CreateHomeComponent },
      { path: 'EditarPerfil', component:EditarPerfilComponent },
      { path: 'Soporte', component:SoporteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
