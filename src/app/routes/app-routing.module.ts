import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent }      from '../components/products/products.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { OrderDetailComponent } from '../components/order-detail/order-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // declarations: []
})
export class AppRoutingModule { }
