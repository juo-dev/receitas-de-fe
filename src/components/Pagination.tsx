import type { FC } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = (screenSize: 'desktop' | 'mobile' | 'small') => {
    const pages = [];
    let maxPages = 5; // desktop default
    if (screenSize === 'mobile') maxPages = 3; // 501px-350px
    if (screenSize === 'small') maxPages = 2;  // <350px
    
    // Show first pages (3 for mobile, 5 for desktop)
    for (let i = 1; i <= Math.min(maxPages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-4 py-2 rounded transition-colors text-sm font-bold ${
            currentPage === i
              ? 'bg-primary text-white'
              : 'bg-white text-dark hover:text-primary'
          }`}
        >
          {i}
        </button>
      );
    }
    
    // Add ellipsis if there are more pages
    let threshold = 6; // desktop default
    if (screenSize === 'mobile') threshold = 4; // 501px-350px
    if (screenSize === 'small') threshold = 3;  // <350px
    if (totalPages > threshold) {
      pages.push(
        <span key="ellipsis" className="px-4 py-2 text-gray-400">
          ...
        </span>
      );
      
      // Add last page
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-4 py-2 rounded transition-colors text-sm font-bold ${
            currentPage === totalPages
              ? 'bg-primary text-white'
              : 'bg-white text-dark hover:text-primary'
          }`}
        >
          {totalPages}
        </button>
      );
    } else if (totalPages === threshold) {
      // If exactly at threshold, show the last page
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-4 py-2 rounded transition-colors text-sm font-bold ${
            currentPage === totalPages
              ? 'bg-primary text-white'
              : 'bg-white text-dark hover:text-primary'
          }`}
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 my-6">
      {/* Previous Button - only show from page 2 onwards */}
      {currentPage > 1 && (
        <>
          {/* Desktop Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="max-[500px]:hidden px-4 py-2 rounded transition-colors text-dark hover:text-primary"
          >
            Anterior
          </button>
          
          {/* Mobile Previous Button (for both mobile and small screens) */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="max-[500px]:flex min-[501px]:hidden w-10 h-10 rounded-full transition-colors text-lg font-bold bg-white text-dark hover:text-primary items-center justify-center"
          >
            &lt;
          </button>
        </>
      )}

      {/* Page Numbers - Responsive */}
      <div className="max-[500px]:hidden">
        {renderPageNumbers('desktop')}
      </div>
      <div className="min-[501px]:hidden max-[350px]:hidden">
        {renderPageNumbers('mobile')}
      </div>
      <div className="min-[351px]:hidden">
        {renderPageNumbers('small')}
      </div>

      {/* Next Button */}
      <>
        {/* Desktop Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`max-[500px]:hidden px-4 py-2 rounded transition-colors font-semibold ${
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-dark hover:text-primary'
          }`}
        >
          Próxima
        </button>
        
        {/* Mobile Next Button (for both mobile and small screens) */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`max-[500px]:flex min-[501px]:hidden w-10 h-10 rounded-full transition-colors text-lg font-bold items-center justify-center ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-300 cursor-not-allowed'
              : 'bg-white text-dark hover:text-primary'
          }`}
        >
          &gt;
        </button>
      </>
    </div>
  );
};

export default Pagination;
