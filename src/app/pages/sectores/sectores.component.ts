import { Component } from '@angular/core';
import { IconsComponent } from '../../shared/icons/icons.component';
import { ImageParagraphComponent } from '../../shared/image-paragraph/image-paragraph.component';
import { Sector } from '../../models/data.models';
import { sectors } from '../../data/data';

@Component({
  selector: 'app-sectores',
  standalone: true,
  imports: [IconsComponent, ImageParagraphComponent],
  templateUrl: './sectores.component.html',
  styleUrl: './sectores.component.css'
})
export class SectoresComponent {
  sectors: Sector[] = sectors
}
