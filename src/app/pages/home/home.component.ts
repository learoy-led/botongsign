import { Component } from '@angular/core';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HowHomeIconsComponent } from './components/how-home-icons/how-home-icons.component';
import { CommonModule } from '@angular/common';
import { numbers } from '../../data/data';
import { NumberData } from '../../models/models';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent, HowHomeIconsComponent, CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  numbers: NumberData[] = numbers

}