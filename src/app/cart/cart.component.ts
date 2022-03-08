import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  items = this.cartService.getItems(); //armazenar os produtos no carrinho
  
  constructor(private cartService: CartService) { }
  

  

}
