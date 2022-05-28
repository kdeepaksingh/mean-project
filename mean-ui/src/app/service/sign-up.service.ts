import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  // Here i am using node js api

  BASE_URL: string = 'http://localhost:8000/signUpApi';

  // Here i am setting header because by using this cors communicate with database.

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }

  postSignUpDetails(data: any) {
    let API_URL = `${this.BASE_URL}/add`;
    return this.http.post(API_URL, data);
  }
  getAllSignUpDetails() {
    return this.http.get(`${this.BASE_URL}/find`);
  }
}
