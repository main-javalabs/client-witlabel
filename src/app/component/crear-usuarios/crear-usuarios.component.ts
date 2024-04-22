import { Component, OnInit } from '@angular/core';
import { faSearch, faThLarge, faStream, faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  showCards: boolean = true;
  searchTerm: string = '';
  filteredUserData: any[] = [];
  userData: any[] = [
    {
      nombre: 'Pedro',
      apellido: 'Perez',
      correo: 'pedro@example.com',
      wallet: 'w232yjhbih733gukjk',
      telefono: '320 777 77 77',
      linkReferido: 'Inactivo', // Estado del enlace de referidos: Inactivo
      foto: 'profile1.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'María',
      apellido: 'Gómez',
      correo: 'maria@example.com',
      wallet: 'w098ghas8993jkfd',
      telefono: '310 888 88 88',
      linkReferido: 'Activo', // Estado del enlace de referidos: Activo
      foto: 'profile2.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Juan',
      apellido: 'Rodríguez',
      correo: 'juan@example.com',
      wallet: 'w723hkd8s33hjdlk',
      telefono: '315 999 99 99',
      linkReferido: 'En espera', // Estado del enlace de referidos: En espera
      foto: 'profile3.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Laura',
      apellido: 'Martínez',
      correo: 'laura@example.com',
      wallet: 'wqwe982lakdhfjsl',
      telefono: '311 666 66 66',
      linkReferido: 'Inactivo', // Estado del enlace de referidos: Inactivo
      foto: 'profile4.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Carlos',
      apellido: 'López',
      correo: 'carlos@example.com',
      wallet: 'w8ak2jhsd9923kjfh',
      telefono: '318 555 55 55',
      linkReferido: 'Activo', // Estado del enlace de referidos: Activo
      foto: 'profile5.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Ana',
      apellido: 'Hernández',
      correo: 'ana@example.com',
      wallet: 'w098sdif38dufj3',
      telefono: '313 444 44 44',
      linkReferido: 'En espera', // Estado del enlace de referidos: En espera
      foto: 'profile6.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Sergio',
      apellido: 'García',
      correo: 'sergio@example.com',
      wallet: 'w8230kfd8sh3298',
      telefono: '312 333 33 33',
      linkReferido: 'Inactivo', // Estado del enlace de referidos: Inactivo
      foto: 'profile7.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Luisa',
      apellido: 'Fernández',
      correo: 'luisa@example.com',
      wallet: 'w89sd7fh23jdlkdj',
      telefono: '314 222 22 22',
      linkReferido: 'Activo', // Estado del enlace de referidos: Activo
      foto: 'profile8.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Elena',
      apellido: 'Gutiérrez',
      correo: 'elena@example.com',
      wallet: 'w8uhdu923kdskw83',
      telefono: '319 111 11 11',
      linkReferido: 'En espera', // Estado del enlace de referidos: En espera
      foto: 'profile9.jpg' // Ruta de la foto del usuario
    },
    {
      nombre: 'Jorge',
      apellido: 'Díaz',
      correo: 'jorge@example.com',
      wallet: 'w98kjshdf832kjshf',
      telefono: '317 000 00 00',
      linkReferido: 'Inactivo', // Estado del enlace de referidos: Inactivo
      foto: 'profile10.jpg' // Ruta de la foto del usuario
    },

  ];

  faSearch = faSearch;
  faThLarge = faThLarge;
  faStream = faStream;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faEye = faEye;

  constructor() { }

  ngOnInit(): void {
    this.filterUserData('');
  }

  handleSearchChange(event: any): void {
    this.searchTerm = event.target.value;
    this.filterUserData(this.searchTerm);
  }

  filterUserData(searchTerm: string): void {
    this.filteredUserData = this.userData.filter((user) => {
      const searchValue = searchTerm.toLowerCase();
      return Object.values(user).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(searchValue)
      );
    });
  }
  

  toggleView(): void {
    this.showCards = !this.showCards;
  }

  getUserCardColor(linkReferido: string): string {
    switch (linkReferido) {
      case 'Inactivo':
        return 'inactive';
      case 'Activo':
        return 'active';
      case 'En espera':
        return 'pending';
      default:
        return '';
    }
  }
}
