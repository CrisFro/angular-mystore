import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  items = this.cartService.getItems(); //armazenar os produtos no carrinho
  checkoutForm = this.formBuilder.group({ //reunir o nome e o endereço do usuário
    name: '',
    address: ''
  });
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }
  
  onSubmit(): void { //Este método permite que os usuários enviem seu nome e endereço.   
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
   
  


