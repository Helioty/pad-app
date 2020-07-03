import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoListaPageRoutingModule } from './pedido-lista-routing.module';

import { PedidoListaPage } from './pedido-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoListaPageRoutingModule
  ],
  declarations: [PedidoListaPage]
})
export class PedidoListaPageModule {}
