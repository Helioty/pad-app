import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Pedido } from 'src/app/class/pedido';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderListRef: AngularFireList<any>;
  orderRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createOrder(item: Pedido) {
    return this.orderListRef.push({
      numero: item.numero,
      status: item.status,
      diaPedidoAberto: item.diaPedidoAberto
    })
  }

  // Get Single
  getOrder(id: string) {
    this.orderRef = this.db.object('/pedido/' + id);
    return this.orderRef;
  }

  // Get List
  getOrderList() {
    this.orderListRef = this.db.list('/pedido');
    return this.orderListRef;
  }

  // Update
  updateOrder(id, item: Pedido) {
    return this.orderRef.update({
      name: item.numero,
      email: item.status,
      mobile: item.diaPedidoAberto
    })
  }

  // Delete
  deleteOrder(id: string) {
    this.orderRef = this.db.object('/pedido/' + id);
    this.orderRef.remove();
  }

}
