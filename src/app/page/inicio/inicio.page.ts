import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Pedido } from 'src/app/class/pedido';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navigate: NavController) { }

  ngOnInit() {
  }

  verPedido(pedido: Pedido) {
    const navExtras: NavigationExtras = {
      queryParams: {
        dados: JSON.stringify(pedido)
      }
    };
    this.navigate.navigateForward(['/pedido-detalhes'], navExtras);
  }

}
