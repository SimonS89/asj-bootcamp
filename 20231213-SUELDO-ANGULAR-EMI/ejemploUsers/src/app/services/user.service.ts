import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL_API = 'https://reqres.in/api/users';
  datosUsuario: any = {
    id: -1,
    name: '',
    job: '',
  };

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  public createUser(usuario: any): Observable<any> {
    return this.http.post(this.URL_API, usuario);
  }

  public deleteById(id: any): Observable<any> {
    return this.http.delete(this.URL_API + '/' + id);
  }

  public update(usuario: any) {
    return this.http.put(this.URL_API + '/' + usuario.id, usuario);
  }
}
