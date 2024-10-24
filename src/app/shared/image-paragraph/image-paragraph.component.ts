import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Sector, Solution } from '../../models/data.models';

@Component({
  selector: 'app-image-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-paragraph.component.html',
  styleUrl: './image-paragraph.component.css'
})
export class ImageParagraphComponent {
  @Input() paragraphElements: Solution[] | Sector[] = [];
}
