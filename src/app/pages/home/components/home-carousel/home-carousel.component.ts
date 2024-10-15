import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {

}
