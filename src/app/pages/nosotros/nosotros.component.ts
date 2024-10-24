import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { howElements, identitySigns } from '../../data/data';
import { HowElement, IdentitySigns } from '../../models/data.models';
import { CardComponent } from '../../shared/cards/card.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { NumbersComponent } from '../../shared/numbers/numbers.component';
import { HonorsComponent } from './components/honors/honors.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    BannerComponent,
    CommonModule,
    CardComponent,
    IconsComponent,
    NumbersComponent,
    HonorsComponent
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  public identitySigns: IdentitySigns[] = identitySigns;
  public howElements: HowElement[] = howElements;
}
