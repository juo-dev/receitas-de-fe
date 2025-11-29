import type { FC } from 'react';
import Icon from './Icon';

interface CategoryItemProps {
  id: string;
  name: string;
  icon: 'salgados' | 'massas' | 'doces' | 'bolos' | 'bebidas' | 'saudavel';
  selected: boolean;
  onClick: () => void;
}

const CategoryItem: FC<CategoryItemProps> = ({ name, icon, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      data-selected={selected}
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
          backgroundColor: 'white',
          border: selected ? '2px solid #FFCC00' : 'none',
        }}
        className="category-icon-wrapper"
      >
        <Icon name={icon} selected={selected} size={32} />
      </div>
      
      <span 
        data-selected={selected}
        style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          textAlign: 'center',
          color: selected ? '#2F394A' : '#9CA3AF',
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
