import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL_API: string = 'https://api.escuelajs.co/api/v1/products';
  private totalProductsSubject = new Subject<number>();
  totalProducts$ = this.totalProductsSubject.asObservable();
  totalProducts: any = Number(localStorage.getItem('totalProducts')) || 0;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> | undefined {
    return this.http.get(this.URL_API);
  }

  public findById(id: number): Observable<any> | undefined {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  public filterByTitle(title: string): Observable<any> | undefined {
    return this.http.get(`${this.URL_API}/?title=${title}`);
  }

  public filterByPrice(price: number): Observable<any> | undefined {
    return this.http.get(`${this.URL_API}/?price=${price}`);
  }

  public filterByPriceRange(
    minPrice: number = 1,
    maxPrice: number
  ): Observable<any> | undefined {
    return this.http.get(
      `${this.URL_API}/?price_min=${minPrice}&price_max=${maxPrice}`
    );
  }

  public countCartProducts(cantidad: number) {
    this.totalProducts = cantidad;
    localStorage.setItem('totalProducts', JSON.stringify(cantidad));
  }

  public setStorage(key: string, cart: Cart) {
    this.countCartProducts(cart.totalProducts);
    localStorage.setItem(key, JSON.stringify(cart));
  }

  calcularTotal(cart: any) {
    return cart.map((p: any) => p.price).reduce((a: any, b: any) => a + b);
  }

  public clearLocalStorage() {
    localStorage.clear();
    this.countCartProducts(0);
  }
}
