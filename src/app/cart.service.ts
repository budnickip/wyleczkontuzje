import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  summary = 0;
  addToCart(product) {
    this.items.push(product);
    this.summary = this.summary + product.price;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  countItemPrice() {
    return this.items;
  }
  getPrice(){
    return this.summary;
  }
  constructor() { }
}
