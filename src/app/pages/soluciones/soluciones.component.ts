import { Component } from '@angular/core';
import { IconsComponent } from '../../shared/icons/icons.component';
import { ImageParagraphComponent } from '../../shared/image-paragraph/image-paragraph.component';
import { Solution } from '../../models/data.models';
import { solutions } from '../../data/data';

@Component({
  selector: 'app-soluciones',
  standalone: true,
  imports: [IconsComponent, ImageParagraphComponent],
  templateUrl: './soluciones.component.html',
  styleUrl: './soluciones.component.css'
})
export class SolucionesComponent {
  public solutions: Solution[] = solutions;
}
