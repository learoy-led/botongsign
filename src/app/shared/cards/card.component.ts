import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IdentitySigns, Solution } from '../../models/data.models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() cardElements:Solution[] | IdentitySigns[] = []
}
