import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .pipe(
        tap( res => console.log(res))
      )
      .subscribe();
  }

}
