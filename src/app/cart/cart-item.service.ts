import { Injectable } from '@angular/core';
import { CartItem } from '../shared/cart-item.module';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  // cartItems: CartItem[] = [];
  cartItems: CartItem[] = [
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      imgPath: '../../../assets/image/dash-food-item-image.png',
      price: 1000,
      quantity: 3,
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      imgPath: '../../../assets/image/dash-food-item-image.png',
      price: 1000,
      quantity: 3,
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      imgPath: '../../../assets/image/dash-food-item-image.png',
      price: 1000,
      quantity: 3,
    },
  ];

  addToCart(cartItem: CartItem) {
    this.cartItems.push(cartItem);
  }
  getCartSize() {
    return this.cartItems.length;
  }
  removeFromCart(id: number) {
    delete this.cartItems[id];
  }

  constructor() {}
}
