import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'productos',
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'detalle/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'categories/:id',
        component: ProductComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
