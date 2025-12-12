import categoryRecipesData from './categoryRecipes.json';

export interface CategoryRecipe {
  id: number;
  rank: number;
  title: string;
  image: string;
}

export interface CategoryRecipes {
  salgados: CategoryRecipe[];
  massas: CategoryRecipe[];
  doces: CategoryRecipe[];
  bolos: CategoryRecipe[];
  bebidas: CategoryRecipe[];
  saudavel: CategoryRecipe[];
}

export const CATEGORY_RECIPES: CategoryRecipes = categoryRecipesData as CategoryRecipes;
