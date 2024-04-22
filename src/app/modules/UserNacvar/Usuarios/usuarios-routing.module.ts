import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { RetirosComponent } from './retiros/retiros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TiketsComponent } from './tikets/tikets.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'proyecto', component: ProyectosComponent },
      { path: 'retiros', component: RetirosComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'tikets', component: TiketsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
