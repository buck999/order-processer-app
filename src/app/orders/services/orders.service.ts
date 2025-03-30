import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

import { Order } from './../model/order';
import { OrderPage } from '../model/order-page';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly API = '/api/v1/orders';

  constructor(private httpClient: HttpClient) { }

  list(page = 0, pageSize = 10) {
    return this.httpClient.get<OrderPage>(this.API, { params: { page, pageSize } })
      .pipe(
        first(),
        // tap((data) => console.log(data)),
        delay(2000), //test spinner
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Order>(`${this.API}/${id}`);
  }

  save(record: Partial<Order>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Order>) {
    return this.httpClient.post<Order>(this.API, record).pipe(first());
  }

  private update(record: Partial<Order>) {
    return this.httpClient.put<Order>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
