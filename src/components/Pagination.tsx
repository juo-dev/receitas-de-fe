import type { FC } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first 5 pages
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
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
    if (totalPages > 6) {
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
    } else if (totalPages === 6) {
      // If exactly 6 pages, show the 6th page
      pages.push(
        <button
          key={6}
          onClick={() => onPageChange(6)}
          className={`px-4 py-2 rounded transition-colors text-sm font-bold ${
            currentPage === 6
              ? 'bg-primary text-white'
              : 'bg-white text-dark hover:text-primary'
          }`}
        >
          6
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 my-6">
      {/* Previous Button - only show from page 2 onwards */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 rounded transition-colors text-dark hover:text-primary"
        >
          Anterior
        </button>
      )}

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded transition-colors font-semibold ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-dark hover:text-primary'
        }`}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
