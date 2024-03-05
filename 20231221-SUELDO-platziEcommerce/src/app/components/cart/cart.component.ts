// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(private router: Router, private productService: ProductService) {}
  ngOnInit(): void {
    const cartString = localStorage.getItem('cart');
    if (cartString) this.cart = JSON.parse(cartString);
  }

  increaseQuantity(product: Product) {
    const cartItem = this.cart.products.find((p) => p.id === product.id);
    if (cartItem) {
      cartItem.quantity = (cartItem.quantity || 0) + 1;
      this.saveCart();
    }
  }

  // Función para disminuir la cantidad de un producto en el carrito
  decreaseQuantity(product: Product) {
    const cartItem = this.cart.products.find((p) => p.id === product.id);
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity--;
      this.saveCart();
    }
  }

  calculateTotal(): number {
    return this.cart.products.reduce(
      (acc, product) => acc + (product.price || 0) * (product.quantity || 0),
      0
    );
  }
  purchase() {
    let confirmar = confirm('¿Desea realizar la compra?');
    if (confirmar) {
      alert('Compra realizada con éxito.');
      this.saveCart();
      this.productService.clearLocalStorage();
      this.router.navigate(['']);
    }
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
