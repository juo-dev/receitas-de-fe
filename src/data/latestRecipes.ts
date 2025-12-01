import latestRecipesData from './latestRecipes.json';

export interface LatestRecipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'salgados' | 'massas' | 'doces' | 'bolos' | 'bebidas' | 'saudavel';
  categoryName: string;
}

export const LATEST_RECIPES: LatestRecipe[] = latestRecipesData as LatestRecipe[];

export const getLatestRecipes = (limit?: number): LatestRecipe[] => {
  if (limit) {
    return LATEST_RECIPES.slice(0, limit);
  }
  return LATEST_RECIPES;
};
