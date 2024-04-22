// navbar-admin.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  selectedIcon: number | null = 1;

  handleIconClick(iconNumber: number): void {
    this.selectedIcon = iconNumber;
  }
}
