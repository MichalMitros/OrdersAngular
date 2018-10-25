import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order';
import { ORDERS } from './mock-orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of(ORDERS);
  }
}
