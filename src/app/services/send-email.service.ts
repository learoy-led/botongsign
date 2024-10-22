import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormData } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  public API_URL: string = 'https://botongsign-api.vercel.app/api/send-email'

  constructor(private http: HttpClient) { }

public sendEmail(formData: FormData) {
  console.log('se ejecurta el servicio con estos datos', formData)
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  console.log(this.API_URL)
  return this.http.post(this.API_URL, formData, httpOptions)
.subscribe(response => {
  console.log('Email enviado con éxito, mensaje de app', response);
}, error => {
  console.error('Error al enviar el email', error);
});
 }
}





