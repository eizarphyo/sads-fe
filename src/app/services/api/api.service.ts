import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiHost } from 'src/utils/utils';
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

  createPreorder(body: any) {
    this.http.post(`${apiHost}/preorder`, body);
  }
}
