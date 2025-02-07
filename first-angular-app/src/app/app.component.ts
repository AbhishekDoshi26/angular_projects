import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, HeaderComponent]
})

export class AppComponent {
  title = 'Abhishek!';
}
