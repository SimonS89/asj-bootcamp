import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  showSidebar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showSidebar =
        !this.router.url.includes('detalle/') &&
        !this.router.url.includes('/cart');
    });
  }
}
