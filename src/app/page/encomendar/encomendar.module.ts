import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncomendarPageRoutingModule } from './encomendar-routing.module';

import { EncomendarPage } from './encomendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncomendarPageRoutingModule
  ],
  declarations: [EncomendarPage]
})
export class EncomendarPageModule {}
