import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HowElement, Sector, Solution } from '../../models/data.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  @Input() iconElements: HowElement[] | Solution[] | Sector[] = [];
  @Input() isHidden: boolean = true;
  @Input() iconLink: string = '';
}

