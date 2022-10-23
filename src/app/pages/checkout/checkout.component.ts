import { Component, OnInit } from '@angular/core';

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

  stores = [
    {
      "id": 1,
      "name": "Park Row at Beekman St",
      "address": "38 Park Row",
      "city": "New York",
      "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
    },
    {
      "id": 2,
      "name": "Store Alcalá",
      "address": "Calle de Alcalá, 21",
      "city": "Madrid",
      "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onPickupOrderDelivery(value:boolean): void {
    console.log(value)
  }

  onOrderDelivery(value:boolean): void {
    console.log(value)
  }

}
