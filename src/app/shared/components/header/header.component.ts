import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
// Template in line - add HTML diretamente na linha do template
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <a [routerLink]="['/']">
          <span>My Store</span>
        </a>
        <span class="spacer"></span>
        <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) {}

  goToCheckout(){
    this.router.navigate(['/checkout']);
  }

}
