import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
// Template in line - add HTML diretamente na linha do template
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>My Store</span>
        <span class="spacer"></span>
        <app-cart></app-cart>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor( ) {}

 }
