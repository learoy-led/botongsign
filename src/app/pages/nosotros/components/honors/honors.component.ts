import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { honors } from '../../../../data/data';
import { Honor } from '../../../../models/data.models';

@Component({
  selector: 'app-honors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './honors.component.html',
  styleUrl: './honors.component.css'
})
export class HonorsComponent {
honors: Honor[] = honors
}
