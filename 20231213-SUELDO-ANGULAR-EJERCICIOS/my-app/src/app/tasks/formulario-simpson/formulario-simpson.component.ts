import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-simpson',
  templateUrl: './formulario-simpson.component.html',
  styleUrls: ['./formulario-simpson.component.css'],
})
export class FormularioSimpsonComponent {
  personajes: { nombre: string; profesion: string; urlImg: string }[] = [];

  cargarPersonaje(nombre: string, profesion: string, urlImg: string) {
    this.personajes.push({ nombre, profesion, urlImg });
  }
}
