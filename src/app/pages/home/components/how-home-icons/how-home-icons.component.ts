import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { solutions } from '../../../../data/data';
import { IconElement } from '../../../../models/models';

@Component({
  selector: 'app-how-home-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-home-icons.component.html',
  styleUrl: './how-home-icons.component.css'
})
export class HowHomeIconsComponent {
  @Input() section: string = '';
  

howElements: IconElement[] = [
    {icon: "fa-solid fa-check-double",
name: "Visbilidad",
description: "Potenciamos la notoriedad de tu negocio a través de una sólidad identidad visual.",
},
{  icon: "fa-solid fa-star",
  name: "Excelencia",
  description: "Comprometidos con los clientes más exigentes, elevamos la calidad en cada detalle.",
  },
  {    icon: "fa-solid fa-chart-line",
    name: "Resultados",
    description: "Garantizamos logros tangibles en la mejora de las ventas y la experiencia del cliente.",
    }
  ]
  
  iconElements: IconElement[] = []

  public getIconElements(): IconElement[] { 
    return this.section === 'how'? this.iconElements = this.howElements : this.iconElements = solutions 
  }



}
