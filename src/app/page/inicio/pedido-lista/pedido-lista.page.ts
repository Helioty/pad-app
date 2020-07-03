import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/shared/order.service';

@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.page.html',
  styleUrls: ['./pedido-lista.page.scss'],
})
export class PedidoListaPage implements OnInit {

  public pedidos = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    const orders = await this.orderService.getOrderList();
    console.log(orders)
  }

  ionViewDidEnter() {
  }

  ionViewWillLeave() {
  }

  ionViewDidLeave() {
  }

}
