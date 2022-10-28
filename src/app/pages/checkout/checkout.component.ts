import { ProductsService } from './../products/services/products.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { Details, Order } from '../products/interfaces/order.interface';
import { DataService } from './../../shared/services/data.service';
import { Store } from './../products/interfaces/store.interface';
import { Product } from '../products/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { delay, switchMap, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: 'Clerison',
    store: 'PumaHS',
    shippingAddress: '',
    city: ''
  };

  isDelivery = true;
  cart: Product[] = [];
  stores: Store[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productsService: ProductsService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
    this.prepareDetails();
  }

  onPickupOrderDelivery(value:boolean): void {
    this.isDelivery = value;
  }

  onSubmit({ value: formData }: NgForm): void {
    console.log('Caixa', formData);
    const data: Order = {
      ... formData,
      date: this.getCurrentDay(),
      pickup: this.isDelivery
    }
    this.dataService.saveOrder(data)
    .pipe(
      tap(res => console.log('Order --> 1', res)),
      switchMap(({  id: orderId }) => {
        const details = this.prepareDetails();
        return this.dataService.saveDetailsOrder({ details, orderId });
      }),
      tap(() => this.router.navigate(['/checkout/thank-you-page'])),
      delay(2000),
      tap(() => this.shoppingCartService.resetCart()))
    .subscribe();
  }

  private getStores(): void{  
    this.dataService
    .getStores()
    .pipe(
      tap((stores:Store[]) => this.stores = stores)
    )
    .subscribe();
  }

  private getCurrentDay(): string {
    return new Date().toLocaleDateString();
  }

  private prepareDetails(): Details[]{
    const details: Details[] = [];
    this.cart.forEach((product: Product) => {
      const { id:productId, name: productName, qty: quantity, stock } = product;
      const updateStock = (stock - quantity);


      details.push( {productId, productName, quantity })
      
    })
    return details;

  }

  private getDataCart(): void {
    this.shoppingCartService.cartAction$
    .pipe(
      tap((products: Product[]) => this.cart = products)
    )
    .subscribe();
  }

}
