import { Component } from '@angular/core';
import { proyectosTokenComprado } from '../../../../../assets/Datos/Datos-token'; // Importar el array de datos de proyectos token comprado

@Component({
  selector: 'app-tikets',
  templateUrl: './tikets.component.html',
  styleUrls: ['./tikets.component.css']
})
export class TiketsComponent {


  proyectosTokenComprado: any[] = proyectosTokenComprado; // Utilizar el array de datos de proyectos token comprado

  constructor() { }

}
