import type { FC } from 'react';
import { COMMON_CLASSES } from '../types';

interface SectionHeaderProps {
  title: string;
  showMoreButton?: boolean;
  onMoreClick?: () => void;
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ 
  title, 
  showMoreButton = false, 
  onMoreClick,
  className = ""
}) => {
  return (
    <div className={`flex justify-between items-center mb-3 ${className}`}>
      <h2 className={COMMON_CLASSES.SECTION_TITLE}>
        {title}
      </h2>
      {showMoreButton && (
        <button 
          className="bg-transparent border-none text-dark text-sm font-semibold cursor-pointer hover:text-primary transition-colors"
          onClick={onMoreClick}
          aria-label={`Ver mais ${title.toLowerCase()}`}
        >
          mais...
        </button>
      )}
    </div>
  );
};

export default SectionHeader;