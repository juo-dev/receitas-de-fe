import type { FC } from 'react';
import Icon from './Icon';

interface RecipeCard1Props {
  image: string;
  category: 'salgados' | 'massas' | 'doces' | 'bolos' | 'bebidas' | 'saudavel';
  categoryName: string;
  title: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  onClick?: () => void;
}

const RecipeCard1: FC<RecipeCard1Props> = ({ 
  image, 
  category, 
  categoryName, 
  title, 
  isFavorite = false,
  onFavoriteClick,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      style={{
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: '#F7F7F7',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
        <img 
          src={image} 
          alt={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '1rem'
          }}
        />
        
        {/* Favorite Button */}
        <img 
          src="/src/assets-icons/curtir.svg"
          alt="Curtir"
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
          style={{ 
            position: 'absolute',
            top: '0.25rem',
            right: '0.02rem',
            height: '50px',
            cursor: 'pointer'
          }}
        />

        {/* Category Badge - metade dentro, metade fora */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, 50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            backgroundColor: 'white',
            padding: '0.35rem 0.75rem',
            borderRadius: '9999px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 10
          }}
        >
          <Icon name={category} selected={false} size={16} />
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            color: '#2F394A' 
          }}>
            {categoryName}
          </span>
        </div>
      </div>

      {/* Title */}
      <div style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          color: '#2F394A',
          margin: 0,
          textAlign: 'center'
        }}>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default RecipeCard1;
