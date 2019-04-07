import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description', 'http://placekitten.com/200/300'), new Recipe('A test recipe', 'Test description', 'http://placekitten.com/200/300'), new Recipe('A test recipe', 'Test description', 'http://placekitten.com/200/300'), new Recipe('A test recipe', 'Test description', 'http://placekitten.com/200/300')
  ]


  constructor() { }

  ngOnInit() {
  }

}
