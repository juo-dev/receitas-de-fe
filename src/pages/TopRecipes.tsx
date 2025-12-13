import type { FC } from 'react';
import { getLatestRecipes } from '../data/recipes';

const TopRecipes: FC = () => {
  const topRecipes = getLatestRecipes();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-primary">
        <h1 className="text-2xl font-bold text-dark text-center">Em Alta 🔥</h1>
      </header>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {topRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-dark text-sm mb-1">
                  {recipe.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <span>⏱️ {recipe.prepTime} min</span>
                  <span>👥 {recipe.servings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRecipes;
