import { Component, Input, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/shared/food-item.model';

@Component({
  selector: 'app-dash-food-item',
  templateUrl: './dash-food-item.component.html',
  styleUrls: ['./dash-food-item.component.css']
})
export class DashFoodItemComponent implements OnInit {

  @Input() foodItem:FoodItem;

  constructor() { }

  ngOnInit(): void {
  }

}
