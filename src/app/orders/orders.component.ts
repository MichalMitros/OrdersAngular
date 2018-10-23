import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { ORDERS } from '../mock-orders';
import { ProductsComponent } from '../products/products.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = ORDERS;

  constructor() { }

  ngOnInit() {
  }

}
