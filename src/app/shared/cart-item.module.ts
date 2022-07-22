import { FoodItem } from './food-item.model';

export class CartItem {
  constructor(public foodItem: FoodItem, public quantity: number) {}
}
