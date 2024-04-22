import { Component } from '@angular/core';
import { proyectosTokenComprado } from '../../../../../assets/Datos/Datos-token'; // Importar el array de datos de proyectos token comprado

@Component({
  selector: 'app-retiros',
  templateUrl: './retiros.component.html',
  styleUrls: ['./retiros.component.css']
})
export class RetirosComponent {


  proyectosTokenComprado: any[] = proyectosTokenComprado; // Utilizar el array de datos de proyectos token comprado

  constructor() { }

}
