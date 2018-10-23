import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  { path: 'all-orders',  component: OrdersComponent },
  { path: '',  component: OrdersComponent },
  { path: 'add-new-order',  component: OrderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
