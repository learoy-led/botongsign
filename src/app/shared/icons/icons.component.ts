import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HowElement, Sector, Solution } from '../../models/data.models';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  @Input() iconElements: HowElement[] | Solution[] | Sector[] = [];
  @Input() isHidden: boolean = true;
}
