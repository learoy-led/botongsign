import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { SendEmailService } from '../../../../services/send-email.service';
import { FormData } from '../../../../models/data.models';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

constructor(private SendEmailService: SendEmailService) {}

public formData: FormData = {
  name: '',
  email: '',
  phone: '',
  message:  '',
};

      public onSubmit() {      
        console.log(this.formData)
        this.SendEmailService.sendEmail(this.formData)
      }
      }