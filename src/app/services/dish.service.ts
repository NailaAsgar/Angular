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

}
//we have to take this service and inject it into our application.

