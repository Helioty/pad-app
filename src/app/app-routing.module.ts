import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./page/produtos/produtos.module').then(m => m.ProdutosPageModule)
  },
  {
    path: 'pedido-novo',
    loadChildren: () => import('./page/pedido-novo/pedido-novo.module').then(m => m.PedidoNovoPageModule)
  },
  {
    path: 'pedido-edicao/:id',
    loadChildren: () => import('./page/pedido-edicao/pedido-edicao.module').then(m => m.PedidoEdicaoPageModule)
  },
  {
    path: 'pedido-detalhes/:id',
    loadChildren: () => import('./page/pedido-detalhes/pedido-detalhes.module').then(m => m.PedidoDetalhesPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./page/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
