import { Injectable } from '@angular/core';
import { OrderItem } from '../shared/order-item.module';

@Injectable({
  providedIn: 'root',
})
export class OrderItemService {
  orders: OrderItem[] = [
    {
      name: 'Stir Fry Pasta',
      imgPath: '../../../assets/image/dash-food-item-image.png',
      quantity: 4,
      price: 1000,
      status: 'deliverd',
    },
    {
      name: 'Stir Fry Pasta',
      imgPath: '../../../assets/image/dash-food-item-image.png',
      quantity: 4,
      price: 1000,
      status: 'deliverd',
    },
    {
      name: 'Stir Fry Pasta',
      imgPath: '../../../assets/image/dash-food-item-image.png',
      quantity: 4,
      price: 1000,
      status: 'deliverd',
    },
    {
      name: 'Stir Fry Pasta',
      imgPath: '../../../assets/image/dash-food-item-image.png',
      quantity: 4,
      price: 1000,
      status: 'deliverd',
    },
  ];

  constructor() {}

  getOrderSize() {
    return this.orders.length;
  }
}
