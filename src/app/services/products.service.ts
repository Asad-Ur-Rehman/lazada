import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {Observable ,  of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import {Constant} from '../../app/config';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl =  new Constant().getApiUrl();
  private getProductsUrl = `${this.apiUrl}/products/`;  // URL to web api
  private updateProductStockUrl = `${this.apiUrl}/products`;  // URL to web api

  constructor(private http: HttpClient) { }
  //get all products endpoint
  getProducts() : Observable<Product[]> {
      return this.http.get<Product[]>(this.getProductsUrl)
      .pipe(
        catchError(this.handleError('getProducts', []))
      );
  }
  //get a particular product endpoint
  getProduct(id: number) : Observable<Product>{
    const url = `${this.getProductsUrl}/${id}`;
    return this.http.get<Product>(url)
    .pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  //update a particular product endpoint
  updateStock(product : Product) :Observable<Product> {
    this.updateProductStockUrl = this.getProductsUrl;
    this.updateProductStockUrl += product.id;
    return this.http.put<Product>(this.updateProductStockUrl, product)
    .pipe(
      catchError(this.handleError('updateStock', product))
    );
  }

  ///////////////////////////////Helper methods////////////////////////////////////

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
