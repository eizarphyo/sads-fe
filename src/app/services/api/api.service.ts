import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiHost } from 'src/utils/utils';
import { Customer, CustomerRes } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { Preorder } from 'src/app/models/preorder';
import { Truck } from 'src/app/models/truck';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private salesUrl = "";
  constructor(private http: HttpClient) { }

  // getSalesData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.salesUrl);
  // }

  token = sessionStorage.getItem('token');
  header = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  }

  getSalesData() {
    return this.http.get(this.salesUrl)
  }

  createCustomer(body: Customer): Promise<number> {
    // const header = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${token}`
    //   })
    // }
    return new Promise((resolve, reject) => {
      this.http.post(`${apiHost}/customer`, body, this.header).subscribe((res: any) => {
        console.log('customer created >> ', res);
        // return id and store in session storage
        resolve(res.preorder_id);
      });
    });
  }

  getAllProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.http.post(`${apiHost}/getProduct`, null, this.header).subscribe((res: any) => {
        console.log('product list >> ', res.data);
        // return id and store in session storage
        resolve(res.product_list.data);
      });
    });
  }

  getAllPreorders(): Promise<Preorder[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${apiHost}/salePreorder`, this.header).subscribe((res: any) => {
        console.log('all preorders >>', res.preorder_data);
        resolve(res.preorder_data)
      })
    })
  }

  getAllWarehousePreorders(): Promise<Preorder[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${apiHost}/wareHousePreorder`, this.header).subscribe((res: any) => {
        console.log('warehouse preorders >>', res.preorder_data);
        resolve(res.preorder_data)
      })
    })
  }

  getAllLogisticsPreorders(): Promise<Preorder[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${apiHost}/logisticPreorder`, this.header).subscribe((res: any) => {
        console.log('logistics preorders >>', res.preorder_data);
        resolve(res.preorder_data)
      })
    })
  }

  getAllTrucks(): Promise<Truck[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${apiHost}/order/truck`, this.header).subscribe((res: any) => {
        console.log('al trucks >>', res.truck_list);
        resolve(res.truck_list)
      })
    })
  }

  assignTruck(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${apiHost}/order/truck`, this.header).subscribe((res: any) => {
        console.log('al trucks >>', res);
        resolve(res)
      })
    })
  }

  createOrderList(body: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(`${apiHost}/preorderItems`, body, this.header).subscribe((res) => {
        console.log('preorder list res >>', res);
        resolve(true);
      });
    })
  }

  changeOrderStatus(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${apiHost}/changeOrderStatus`, body, this.header).subscribe((res: any) => {
        console.log('order status changed >>', res);
        resolve(res);
      })
    })
  }

  changePermitStatus(body: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(`${apiHost}/changePermitStatus`, body, this.header).subscribe((res: any) => {
        console.log('permit status changed >>', res);
        if (res.status == 'success') {
          resolve(true);
        }
      })
    })
  }

  createPreorder(body: any) {
    this.http.post(`${apiHost}/preorder`, body);
  }
}
