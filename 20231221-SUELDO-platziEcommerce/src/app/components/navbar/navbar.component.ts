import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categories!: Category[];
  cart!: Product[];
  totalProducts: any = 0;

  constructor(
    public categoryService: CategoryService,
    private router: Router,
    public productService: ProductService
  ) {
    this.productService.totalProducts$.subscribe((totalProducts) => {
      this.totalProducts = totalProducts;
    });
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.categoryService.getAll()?.subscribe((res) => {
      this.categories = res;
    });
  }

  redirigir(id: number) {
    this.router.navigate(['/productos/categories', id]);
  }
}
