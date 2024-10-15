import { Component } from '@angular/core';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HowHomeIconsComponent } from './components/how-home-icons/how-home-icons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent, HowHomeIconsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 
}
