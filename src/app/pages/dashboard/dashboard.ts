import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  menuStates: { [key: string]: boolean } = {
    packages: false,
    gym: false,
    residents: false,
  };

  toggleMenu(menuName: string) {
    this.menuStates[menuName] = !this.menuStates[menuName];
  }
}
