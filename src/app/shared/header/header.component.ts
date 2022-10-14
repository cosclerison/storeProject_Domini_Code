import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
// Template in line - add HTML diretamente na linha do template
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>My Store</span>
        {{ quantity$ | async | json }} - Quantity
        {{ total$ | async | json }} - Total
        {{ cart$ | async | json }} - Cart
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  quantity$ = this.shoppingCartService.quantityAction$;
  total$ = this.shoppingCartService.totalAction$;
  cart$ = this.shoppingCartService.cartAction$;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) {}

 }
