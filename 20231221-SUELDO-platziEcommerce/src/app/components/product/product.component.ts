import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  mostratCategoria: string = 'Todos';
  id: any;
  titulo: any;
  price: any;
  minPriceValue!: number;
  maxPriceValue!: number;
  cateogories!: Category[];

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
      this.titulo = data.get('titulo');
      this.price = Number(data.get('price'));
      this.id = Number(data.get('id'));
      this.minPriceValue = Number(data.get('rangePrice')?.split('-')[0]) || 1;
      this.maxPriceValue =
        Number(data.get('rangePrice')?.split('-')[1]) || 9999999999;

      if (this.id) {
        this.categoryService.findAllByCategoryId(this.id)?.subscribe((res) => {
          this.products = res;
          // this.mostratCategoria = this.products[0].category.name;
          this.categoryService.getAll()?.subscribe((dat) => {
            this.cateogories = dat;
            this.mostratCategoria =
              this.cateogories.find((cat) => cat.id == this.id)?.name ||
              'Todos';
          });
        });
      } else if (this.titulo) {
        this.productService.filterByTitle(this.titulo)?.subscribe((res) => {
          this.products = res;
        });
      } else if (this.price) {
        this.productService.filterByPrice(this.price)?.subscribe((res) => {
          this.products = res;
        });
      } else if (this.minPriceValue || this.maxPriceValue) {
        this.productService
          .filterByPriceRange(this.minPriceValue, this.maxPriceValue)
          ?.subscribe((res) => {
            this.products = res;
          });
      } else {
        this.productService.getAll()?.subscribe((res) => {
          this.products = res;
          this.mostratCategoria = 'Todos';
        });
      }
    });
  }

  redirigido(id: number) {
    this.router.navigate(['/productos/detalle', id]);
  }

  handleImageError(event: any) {
    event.target.src =
      'https://img.freepik.com/vector-premium/foto-vacia-sombra-pegada-cinta-adhesiva-ilustracion_87543-3824.jpg';
  }
}
