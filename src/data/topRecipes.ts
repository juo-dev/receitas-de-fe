import topRecipesData from './topRecipes.json';

export interface TopRecipe {
  id: string;
  rank: number;
  title: string;
  image: string;
}

export const TOP_RECIPES: TopRecipe[] = topRecipesData;
