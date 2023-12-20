import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL_API: string = 'https://api.escuelajs.co/api/v1/products';
  totalProducts: any = localStorage.getItem('totalProducts');

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> | undefined {
    return this.http.get(this.URL_API);
  }

  public findById(id: number): Observable<any> | undefined {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  public countCartProducts() {
    this.totalProducts = localStorage.getItem('totalProducts');
    return this.totalProducts;
  }
}

// navbar -> atributo numero ngModel
//
