import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;
  orderItems: OrderItem[];

  constructor(private http: HttpClient) { }

  saveOrUpdateOrder() {
    var body = {
      ...this.formData,
      OrderItems: this.orderItems
    };
    return this.http.post(environment.ordersapiURL + '/Order', body);
  }

  getOrderList() {
    return this.http.get(environment.ordersapiURL + '/Order').toPromise();
  }

  getOrderByID(id:number):any {
    return this.http.get(environment.ordersapiURL + '/Order/'+id).toPromise();
  }

  deleteOrder(id:number) {
    return this.http.delete(environment.ordersapiURL + '/Order/'+id).toPromise();
  }

}
