import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private URL_API: string = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> | undefined {
    return this.http.get(this.URL_API);
  }

  public findAllByCategoryId(id: number): Observable<any> | undefined {
    return this.http.get(`${this.URL_API}/${id}/products`);
  }
}
