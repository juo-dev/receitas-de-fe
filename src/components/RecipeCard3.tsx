import type { FC } from 'react';

interface RecipeCard3Props {
  rank: number;
  image: string;
  title: string;
}

const RecipeCard3: FC<RecipeCard3Props> = ({ rank, image, title }) => {
  return (
    <div className="flex items-start gap-2 py-2">
      {/* Image with Rank Badge */}
      <div className="flex-shrink-0 relative w-24 min-[1100px]:w-32">
        {/* Rank Badge - Positioned over image */}
        <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
          <strong className="text-white text-sm">{rank}</strong>
        </div>
        
        {/* Image Container with aspect ratio */}
        <div className="relative w-full aspect-square">
          <div 
            className="absolute inset-0 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
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
