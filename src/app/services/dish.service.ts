import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // getDishes() : Dish[] {
  //   return DISHES;
  // }    //This is a new method which will return array of dishes. It will return dishes constant which we have imported

  // getDish(id:string): Dish{
  //   return DISHES.filter((dish) =>(dish.id === id))[0];  //Extract specific dish from the array and return the dish. Will return a boolean
  // }

  // getFeaturedDish(): Dish {
  //   return DISHES.filter((dish) => dish.featured)[0];  //featured is aleady boolean. from all the dishes which is true, that one will be filtered out. 
  // }

  // getDishes() : Promise<Dish[]> {
  //   return new Promise(resolve => {
  //     //simulate server latency with 2 second delay fordelay
  //     setTimeout(() =>resolve(DISHES), 2000)
  //   });  //return the promise
  // }

  getDishes(): Observable<Dish[]> {  //getdishes method is updated to make use of observables rather than using direct values and then conver that into a promise and then send out the promise to my components.
    return of (DISHES).pipe(delay(2000)); 
}

  getFeaturedDish(): Observable<Dish> {
    return of (DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));  
  }

  getDish(id:string): Observable<Dish>{
    return  of (DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string [] | any>{
    return of(DISHES.map(dish => dish.id));
  }
}
//we have to take this service and inject it into our application.
//this dish service is configured to return promises
//services will be returning observables into our components instead of promise. Promises have been removed
//whatever promise can do, an observable can also do the same.
//map is a javascript array operator
