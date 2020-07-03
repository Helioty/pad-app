import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './common/common.service';
import { AuthFireService } from './auth/auth-fire.service';
import { ProductService } from './shared/product.service';
import { OrderService } from './shared/order.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommonService,
    AuthFireService,
    ProductService,
    OrderService
  ]
})
export class ServicesModule { }
