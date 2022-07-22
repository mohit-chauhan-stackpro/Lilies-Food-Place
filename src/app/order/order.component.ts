import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../shared/order-item.module';
import { OrderItemService } from './order-item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: OrderItem[] = [];

  constructor(private orderItemService: OrderItemService) {}

  ngOnInit(): void {
    this.orders = this.orderItemService.orders;
  }
}
