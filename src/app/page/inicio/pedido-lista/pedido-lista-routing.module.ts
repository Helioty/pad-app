import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoListaPage } from './pedido-lista.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoListaPageRoutingModule {}
