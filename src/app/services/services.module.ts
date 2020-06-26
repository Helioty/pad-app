import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './common/common.service';
import { AuthFireService } from './auth/auth-fire.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommonService,
    AuthFireService,
  ]
})
export class ServicesModule { }
