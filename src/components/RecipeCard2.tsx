import type { FC } from 'react';
import Icon from './Icon';

interface RecipeCard2Props {
  image: string;
  category: 'salgados' | 'massas' | 'doces' | 'bolos' | 'bebidas' | 'saudavel';
  categoryName: string;
  title: string;
  description: string;
  onFavoriteClick?: () => void;
  onClick?: () => void;
}

const RecipeCard2: FC<RecipeCard2Props> = ({ 
  image, 
  category, 
  categoryName, 
  title,
  description,
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
        <img 
          src="/src/assets-icons/curtir.svg"
          alt="Curtir"
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
          className="absolute top-1 right-0 h-[50px] cursor-pointer"
        />

        {/* Category Badge - aligned to left */}
        <div className="absolute bottom-0 left-4 translate-y-1/2 flex items-center gap-1 bg-white px-3 py-[0.35rem] rounded-full shadow-sm z-10">
          <Icon name={category} selected={false} size={16} />
          <span className="text-xs font-semibold text-dark">
            {categoryName}
          </span>
        </div>
      </div>

      {/* Title and Description - aligned to left */}
      <div className="pt-6 pb-2 px-2">
        <h3 className="text-base font-bold text-dark m-0 mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard2;
