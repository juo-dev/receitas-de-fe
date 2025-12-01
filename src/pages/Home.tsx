import type { FC } from 'react';
import { useState } from 'react';
import CategoryItem from '../components/CategoryItem';
import { CATEGORIES } from '../data/recipes';
import { LATEST_RECIPES } from '../data/latestRecipes';
import RecipeCard1 from '../components/RecipeCard1';
import RecipeCard2 from '../components/RecipeCard2';

const Home: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      {/* Header Mobile */}
      <header className="lg:hidden p-4 bg-primary w-full">
        <h1 className="text-2xl font-bold text-dark text-center">
          Receitas de Fé
        </h1>
      </header>

      {/* Header Desktop */}
      <header className="hidden lg:flex px-8 py-4 bg-primary w-full items-center justify-center gap-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-dark whitespace-nowrap">
          Receitas de Fé
        </h1>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Pesquise uma receita"
            className="w-full py-2 pr-10 pl-4 rounded-full border border-dark text-sm outline-none"
          />
          <img 
            src="/src/assets-icons/search.svg" 
            alt="Buscar"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          {/* Mais Curtidas */}
          <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-dark text-sm font-semibold">
            <img src="/src/assets-icons/trofy.svg" alt="Mais curtidas" className="w-5 h-5" />
            Mais curtidas
          </button>

          {/* Curtidas */}
          <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-dark text-sm font-semibold">
            <img src="/src/assets-icons/favorite_alt.svg" alt="Curtidas" className="w-5 h-5" />
            Curtidas
          </button>

          {/* Divider */}
          <span className="text-dark text-xl">|</span>

          {/* Minha Conta */}
          <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-dark text-sm font-semibold">
            Minha conta
            <img src="/src/assets-icons/user.svg" alt="Usuário" className="w-5 h-5" />
          </button>
        </div>
      </header>
      
      <div className="min-h-screen bg-gray-100">
        {/* Categories */}
        <div className="bg-gray-100 p-4 max-w-[1310px] mx-auto">
          <div className="flex flex-row gap-4 overflow-x-auto pb-2 scrollbar-hide lg:justify-center">
            {/* Botão Início - apenas desktop */}
            <div className="hidden lg:block">
              <CategoryItem
                id="inicio"
                name="Início"
                icon="home"
                selected={selectedCategory === null}
                onClick={() => setSelectedCategory(null)}
              />
            </div>
            
            {CATEGORIES.map((category) => (
              <CategoryItem
                key={category.id}
                id={category.id}
                name={category.name}
                icon={category.icon}
                selected={selectedCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </div>

        {/* Featured Section - Doces e Sobremesas */}
        <div className="max-w-[1310px] mx-auto my-4 px-4">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-dark m-0">
              Doces e Sobremesas
            </h2>
            <button className="bg-transparent border-none text-dark text-sm font-semibold cursor-pointer underline">
              mais...
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            <RecipeCard1
              image="https://cdn.aquelareceita.com.br/recipes/image-1763993534689.png"
              category="bolos"
              categoryName="Bolos"
              title="Bolo com Geleia de Romã"
            />
            <RecipeCard1
              image="https://cdn.aquelareceita.com.br/recipes/image-1762871934466.png"
              category="bolos"
              categoryName="Bolos"
              title="Mini Bolo com Casca de Chocolate Mesclada"
            />
            <RecipeCard1
              image="https://cdn.aquelareceita.com.br/recipes/image-1764079103565.png"
              category="doces"
              categoryName="Doces"
              title="Sobremesa de Limão com Biscoitos"
            />
            <RecipeCard1
              image="https://cdn.aquelareceita.com.br/recipes/image-1763732655188.png"
              category="doces"
              categoryName="Doces"
              title="Sobremesa de Biscoito com Chocolate"
            />
            <RecipeCard1
              image="https://cdn.aquelareceita.com.br/recipes/image-1763572043120.png"
              category="doces"
              categoryName="Doces"
              title="Banana Frita Diferente"
            />
          </div>
        </div>

        {/* Main Content - 3/4 and 1/4 Layout */}
        <div className="max-w-[1310px] mx-auto px-4 flex gap-4">
          {/* Left Section - 3/4 - Últimas receitas */}
          <div className="flex-[3]">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-dark m-0">
                Últimas receitas
              </h2>
              <button className="bg-transparent border-none text-dark text-sm font-semibold cursor-pointer underline">
                mais...
              </button>
            </div>

            {/* Grid 3 columns x 4 rows */}
            <div className="grid grid-cols-3 gap-4">
              {LATEST_RECIPES.map((recipe) => (
                <RecipeCard2
                  key={recipe.id}
                  image={recipe.image}
                  category={recipe.category}
                  categoryName={recipe.categoryName}
                  title={recipe.title}
                  description={recipe.description}
                />
              ))}
            </div>
          </div>

          {/* Right Section - 1/4 - Placeholder for next section */}
          <div className="flex-1 bg-white rounded-lg p-4 h-fit">
            <h3 className="text-lg font-bold text-dark mb-2">Próxima seção</h3>
            <p className="text-sm text-gray-400">Conteúdo será adicionado aqui</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
