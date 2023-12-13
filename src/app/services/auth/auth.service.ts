import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiHost } from 'src/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,

  ) { }

  login(body: any) {
    const corsOption = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }

    this.http.post(`${apiHost}/login`, body).subscribe((res) => {
      console.log('api response >>', res);
    })

    // return new Promise((resolve, reject) => {
    //   this.http.post(`${apiHost}`, body, corsOption).subscribe({
    //     next: (res: any) => {
    //       resolve(res);
    //     }, error: (error: any) => {
    //       reject(error);
    //     }
    //   })
    // })
  }
}
