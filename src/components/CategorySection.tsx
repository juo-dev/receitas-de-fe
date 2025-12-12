import type { FC } from 'react';
import RecipeCard4 from './RecipeCard4';
import type { RankedRecipe } from '../types';

interface CategorySectionProps {
  title: string;
  recipes: RankedRecipe[];
  className?: string;
}

const CategorySection: FC<CategorySectionProps> = ({ title, recipes, className = "" }) => {
  return (
    <div className={`bg-transparent pl-2 ${className}`}>
      <h3 className="text-2xl text-primary text-center font-bold mb-4">
        {title}
      </h3>
      {recipes.map((recipe) => (
        <RecipeCard4
          key={recipe.id}
          rank={recipe.rank}
          image={recipe.image}
          title={recipe.title}
        />
      ))}
    </div>
  );
};

export default CategorySection;