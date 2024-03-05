import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  titleValue?: string;
  priceValue?: string;
  minPriceValue?: number;
  maxPriceValue?: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  filterByTitle() {
    this.router.navigate(['/productos/filtro/titulo', this.titleValue]);
  }

  filterByPrice() {
    this.router.navigate(['/productos/filtro/precio', this.priceValue]);
  }

  filterByPriceRange() {
    this.router.navigate([
      '/productos/filtro/rango_precio',
      `${this.minPriceValue}-${this.maxPriceValue}`,
    ]);
  }

  limpiar() {
    this.titleValue = undefined;
    this.priceValue = undefined;
    this.minPriceValue = undefined;
    this.maxPriceValue = undefined;
    this.router.navigate(['/productos']);
  }
}
