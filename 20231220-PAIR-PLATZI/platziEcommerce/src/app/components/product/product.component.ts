import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.productService.getAll()?.subscribe((res) => {
      this.products = res;
    });
  }

  redirigido(id: number) {
    this.router.navigate(['/productos/detalle', id]);
  }
}
