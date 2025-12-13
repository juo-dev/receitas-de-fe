import type { FC } from 'react';
import type { RankedRecipe } from '../types';

interface RecipeCard3Props extends RankedRecipe {}

const RecipeCard3: FC<RecipeCard3Props> = ({ rank, image, title }) => {
  return (
    <div className="flex items-start gap-2 py-2">
      {/* Image with Rank Badge */}
      <div className="flex-shrink-0 relative w-32">
        {/* Rank Badge - Positioned over image */}
        <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
          <strong className="text-white text-sm">{rank}</strong>
        </div>
        
        {/* Image Container with aspect ratio */}
        <div 
          className="relative w-full aspect-square rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={`Imagem da receita: ${title}`}
        />
      </div>

      {/* Title */}
      <div className="flex-1 pt-2">
        <strong className="text-dark text-base leading-tight line-clamp-3">
          {title}
        </strong>
      </div>
    </div>
  );
};

export default RecipeCard3;
