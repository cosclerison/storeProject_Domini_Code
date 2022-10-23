import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CheckoutRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
  ]
})
export class CheckoutModule { }
