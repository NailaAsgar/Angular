import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!: Dish[];

  selectedDish!: Dish;


  constructor(private dishService: DishService) { }
  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe((dishes) => this.dishes = dishes);  //.then was for promise, when usinf observable, we use .subscribe
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;  
  }

}

 