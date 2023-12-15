import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioSimpsonComponent } from './tasks/formulario-simpson/formulario-simpson.component';
import { TodoListComponent } from './tasks/todo-list/todo-list.component';

//URL = https://localhost:4200/
const routes: Routes = [
  {
    path: 'form-simpson',
    component: FormularioSimpsonComponent,
  },
  { path: 'todo-list', component: TodoListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
