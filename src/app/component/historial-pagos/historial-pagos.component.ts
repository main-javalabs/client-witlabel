import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.css']
})
export class HistorialPagosComponent {
  // Datos de ejemplo para la tabla de historial de pagos
  pagos = [
    { entradaToken: 100, salidaToken: 20, rentas: 50, pagosComision: 10, fecha: '2024-03-01', tipo: 'Compra', descripcion: 'Compra de tokens' },
    { entradaToken: 100, salidaToken: 20, rentas: 10, pagosComision: 5, fecha: '2024-03-02', tipo: 'Venta', descripcion: 'Venta de tokens' }
    // Puedes agregar más objetos según sea necesario
  ];
}
