import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { contactDetails, solutions, sectors } from '../../data/data'
import { ContactDetails, Solution, Sector } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
public contact: ContactDetails = contactDetails
public solutions: Solution[] = solutions 
public sectors: Sector[] = sectors 
}
