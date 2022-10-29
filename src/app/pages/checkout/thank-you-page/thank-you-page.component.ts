import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
    <div class="container">
      <h1 class="title">Thank you! </h1>
      <p class="content">Your order is on the way!</p>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam perferendis veritatis accusantium quasi quae architecto, quo vel neque corrupti exercitationem magnam consectetur vero cupiditate, cum, at quos nihil saepe non!
      </span>
    </div>
  `,
  styles: [`
    .container {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10%;
      margin-top: 5rem;
      height: 80%;
      flex-direction: column;
    }  
    .title {
      font-size: 5rem;
      color: red;
    }
    .content {
      font-size: 1.5rem;
      padding: 1rem;
    }
  `]
})

export class ThankYouPageComponent {}
