import type { FC } from 'react';
import Icon from './Icon';
import type { CategorizedRecipe } from '../types';

interface RecipeCard1Props extends CategorizedRecipe {
  onFavoriteClick?: () => void;
  onClick?: () => void;
}

const RecipeCard1: FC<RecipeCard1Props> = ({ 
  image, 
  category, 
  categoryName, 
  title,
  onFavoriteClick,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer bg-gray-100 transition-transform duration-200 hover:scale-[1.02]"
    >
      {/* Image Container */}
      <div className="relative w-full pt-[75%]">
        <img 
          src={image} 
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
        />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
          className="absolute top-1 right-0 h-[50px] cursor-pointer bg-transparent border-none p-0"
          aria-label={`Curtir receita: ${title}`}
        >
          <img 
            src="/src/assets-icons/curtir.svg"
            alt="Curtir receita"
            className="w-full h-full"
          />
        </button>

        {/* Category Badge - metade dentro, metade fora */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-1 bg-white px-3 py-[0.35rem] rounded-full shadow-sm z-10">
          <Icon name={category} selected={false} size={16} />
          <span className="text-xs font-semibold text-dark">
            {categoryName}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="pt-6 pb-2">
        <h3 className="text-base font-bold text-dark m-0 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default RecipeCard1;
