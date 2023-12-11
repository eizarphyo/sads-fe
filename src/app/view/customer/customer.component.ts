import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(
    private router: Router,
  ) { }

  preorderForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  createPreorder() {
    // call api and create preorder
    this.router.navigateByUrl('order-items');
    console.log(this.preorderForm.value);

  }
}
