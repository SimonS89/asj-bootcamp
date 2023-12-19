import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioSimpsonComponent } from './tasks/formulario-simpson/formulario-simpson.component';
import { TodoListComponent } from './tasks/todo-list/todo-list.component';
import { ListRickMortyComponent } from './tasks/rick-morty/list-rick-morty/list-rick-morty.component';
import { DetailRickMortyComponent } from './tasks/rick-morty/detail-rick-morty/detail-rick-morty.component';

//URL = https://localhost:4200/
const routes: Routes = [
  {
    path: 'form-simpson',
    component: FormularioSimpsonComponent,
  },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'rick-morty', component: ListRickMortyComponent },
  { path: 'rick-morty/:characterId', component: DetailRickMortyComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
