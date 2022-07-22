import { Component, Input, OnInit } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  @Input() cartItem;
  @Input() id;

  constructor(private cartItemService: CartItemService) {}

  ngOnInit(): void {}

  removeFromCart(id: number) {
    this.cartItemService.removeFromCart(id);
  }
}
