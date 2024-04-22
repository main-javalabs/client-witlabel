import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-com',
  templateUrl: './floating-com.component.html',
  styleUrls: ['./floating-com.component.css']
})
export class FloatingComComponent {

  expanded: boolean = false;
  selectedOption: string = ''; // Variable para almacenar la opción seleccionada

  constructor(private router: Router) {}

  toggleExpand() {
    this.expanded = !this.expanded;
  }
  
  selectOption(option: string) {
    this.selectedOption = option; // Almacena la opción seleccionada
    
    // Navegar a la ruta correspondiente
    switch(option) {
      case 'editarPerfil':
        this.router.navigate(['/admin/EditarPerfil']);
        break;
      case 'editarHome':
        this.router.navigate(['/admin/createHome']);
        break;
      case 'soporteTecnico':
        this.router.navigate(['/admin/Soporte']);
        break;
      default:
        // Opción por defecto
        break;
    }
  }
}
