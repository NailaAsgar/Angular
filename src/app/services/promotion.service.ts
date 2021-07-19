import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions() : Promotion[] {
    return PROMOTIONS;
  }    //This is a new method which will return array of dishes. It will return dishes constant which we have imported

  getPromotion(id:string): Promotion{
    return PROMOTIONS.filter((promo) =>(promo.id === id))[0];  //Extract specific dish from the array and return the dish. Will return a boolean
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promo) => promo.featured)[0];  //featured is aleady boolean. from all the dishes which is true, that one will be filtered out. 
  }
}
