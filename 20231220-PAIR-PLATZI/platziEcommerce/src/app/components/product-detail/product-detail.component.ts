import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  producto!: Product;
  cart!: Cart;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
      else this.cart = { products: [], totalProducts: 0 };
      producto.quantity = 1;
      this.cart.products.push(producto);
      this.cart.totalProducts = this.cart.products.length;
      this.productService.setStorage('cart', this.cart);
    }
  }

  handleImageError(event: any) {
    event.target.src =
      'https://img.freepik.com/vector-premium/foto-vacia-sombra-pegada-cinta-adhesiva-ilustracion_87543-3824.jpg';
  }
}
