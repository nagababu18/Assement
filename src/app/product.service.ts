import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError,retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedCategory: BehaviorSubject<any> = new BehaviorSubject<any>('');
  private baseUrl = 'https://www.nichea.co.za/nichea/products/1/10/ASC/name/';
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getProducts(category): Observable<any> {
    return this.http.get(this.baseUrl+category)
    .pipe(retry(1), catchError(this.handleError));
  }

  getCategories(): Observable<any> {
    return this.http.get('https://www.nichea.co.za/nichea/categories/all')
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }
}
