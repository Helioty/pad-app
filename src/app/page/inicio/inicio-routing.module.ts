import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioPage,
    children: [
      {
        path: 'produto-lista',
        loadChildren: () => import('./produto-lista/produto-lista.module').then(m => m.ProdutoListaPageModule)
      },
      {
        path: 'pedido-lista',
        loadChildren: () => import('./pedido-lista/pedido-lista.module').then(m => m.PedidoListaPageModule)
      },
      {
        path: '',
        redirectTo: '/inicio/pedido-lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio/pedido-lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule { }
