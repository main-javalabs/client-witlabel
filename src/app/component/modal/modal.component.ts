import { Component, Output, EventEmitter } from '@angular/core';

interface ProjectData {
  projectName: string;
  location: string;
  size: string;
  rooms: string;
  bathrooms: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  step: number = 1;
  isActive: boolean = false;
  isClosing: boolean = false;
  propertyType: string = '';
  projectData: ProjectData = {
    projectName: '',
    location: '',
    size: '',
    rooms: '',
    bathrooms: ''
  };

  openModal(): void {
    this.isActive = true;
  }

  nextStep(): void {
    this.step++;
  }

  handlePropertyTypeSelection(type: string): void {
    this.propertyType = type;
    this.nextStep();
  }

  handleProjectDataChange(event: any): void {
    const { name, value } = event.target;
    this.projectData = { ...this.projectData, [name]: value };
  }

  handlePublish(): void {
    this.isClosing = true;
    setTimeout(() => {
      this.closeModal(); // Cierra el modal después de un tiempo
    }, 300);
  }
  
  closeModal(): void {
    this.isActive = false;
    this.closeModalEvent.emit(); // Emitir evento de cierre de modal
  }

  handlePublishClick(): void {
    this.handlePublish();
  }
}
