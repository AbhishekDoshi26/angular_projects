import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  url: string = "https://raw.githubusercontent.com/AbhishekDoshi26/abhishek_doshi_portfolio/refs/heads/main/assets/images/logo_dark.png"
}
