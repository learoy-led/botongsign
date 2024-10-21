import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  burguerIsOpen:boolean = false

  public openBurguer() {
       this.burguerIsOpen = !this.burguerIsOpen
  }
}

