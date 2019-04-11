import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core'

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description', 'http://placekitten.com/200/300'), new Recipe('Another test recipe', 'Test description', 'http://placekitten.com/200/200'), new Recipe('A test recipe', 'Test description', 'http://placekitten.com/200/300'), new Recipe('Last test recipe', 'Test description', 'http://placekitten.com/200/400')
  ]

  getRecipes() {
    return this.recipes.slice()
  }
}
