import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  purchaserForm: FormGroup;
  productsForm: FormGroup;

  constructor(public formBuilder: FormBuilder,) {
    this.purchaserForm = this.formBuilder.group( {
      company: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]]
    });
    this.productsForm = this.formBuilder.group( {
      product: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log(this.purchaserForm.value);
  }

}
