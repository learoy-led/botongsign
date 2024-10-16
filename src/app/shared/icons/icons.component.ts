import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconElement } from '../../models/data.models';
import { howElements } from '../../data/data';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  howElements: IconElement[] = howElements
}
