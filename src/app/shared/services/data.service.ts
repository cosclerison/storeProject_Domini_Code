import { Store } from 'src/app/pages/products/interfaces/store.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Order } from 'src/app/pages/products/interfaces/order.interface';
import { DetailOrder } from 'src/app/pages/products/interfaces/detailsOrder.interface';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiURL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  getStores(): Observable<Store[]>{
    return this.http.get<Store[]>(`${this.apiURL}/stores`)
  }

  saveOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(`${this.apiURL}/orders`, order)
  }

  saveDetailsOrder(details: DetailOrder): Observable<DetailOrder>{
    return this.http.post<DetailOrder>(`${this.apiURL}/detailsOrders`, details)
  }

}