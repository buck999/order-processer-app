import { Routes } from '@angular/router';

import { OrderFormComponent } from './containers/order-form/order-form.component';
import { OrdersComponent } from './containers/orders/orders.component';
import { OrderResolver } from './guards/order.resolver';

export const ORDERS_ROUTES: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'new', component: OrderFormComponent, resolve: { order: OrderResolver } },
  { path: 'edit/:id', component: OrderFormComponent, resolve: { order: OrderResolver } }
];
