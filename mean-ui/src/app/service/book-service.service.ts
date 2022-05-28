import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  // Here i am using node js api

  REST_API: string = "http://localhost:8000/bookapi";

  // Here i am setting header because by using this cors communicate with database.

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }

  // Here Adding Book Details

  addBook(data: Book): Observable<any> {
    let API_URL = `${this.REST_API}/add`;
    return this.http.post(API_URL, data).pipe(catchError(this.handleError));
  }

  // Here i am getting Book Details

  getBooks() {
    return this.http.get(`${this.REST_API}/find`);
  }

  // Here i am getting specific book Details through Id

  getBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/find/${id}`;
    return this.http.get(API_URL, { headers: this.httpHeaders }).pipe(map((result: any) => {
      return result || {}
    }),
      catchError(this.handleError)
    )
  }

  // Here i am Updating specific book Detail through Id

  updateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.httpHeaders }).pipe(catchError(this.handleError))
  }

  // Here i am Deleting specific book Detail through Id

  deleteBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/remove/${id}`;
    return this.http.delete(API_URL, { headers: this.httpHeaders }).pipe(catchError(this.handleError));
  }

  // Here I am Handling Error Request

  handleError(error: HttpErrorResponse) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      //Handling Client Side Error

      errorMessage = error.error.message;
    } else {

      //Handling Server Side Error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

