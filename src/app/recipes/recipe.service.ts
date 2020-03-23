

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  //  private recipes: Recipe[] = [
  //   new Recipe(
  //     'A burger',
  //     'this is a description',
  //     'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
  //     [
  //       new Ingredient('meat', 1),
  //       new Ingredient('french fries', 2)
  //     ]),
  //   new Recipe(
  //     'A waffle',
  //     'this is a another description',
  //     'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
  //     [
  //       new Ingredient('flour', 58),
  //       new Ingredient('sugar', 100)
  //     ])
  // ];

  private recipes: Recipe[] = [];

   setRecipes(recipes: Recipe[]) {
     this.recipes = recipes;
     this.recipesChanged.next(this.recipes.slice())
   }

   getRecipes() {
     return this.recipes.slice();
   }

   getRecipe(index: number) {
     return this.recipes[index];
   }

   addRecipe(recipe: Recipe) {
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe(index: number, newRecipe: Recipe) {
     this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());
   }

   deleteRecipe(index: number) {
     this.recipes.splice(index, 1);
     this.recipesChanged.next(this.recipes.slice());
   }
}
