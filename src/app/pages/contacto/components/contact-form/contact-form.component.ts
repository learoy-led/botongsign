import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      message: string = ''

      constructor(private http: HttpClient) {}
    
      public onSubmit() {      
        const formData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        };

        console.log(formData)

        
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          })
        };
    
        this.http.post('https://botongsign-api.vercel.app//send-email', formData, httpOptions)
          .subscribe(response => {
            console.log('Email enviado con éxito, mensaje de app', response);
          }, error => {
            console.error('Error al enviar el email', error);
          });
      }
      }