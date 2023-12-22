import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Simon';
  apellido = 'SuElDo';
  total = 344.55;
  fecha = new Date();
  array = [1, 10, 25, 63, 62, 45, 85, 12, 52, 98, 45, 7, 31];
}
