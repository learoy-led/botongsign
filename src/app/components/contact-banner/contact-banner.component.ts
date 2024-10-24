import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contact-banner',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.css'
})
export class ContactBannerComponent implements OnInit {
  public isHidden: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.router.url === '/contacto' ? (this.isHidden = true) : (this.isHidden = false);
    });
  }
}
