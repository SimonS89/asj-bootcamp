import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickMortyServiceService {
  constructor(private http: HttpClient) {
    console.log('servicio rick morty');
  }

  public getData() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
  }

  public getCharacterDetail(characterId: number) {
    return this.http.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
  }
}
