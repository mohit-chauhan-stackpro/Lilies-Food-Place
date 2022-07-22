import { Component, Input, OnInit } from '@angular/core';
import { CartItemService } from 'src/app/cart/cart-item.service';
import { FoodItem } from 'src/app/shared/food-item.model';

@Component({
  selector: 'app-dash-food-item',
  templateUrl: './dash-food-item.component.html',
  styleUrls: ['./dash-food-item.component.css'],
})
export class DashFoodItemComponent implements OnInit {
  @Input() foodItem: FoodItem;
  @Input() id;

  constructor(private cartItemService: CartItemService) {}

  ngOnInit(): void {}
  // addToCart() {}
}
