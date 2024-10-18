import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
 name: string = ''
  email: string = ''
    phone: string = ''
      question: string = ''
    
      public onSumbit() {
       
      }
  };

