import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import {Observable ,  of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import {Constant} from '../../app/config';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private apiUrl =  new Constant().getApiUrl();
  private getOrdersUrl = `${this.apiUrl}/orders/`;  // URL to web api
  private updateOrdersUrl = `${this.apiUrl}/orders`;  // URL to web api

  constructor(private http: HttpClient) { }
  //get all orders endpoint
  getOrders() : Observable<Order[]> {
      return this.http.get<Order[]>(this.getOrdersUrl)
      .pipe(
        catchError(this.handleError('getOrder', []))
      );
  }
  //get a particular order endpoint
  getOrder(id: number) : Observable<Order>{
    const url = `${this.getOrdersUrl}/${id}`;
    return this.http.get<Order>(url)
    .pipe(
      catchError(this.handleError<Order>(`getOrder id=${id}`))
    );
  }
  //update a particular order endpoint
  updateStock(order : Order) :Observable<Order> {
    this.updateOrdersUrl = this.getOrdersUrl;
    this.updateOrdersUrl += order.id;
    return this.http.put<Order>(this.updateOrdersUrl, order)
    .pipe(
      catchError(this.handleError('updateStock', order))
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
