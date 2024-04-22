import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedades-admin',
  templateUrl: './propiedades-admin.component.html',
  styleUrls: ['./propiedades-admin.component.css']
})
export class PropiedadesAdminComponent {
  propiedades = [
    {
      nombre: 'Propiedad 1',
      direccion: 'Dirección 1',
      precioToken: 500,
      tokenVendidos: 200,
      tokenFaltante: '10K',
      imagenUrl: 'https://www.arquimaster.com.ar/realestate/Images/square_laplata3b.jpg'
    },
    {
      nombre: 'Propiedad 1',
      direccion: 'Dirección 1',
      precioToken: 500,
      tokenVendidos: 200,
      tokenFaltante: '10K',
      imagenUrl: 'https://www.arquimaster.com.ar/realestate/Images/square_laplata3b.jpg'
    },
    {
      nombre: 'Propiedad 1',
      direccion: 'Dirección 1',
      precioToken: 500,
      tokenVendidos: 200,
      tokenFaltante: '10K',
      imagenUrl: 'https://www.arquimaster.com.ar/realestate/Images/square_laplata3b.jpg'
    },
    {
      nombre: 'Propiedad 1',
      direccion: 'Dirección 1',
      precioToken: 500,
      tokenVendidos: 200,
      tokenFaltante: '10K',
      imagenUrl: 'https://www.arquimaster.com.ar/realestate/Images/square_laplata3b.jpg'
    },
    {
      nombre: 'Propiedad 1',
      direccion: 'Dirección 1',
      precioToken: 500,
      tokenVendidos: 200,
      tokenFaltante: '10K',
      imagenUrl: 'https://www.arquimaster.com.ar/realestate/Images/square_laplata3b.jpg'
    },
    {
      nombre: 'Propiedad 1',
      direccion: 'Dirección 1',
      precioToken: 500,
      tokenVendidos: 200,
      tokenFaltante: '10K',
      imagenUrl: 'https://www.arquimaster.com.ar/realestate/Images/square_laplata3b.jpg'
    },
    {
      nombre: 'Propiedad 1',
      direccion: 'Dirección 1',
      precioToken: 500,
      tokenVendidos: 200,
      tokenFaltante: '10K',
      imagenUrl: 'https://www.arquimaster.com.ar/realestate/Images/square_laplata3b.jpg'
    },
    
  ];

  verDetalles(propiedad: any) {
    // Aquí puedes implementar la lógica para mostrar más detalles de la propiedad
    console.log(propiedad);
    // Por ejemplo, podrías abrir un modal o navegar a una nueva página con los detalles de la propiedad
  }
}
