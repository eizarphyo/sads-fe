import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiHost } from 'src/utils/utils';
import { Customer } from 'src/app/models/customer';
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

  getSalesData() {
    return this.http.get(this.salesUrl)
  }

  createCustomer(body: Customer, token: string): Promise<number> {
    const header = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return new Promise((resolve, reject) => {
      this.http.post(`${apiHost}/customer`, body, header).subscribe((res: any) => {
        console.log('customer created >> ', res);
        // return id and store in session storage
        resolve(res.data.id);
      });
    });
  }

  createPreorder(body: any) {
    this.http.post(`${apiHost}/preorder`, body);
  }
}
