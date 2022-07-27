import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from '../cart/cart-item.service';
import { OrderItemService } from '../order/order-item.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  cartSize: number;
  orderSize: number;
  constructor(
    private cartItemService: CartItemService,
    public orderItemService: OrderItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartSize = this.cartItemService.getCartSize();
    this.orderSize = this.orderItemService.getOrderSize();
  }
  displayCart() {
    this.router.navigate(['/cart']);
  }
  displayOrders() {
    this.router.navigate(['/orders']);
  }
}
