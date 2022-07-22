import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../cart/cart-item.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  cartSize: number;
  constructor(private cartItemService: CartItemService) {}

  ngOnInit(): void {
    this.cartSize = this.cartItemService.getCartSize();
  }
}
