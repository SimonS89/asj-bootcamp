import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: 'productos',
    children: [
      {
        path: '',
        component: ProductComponent,
        title: 'Platzi Ecommerce',
      },
      {
        path: 'detalle/:id',
        component: ProductDetailComponent,
        title: 'Platzi Product detail',
      },
      {
        path: 'categories/:id',
        component: ProductComponent,
        title: 'Platzi Category',
      },
      {
        path: 'filtro/titulo/:titulo',
        component: ProductComponent,
        title: 'Platzi Filtro Titulo',
      },
      {
        path: 'filtro/precio/:price',
        component: ProductComponent,
        title: 'Platzi Filtro Precio',
      },
      {
        path: 'filtro/rango_precio/:rangePrice',
        component: ProductComponent,
        title: 'Platzi Filtro Rango',
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'Platzi Carrito',
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
