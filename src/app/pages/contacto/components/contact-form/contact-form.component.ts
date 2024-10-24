import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { SendEmailService } from '../../../../services/send-email.service';
import { FormData } from '../../../../models/data.models';
import { CommonModule } from '@angular/common';
import { emailValidator } from './validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  public submittedMessage: string = '';
  public messageSubscription: Subscription;
  public formData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private SendEmailService: SendEmailService) {
    this.messageSubscription = this.SendEmailService.submittedMessage$.subscribe(message => {
      if (message) {
        this.submittedMessage = message;
      }
    });
  }

  public emailValidator = emailValidator;

  public onSubmit() {
    this.SendEmailService.sendEmail(this.formData);
  }
}
