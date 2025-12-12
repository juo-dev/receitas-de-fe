import type { FC } from 'react';
import type { RankedRecipe } from '../types';

interface RecipeCard4Props extends RankedRecipe {}

const RecipeCard4: FC<RecipeCard4Props> = ({ rank, image, title }) => {
  return (
    <div className="flex items-start gap-2 py-1">
      {/* Image with Rank Badge */}
      <div className="flex-shrink-0 relative">
        {/* Rank Badge - Positioned over image */}
        <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
          <strong className="text-white text-xs">{rank}</strong>
        </div>
        
        {/* Image - Half size of RecipeCard3 */}
        <div 
          className="w-14 h-14 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={`Imagem da receita: ${title}`}
        />
      </div>

      {/* Title */}
      <div className="flex-1 pt-1">
        <strong className="text-dark text-sm leading-tight line-clamp-2">
          {title}
        </strong>
      </div>
    </div>
  );
};

export default RecipeCard4;
