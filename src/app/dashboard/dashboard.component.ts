import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../shared/food-item.model';
import { FoodItemService } from './dash-food-item/food-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    foodItems:FoodItem[]=[];


  constructor(private foodItemService:FoodItemService) { }

  ngOnInit(): void {
    this.foodItems=this.foodItemService.foodItems
  }

}
