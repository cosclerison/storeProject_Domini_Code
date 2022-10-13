import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
