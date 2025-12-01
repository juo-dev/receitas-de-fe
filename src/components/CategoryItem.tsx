import type { FC } from 'react';
import { useState } from 'react';
import Icon from './Icon';

interface CategoryItemProps {
  id: string;
  name: string;
  icon: 'home' | 'salgados' | 'massas' | 'doces' | 'bolos' | 'bebidas' | 'saudavel';
  selected: boolean;
  onClick: () => void;
}

const CategoryItem: FC<CategoryItemProps> = ({ name, icon, selected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      data-selected={selected}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="category-item flex flex-col items-center gap-2 min-w-[80px] transition-all duration-200 bg-transparent border-none cursor-pointer"
      aria-label={`Filtrar por ${name}`}
    >
      <div 
        data-selected={selected}
        className={`category-icon-wrapper w-16 h-16 rounded-full flex items-center justify-center border-none ${
          selected ? 'bg-primary' : 'bg-white'
        }`}
      >
        <Icon name={icon} selected={selected || isHovered} size={32} />
      </div>
      
      <span 
        data-selected={selected}
        className={`category-label text-sm font-medium text-center transition-colors duration-200 ${
          selected ? 'text-primary' : 'text-gray-400'
        }`}
      >
        {name}
      </span>
    </button>
  );
};

export default CategoryItem;
