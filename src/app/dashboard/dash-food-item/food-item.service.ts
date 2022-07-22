import { Injectable } from '@angular/core';
import { FoodItem } from 'src/app/shared/food-item.model';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
  foodItems:FoodItem[]=[
    {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
  ]

  constructor() { }
}
