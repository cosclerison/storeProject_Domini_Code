import { Product } from './../interfaces/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // recebe os dados do componente pai
  @Input() product!: Product; 
  // envia um evento para o componente pai (evento addToCartClick)
  @Output() addToCartClick = new EventEmitter<Product>(); 

  constructor() { }

  ngOnInit(): void {
  }
  // Evento do click enviando os dados para um componente superior
  onClick(): void {
    this.addToCartClick.emit(this.product)
  }

}
