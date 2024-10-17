import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { identitySigns } from '../../data/data';
import { IdentitySigns } from '../../models/data.models';
import { CardComponent } from '../../shared/cards/card.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { NumbersComponent } from '../../shared/numbers/numbers.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [BannerComponent, CommonModule, CardComponent, IconsComponent, NumbersComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  identitySigns: IdentitySigns[] = identitySigns
}
