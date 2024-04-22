import { Component } from '@angular/core';
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos necesarios

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  // Ejemplo de propiedad para almacenar las notificaciones
  notificaciones: string[] = ['Notificación 1', 'Notificación 2', 'Notificación 3'];

  // Iconos de Font Awesome
  faEnvelope = faEnvelope;
  faTrash = faTrash;

  // Método para agregar una nueva notificación
  agregarNotificacion(nuevaNotificacion: string) {
    this.notificaciones.push(nuevaNotificacion);
  }
}
