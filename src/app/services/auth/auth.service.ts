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

  login(user: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*"

    //   })
    // }
    return new Promise((resolve, reject) =>  {
      this.http.post(`${apiHost}/login`, user).subscribe({

        next: (res: any) => {
        console.log(res.statusCode);
          resolve(res);
        }, error: (error: any) => {
          console.log('>>>>', error);

          reject(error);
        }
    })
    } )

  }
}
