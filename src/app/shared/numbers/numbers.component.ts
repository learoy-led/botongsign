import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberData } from '../../models/data.models';
import { numbers } from '../../data/data';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  numbers: NumberData[] = numbers
}
