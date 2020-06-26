import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoEdicaoPageRoutingModule } from './pedido-edicao-routing.module';

import { PedidoEdicaoPage } from './pedido-edicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoEdicaoPageRoutingModule
  ],
  declarations: [PedidoEdicaoPage]
})
export class PedidoEdicaoPageModule {}
