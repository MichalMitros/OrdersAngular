import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  purchaserForm: FormGroup;
  productsForm: FormGroup;
  products: {
    product: Product,
    amount: number
  }[];
  PRODUCTS_LIST = PRODUCTS;
  selectedProduct: number;

  constructor(public formBuilder: FormBuilder,) {
    this.purchaserForm = this.formBuilder.group( {
      company: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]]
    });
    this.productsForm = this.formBuilder.group( {
      product: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.products = [];
  }

  onProductAdd() {
    let product: Product;
    if(this.selectedProduct != null) {
      for(let i=0; i<this.PRODUCTS_LIST.length; i++) {
        if(this.PRODUCTS_LIST[i].id == this.selectedProduct) {
          product = this.PRODUCTS_LIST[i];
          break;
        }
      }
      this.products.push({ product: product, amount: 1 });
      console.log(this.products);
    }
  }

  onFormSubmit() {
    console.log(this.purchaserForm.value);
  }

}
