import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { ProyectComponent } from './main/proyect/proyect.component';
import { TodoListComponent } from './tasks/todo-list/todo-list.component';
import { FormularioSimpsonComponent } from './tasks/formulario-simpson/formulario-simpson.component';
import { ListRickMortyComponent } from './tasks/rick-morty/list-rick-morty/list-rick-morty.component';
import { DetailRickMortyComponent } from './tasks/rick-morty/detail-rick-morty/detail-rick-morty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    ProyectComponent,
    TodoListComponent,
    FormularioSimpsonComponent,
    ListRickMortyComponent,
    DetailRickMortyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
