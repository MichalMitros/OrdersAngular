import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ORDERS } from '../mock-orders';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  purchaserForm: FormGroup;
  products: {
    product: Product,
    amount: number
  }[];
  PRODUCTS_LIST: Product[];
  selectedProduct: number;
  amount: number;

  constructor(public formBuilder: FormBuilder, private productService: ProductService) {
    this.purchaserForm = this.formBuilder.group( {
      company: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]]
    });
  }

  ngOnInit() {
    this.products = [];
    this.amount = 1;
    this.getProductsList();
  }

  onProductAdd() {
    let product: Product;
    let isNewProduct : boolean = true;
    for(let i=0; i<this.PRODUCTS_LIST.length; i++) {
      if(this.PRODUCTS_LIST[i].id == this.selectedProduct) {
        product = this.PRODUCTS_LIST[i];
        break;
      }
    }

    for(let i=0; i<this.products.length; i++) {
      if(this.products[i].product.id == product.id) {
        isNewProduct = false;
        this.products[i].amount += this.amount;
        break;
      }
    }
    if(isNewProduct) {
      this.products.push({ product: product, amount: this.amount });
    }
  }

  onFormSubmit() {
    ORDERS.push({ id: ORDERS.length+1, purchaser: this.purchaserForm.value.company, email: this.purchaserForm.value.email, products: this.products });
  }

  getProductsList(): void {
    this.productService.getProducts()
      .subscribe(productsList => this.PRODUCTS_LIST = productsList);
  }

}
