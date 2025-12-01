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
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        minWidth: '80px',
        transition: 'all 0.2s',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
      }}
      className="category-item"
      aria-label={`Filtrar por ${name}`}
    >
      <div 
        data-selected={selected}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: selected ? '#FFCC00' : 'white',
          border: 'none',
        }}
        className="category-icon-wrapper"
      >
        <Icon name={icon} selected={selected || isHovered} size={32} />
      </div>
      
      <span 
        data-selected={selected}
        style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          textAlign: 'center',
          color: selected ? '#FFCC00' : '#9CA3AF',
          transition: 'color 0.2s',
        }}
        className="category-label"
      >
        {name}
      </span>
    </button>
  );
};

export default CategoryItem;
