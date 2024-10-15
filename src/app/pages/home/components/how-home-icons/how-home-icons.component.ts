import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-home-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-home-icons.component.html',
  styleUrl: './how-home-icons.component.css'
})
export class HowHomeIconsComponent {
  @Input() section: string = '';



  iconElements = [
    {section: "how",
      icon: "fa-solid fa-check-double",
title: "Visbilidad",
description: "Potenciamos la notoriedad de tu negocio a través de una sólidad identidad visual.",
},
{section: "how",
  icon: "fa-solid fa-star",
  title: "Excelencia",
  description: "Comprometidos con los clientes más exigentes, elevamos la calidad en cada detalle.",
  },
  {section: "how",
    icon: "fa-solid fa-chart-line",
    title: "Resultados",
    description: "Garantizamos logros tangibles en la mejora de las ventas y la experiencia del cliente.",
    },
    {section: "solutions",
      icon: "fa-solid fa-chart-line",
      title: "Diseño corporativo",
      description: "xxx.",
      },
      {section: "solutions",
        icon: "fa-solid fa-chart-line",
        title: "Digital Signage",
        description: "xxx.",
        },
        {section: "solutions",
          icon: "fa-solid fa-chart-line",
          title: "Diseño mobiliario",
          description: "xxx.",
          },
        {section: "solutions",
          icon: "fa-solid fa-chart-line",
          title: "Rotulación",
          description: "xxx.",
          },
        {section: "solutions",
          icon: "fa-solid fa-chart-line",
          title: "Iluminación",
          description: "xxx.",
          },
          {section: "solutions",
            icon: "fa-solid fa-chart-line",
            title: "Aluminio",
            description: "xxx.",
            },
  ]

  getFilteredElements() {
    return this.iconElements.filter(element => element.section === this.section);  
  }
}
