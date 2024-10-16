import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { identitySigns, numbers } from '../../data/data';
import { IdentitySigns, NumberData } from '../../models/data.models';
import { CardComponent } from '../../shared/cards/card.component';
import { IconsComponent } from '../../shared/icons/icons.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [BannerComponent, CommonModule, CardComponent, IconsComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  numbers: NumberData[] = numbers
  identitySigns: IdentitySigns[] = identitySigns
}
