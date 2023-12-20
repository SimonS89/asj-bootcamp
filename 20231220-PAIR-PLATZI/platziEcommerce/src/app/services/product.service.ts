import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL_API: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> | undefined {
    return this.http.get(this.URL_API);
  }

  public findById(id: number): Observable<any> | undefined {
    return this.http.get(`${this.URL_API}/${id}`);
  }
}
