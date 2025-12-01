import { FC } from 'react';

const Favorites: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-primary">
        <h1 className="text-2xl font-bold text-dark text-center">Favoritos ❤️</h1>
      </header>

      <div className="p-4 text-center">
        <p className="text-gray-400 mt-8">Você ainda não tem receitas favoritas</p>
      </div>
    </div>
  );
};

export default Favorites;
