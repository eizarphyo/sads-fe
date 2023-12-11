import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 0,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 0,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 0,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 0,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    }
  ]
}
