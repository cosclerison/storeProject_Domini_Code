import { Product } from './../../pages/products/interfaces/product.interface';
import { DetailOrder } from './../../pages/products/interfaces/detailsOrder.interface';
import { Subject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable(
  { providedIn: 'root' }
)

export class ShoppingCartService {
  products: Product[] = [];
  // products: DetailOrder[] = [];

  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();
  // private totalSubject = new Subject<DetailOrder[]>();
  // private quantitySubject = new Subject<DetailOrder[]>();

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }
  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }
  get cartAction$(): Observable<Product[]> {
      return this.cartSubject.asObservable();
  }

  updateCart(product: Product): void {
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }


  private addToCart(product: Product): void {
    this.products.push(product);
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

  private calcTotal(): void {
    const total = this.products.reduce((acc, prod) => acc += prod.price, 0);
    this.totalSubject.next(total);
  }


}