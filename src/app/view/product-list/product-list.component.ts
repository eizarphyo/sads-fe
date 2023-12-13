import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

export interface CartList {
  id: number,
  name: string,
  total_price: number,
  qty: number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  constructor(
    private api: ApiService,
  ) { }
  products = [
    {
      id: 1,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 2,
      name: 'Burmese Bliss',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 3,
      name: 'Golden Sunshine Tea',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 4,
      name: 'Ginger Zing Zest',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 5,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 6,
      name: 'Burmese Bliss',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 7,
      name: 'Golden Sunshine Tea',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 8,
      name: 'Ginger Zing Zest',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 9,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 10,
      name: 'Burmese Bliss',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 11,
      name: 'Golden Sunshine Tea',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 12,
      name: 'Ginger Zing Zest',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 13,
      name: 'Pineapple Pizza',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 14,
      name: 'Burmese Bliss',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 15,
      name: 'Golden Sunshine Tea',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    },
    {
      id: 16,
      name: 'Ginger Zing Zest',
      price: 1000,
      img: '../../../assets/images/DevGeeks.png'
    }
  ];

  cartList: CartList[] = [];
  totals = {
    total_qty: 0,
    total_amt: 0
  }

  addToCart(i: number) {
    const selected: CartList = {
      id: this.products[i].id,
      name: this.products[i].name,
      qty: 0,
      total_price: 0
    }

    let cart_index = this.cartList.findIndex((item) => {
      return item.id == this.products[i].id
    });

    if (cart_index < 0) {
      selected.qty++;
      selected.total_price = this.products[i].price;
      this.cartList.push(selected);
      let last_i = this.cartList.length - 1;
      this.increseTotalPrice(last_i, this.cartList[last_i].qty);
    } else {
      this.cartList[cart_index].qty++;
      this.increseTotalPrice(cart_index, selected.id);
    }
  }

  add(cart_index: number, id: number) {
    this.cartList[cart_index].qty++;
    this.increseTotalPrice(cart_index, id);
  }

  increseTotalPrice(cart_index: number, product_id: number) {
    let product_index = this.products.findIndex((product) => {
      return product.id == product_id;
    });

    this.cartList[cart_index].total_price = this.cartList[cart_index].qty * this.products[product_index].price;
    this.calculateAllTotalPriceAndQty();
  }

  remove(cart_index: number, id: number) {
    if (this.cartList[cart_index].qty > 1) {
      this.cartList[cart_index].qty--;
      this.decreseTotalPrice(cart_index, id);
    } else {
      this.decreseTotalPrice(cart_index, id);
      this.cartList.splice(cart_index, 1);
    }

  }

  decreseTotalPrice(cart_index: number, product_id: number) {
    let product_index = this.products.findIndex((product) => {
      return product.id == product_id;
    });

    this.cartList[cart_index].total_price -= this.products[product_index].price;
    this.calculateAllTotalPriceAndQty();

  }

  calculateAllTotalPriceAndQty() {
    let total = 0;
    let qty = 0;
    this.cartList.forEach((item) => {
      total += item.total_price;
      qty += item.qty;
    });
    this.totals.total_amt = total;
    this.totals.total_qty = qty;
  }


  delete(i: number) {
    this.cartList.splice(i, 1);
    this.calculateAllTotalPriceAndQty();
  }
}
