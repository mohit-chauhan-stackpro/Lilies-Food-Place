import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/cart-item.module';
import { CartItemService } from './cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartSize: number;

  constructor(private cartItemService: CartItemService) {}

  ngOnInit(): void {
    this.cartItems = this.cartItemService.cartItems;
    this.cartSize = this.cartItemService.getCartSize();
  }
}
