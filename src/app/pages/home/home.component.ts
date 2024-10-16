import { Component } from '@angular/core';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { CommonModule } from '@angular/common';
import { numbers, solutions } from '../../data/data';
import { NumberData, Solution } from '../../models/data.models';
import { ButtonComponent } from '../../shared/button/button.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CardComponent } from '../../shared/cards/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent, CommonModule, ButtonComponent, CustomersComponent, BannerComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  numbers: NumberData[] = numbers
  solutions: Solution[] = solutions
}
