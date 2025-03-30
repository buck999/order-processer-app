import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'orders' },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.routes').then(m => m.ORDERS_ROUTES)
  }
];
