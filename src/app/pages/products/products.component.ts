import { Product } from './interfaces/product.interface';
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
  products: Product[] = [];

  ngOnInit() {
    // carrega os produtos da API pelo service de produtos
    this.productsService
      .getProducts()
      .subscribe((products: Product[]) => this.products = products);
  }

  // Evento do click dentro da função vinda do componente filho
  addToCart(product: Product): void {
    console.log('Add to Cart');
  }

}
