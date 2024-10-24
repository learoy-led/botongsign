import { Component } from '@angular/core';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { CommonModule } from '@angular/common';
import { solutions } from '../../data/data';
import { Solution } from '../../models/data.models';
import { ButtonComponent } from '../../shared/button/button.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CardComponent } from '../../shared/cards/card.component';
import { NumbersComponent } from '../../shared/numbers/numbers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeCarouselComponent,
    CommonModule,
    ButtonComponent,
    CustomersComponent,
    BannerComponent,
    CardComponent,
    NumbersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 public solutions: Solution[] = solutions;
}
