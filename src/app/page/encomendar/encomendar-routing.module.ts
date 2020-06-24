import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncomendarPage } from './encomendar.page';

const routes: Routes = [
  {
    path: '',
    component: EncomendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncomendarPageRoutingModule {}
