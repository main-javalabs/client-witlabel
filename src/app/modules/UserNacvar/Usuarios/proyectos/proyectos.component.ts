import { Component, OnInit } from '@angular/core';
import { proyectos } from '../../../../../assets/Datos/Datos-propiedades'; // Importar el archivo de datos de proyectos
import { proyectosTokenComprado } from '../../../../../assets/Datos/Datos-token'; // Importar el archivo de datos de proyectos token comprado

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any[] = proyectos; // Utilizar el array de datos de proyectos
  proyectosTokenComprado: any[] = proyectosTokenComprado; // Utilizar el array de datos de proyectos token comprado

  constructor() { }

  ngOnInit(): void {
    // No necesitas cargar los datos ya que están directamente en los archivos TypeScript
  }

}
