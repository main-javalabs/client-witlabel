import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent {
  selectedIcon: number | null = 1;

  handleIconClick(iconNumber: number): void {
    this.selectedIcon = iconNumber;
  }
}
