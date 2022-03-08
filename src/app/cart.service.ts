import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  //adicionar itens ao carrinho - método anexa um produto a uma matriz de items
  addToCart(product: Product) {
    this.items.push(product);
  }
  //devolver itens do carrinho - método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada
  getItems() {
    return this.items;
  }
  //limpar itens do carrinho - método retorna uma matriz vazia de itens, que esvazia o carrinho.
  clearCart() {
    this.items = [];
    return this.items;
  }
}
