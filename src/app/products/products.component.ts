import { Component, OnInit, Input } from '@angular/core';
import { Product } from  '../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: {
    product: Product,
    amount: number
  }[];
  displayedColumns: string[] = ['id', 'name', 'amount'];

  constructor() { }

  ngOnInit() {
  }

}
