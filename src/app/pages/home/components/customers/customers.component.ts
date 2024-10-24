import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Customer } from '../../../../models/data.models';
import { customers } from '../../../../data/data';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  public customers: Customer[] = customers;
}
