import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes() : Dish[] {
    return DISHES;
  }    //This is a new method which will return array of dishes. It will return dishes constant which we have imported

  getDish(id:string): Dish{
    return DISHES.filter((dish) =>(dish.id === id))[0];  //Extract specific dish from the array and return the dish. Will return a boolean
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];  //featured is aleady boolean. from all the dishes which is true, that one will be filtered out. 
  }
}
//we have to take this service and inject it into our application.

