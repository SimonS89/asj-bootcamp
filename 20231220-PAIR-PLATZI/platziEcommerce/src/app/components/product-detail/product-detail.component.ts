import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  producto!: Product;
  cart!: Product[];

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((data) => {
    //   const id = data['id'];
    //   this.productService.findById(id)?.subscribe((prod) => {
    //     if (prod) this.producto = { ...prod };
    //     console.log(this.producto);
    //   });
    // });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.findById(id)?.subscribe((prod) => {
      if (prod) this.producto = { ...prod };
    });
  }

  comprar(producto: Product) {
    let confirmar = confirm(`¿Desea comprar el producto ${producto.title}?`);
    if (confirmar) {
      let cartString = localStorage.getItem('cart');
      if (cartString) this.cart = JSON.parse(cartString);
      else this.cart = [];
      this.cart.push(producto);
      localStorage.setItem(
        'totalCost',
        JSON.stringify(this.calcularTotal(this.cart))
      );
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.productService.countCartProducts(this.cart.length);
    }
  }

  calcularTotal(cart: any) {
    return cart.map((p: any) => p.price).reduce((a: any, b: any) => a + b);
  }
}
