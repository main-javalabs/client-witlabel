import { Component, OnInit } from '@angular/core';
import { propiedades } from '../../../../assets/Datos/propiedades-venta'; // Importa la data de propiedades

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  propiedades : any[] = propiedades; // Asigna la data importada a una variable

  constructor() { }
  ngOnInit(): void {
    // No necesitas cargar los datos ya que están directamente en los archivos TypeScript
  }
}
