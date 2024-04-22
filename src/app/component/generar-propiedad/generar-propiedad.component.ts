import { Component } from '@angular/core';

@Component({
  selector: 'app-generar-propiedad',
  templateUrl: './generar-propiedad.component.html',
  styleUrls: ['./generar-propiedad.component.css']
})
export class GenerarPropiedadComponent {
  modalOpen: boolean = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
