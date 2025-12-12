import type { FC } from 'react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ 
  placeholder = "Pesquise uma receita",
  className = "",
  onSearch 
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        name="search"
        type="text"
        placeholder={placeholder}
        className="w-full py-2 pr-10 pl-4 rounded-full border border-dark text-sm outline-none"
        aria-label={placeholder}
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
        aria-label="Buscar receitas"
      >
        <img 
          src="/src/assets-icons/search.svg" 
          alt="Buscar"
          className="w-full h-full"
        />
      </button>
    </form>
  );
};

export default SearchBar;