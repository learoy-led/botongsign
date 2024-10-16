import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { numbers } from '../../data/data';
import { NumberData } from '../../models/data.models';
import { HowHomeIconsComponent } from '../home/components/how-home-icons/how-home-icons.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [BannerComponent, CommonModule, HowHomeIconsComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  numbers: NumberData[] = numbers
}
