import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Order } from '../model/order';
import { OrdersService } from '../services/orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrderResolver {

  constructor(private service: OrdersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      id: '',
      status: '',
      created_at: '',
      updated_at: '',
      task: '',
      result: ''
    });
  }

}
