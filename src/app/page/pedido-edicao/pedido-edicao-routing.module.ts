import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoEdicaoPage } from './pedido-edicao.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoEdicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoEdicaoPageRoutingModule {}
