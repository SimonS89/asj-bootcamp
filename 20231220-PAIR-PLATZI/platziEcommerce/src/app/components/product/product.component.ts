import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  id: any;
  constructor(
    public productService: ProductService,
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = Number(data.get('id'));
      if (this.id) {
        this.categoryService.findAllByCategoryId(this.id)?.subscribe((res) => {
          this.products = res;
        });
      } else {
        this.productService.getAll()?.subscribe((res) => {
          this.products = res;
        });
      }
    });
  }

  redirigido(id: number) {
    this.router.navigate(['/productos/detalle', id]);
  }
}
