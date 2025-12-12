import type { FC } from 'react';
import { COMMON_CLASSES } from '../types';

interface HeaderButtonProps {
  icon: string;
  label: string;
  alt: string;
  onClick?: () => void;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({ 
  icon, 
  label, 
  alt, 
  onClick,
  iconPosition = 'left',
  className = ""
}) => {
  return (
    <button 
      className={`${COMMON_CLASSES.HEADER_BUTTON} ${className}`}
      onClick={onClick}
      aria-label={`${label} - ${alt}`}
    >
      {iconPosition === 'left' && (
        <img src={icon} alt={alt} className="w-5 h-5" />
      )}
      {label}
      {iconPosition === 'right' && (
        <img src={icon} alt={alt} className="w-5 h-5" />
      )}
    </button>
  );
};

export default HeaderButton;