import { DataService } from './../../shared/services/data.service';
import { Store } from './../products/interfaces/store.interface';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

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

  stores: Store[] = []

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrderDelivery(value:boolean): void {
    console.log(value)
  }

  onOrderDelivery(value:boolean): void {
    console.log(value)
  }

  onSubmit() {
    console.log('Caixa')
  }

  getStores(): void{
    this.dataService
    .getStores()
    .pipe(
      tap((stores:Store[]) => this.stores = stores)
    )
    .subscribe();
  }

}
