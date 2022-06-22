import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model'; //for recipe[] to get the model we need to import it from recipe.model.ts

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : recipe[]=[
    new recipe(' a test recipe','just a description','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=600,545')
  ]; //the recipe[] suggest the property recipes to only add an array of values like we declared in class recipe not any other value like numbers or letters

  constructor() { }

  ngOnInit(): void {
  }

}
