import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryItem from '../components/CategoryItem';
import { CATEGORIES } from '../data/recipes';
import { LATEST_RECIPES } from '../data/latestRecipes';
import { TOP_RECIPES } from '../data/topRecipes';
import { CATEGORY_RECIPES } from '../data/categoryRecipes';
import RecipeCard1 from '../components/RecipeCard1';
import RecipeCard2 from '../components/RecipeCard2';
import RecipeCard3 from '../components/RecipeCard3';
import RecipeCard4 from '../components/RecipeCard4';
import Pagination from '../components/Pagination';

const Home: FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalPages = 200; // Total de páginas (como no site original)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const handleHomeClick = () => {
    navigate('/');
    setSelectedCategory(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Header Mobile/Tablet */}
      <header className="lg:hidden px-4 py-2 bg-primary w-full flex justify-between items-center">
        {/* Logo à esquerda */}
        <img 
          src="/src/assets/logo1.png" 
          alt="Receitas de Fé" 
          className="h-12 cursor-pointer" 
          onClick={handleHomeClick}
        />
        
        {/* Menu Hamburger à direita */}
        <button 
          className="flex flex-col gap-1 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-dark"></div>
          <div className="w-6 h-0.5 bg-dark"></div>
          <div className="w-6 h-0.5 bg-dark"></div>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-dark">
          <div className="px-4 py-2 space-y-3">
            {/* Search Bar Mobile */}
            <div className="relative">
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
            
            {/* Menu Items */}
            <button className="flex items-center gap-2 w-full text-left bg-transparent border-none cursor-pointer text-dark text-sm font-semibold py-2">
              <img src="/src/assets-icons/trofy.svg" alt="Mais curtidas" className="w-5 h-5" />
              Mais curtidas
            </button>
            
            <button className="flex items-center gap-2 w-full text-left bg-transparent border-none cursor-pointer text-dark text-sm font-semibold py-2">
              <img src="/src/assets-icons/favorite_alt.svg" alt="Curtidas" className="w-5 h-5" />
              Curtidas
            </button>
            
            <button className="flex items-center gap-2 w-full text-left bg-transparent border-none cursor-pointer text-dark text-sm font-semibold py-2">
              <img src="/src/assets-icons/user.svg" alt="Usuário" className="w-5 h-5" />
              Minha conta
            </button>
          </div>
        </div>
      )}

      {/* Header Desktop */}
      <header className="hidden lg:flex px-8 py-2 bg-primary w-full items-center justify-center gap-8">
        {/* Logo */}
        <img 
          src="/src/assets/logo1.png" 
          alt="Receitas de Fé" 
          className="h-20 cursor-pointer" 
          onClick={handleHomeClick}
        />

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
        {/* Main Container - All content inside max-width */}
        <div className="max-w-[1310px] mx-auto">
          {/* Categories */}
          <div className="bg-gray-100 p-4">
            <div className="flex flex-row gap-4 overflow-x-auto pb-2 scrollbar-hide lg:justify-center">
              {/* Botão Início - apenas desktop */}
              <div className="hidden lg:block">
                <CategoryItem
                  id="inicio"
                  name="Início"
                  icon="home"
                  selected={selectedCategory === null}
                  onClick={handleHomeClick}
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
          <div className="my-4 px-4">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-dark m-0">
                Doces e Sobremesas
              </h2>
              <button className="bg-transparent border-none text-dark text-sm font-semibold cursor-pointer hover:text-primary transition-colors">
                mais...
              </button>
            </div>

            {/* Cards Grid - Responsive with horizontal scroll */}
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <div className="grid grid-cols-[repeat(5,1fr)] min-[1100px]:grid-cols-5 min-[880px]:max-[1099px]:grid-cols-[repeat(5,calc(25%-12px))] min-[670px]:max-[879px]:grid-cols-[repeat(5,calc(33.333%-10.667px))] max-[669px]:grid-cols-[repeat(5,calc(50%-8px))] gap-4 min-w-full">
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
          </div>

          {/* Main Content - 3/4 and 1/4 Layout */}
          <div className="px-4 flex gap-4">
            {/* Left Section - 3/4 - Últimas receitas */}
            <div className="flex-[3] max-[487px]:pr-4">
              {/* Section Header */}
              <div className="mb-3">
                <h2 className="text-2xl font-bold text-dark m-0">
                  Últimas receitas
                </h2>
              </div>

              {/* Grid responsive: 2 cols < 488px, 3 cols >= 488px */}
              <div className="grid grid-cols-2 min-[488px]:grid-cols-3 gap-4">
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

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>

            {/* Right Section - 1/4 - Melhores receitas */}
            <div className="hidden min-[720px]:block flex-1 bg-gray-100 rounded-lg h-fit w-48 min-[1100px]:w-80 mr-4">
              <h3 className="text-lg min-[1100px]:text-2xl font-bold text-dark mb-1 px-3 pt-3">Mais Curtidas</h3>
              <div className="flex flex-col px-3 pb-3">
                {TOP_RECIPES.map((recipe) => (
                  <RecipeCard3
                    key={recipe.id}
                    rank={recipe.rank}
                    image={recipe.image}
                    title={recipe.title}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Category Recipes Section - 6 columns - Full Width */}
          <div className="mt-8 px-4">
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="grid grid-cols-[repeat(6,1fr)] min-[1100px]:grid-cols-6 min-[880px]:max-[1099px]:grid-cols-[repeat(6,calc(25%-12px))] min-[670px]:max-[879px]:grid-cols-[repeat(6,calc(33.333%-10.667px))] max-[669px]:grid-cols-[repeat(6,calc(50%-8px))] gap-4 min-w-full">
              {/* Salgados */}
              <div className="bg-transparent pl-2">
                <h3 className="text-2xl text-primary text-center font-bold mb-4">Salgados</h3>
                {CATEGORY_RECIPES.salgados.map((recipe) => (
                  <RecipeCard4
                    key={recipe.id}
                    rank={recipe.rank}
                    image={recipe.image}
                    title={recipe.title}
                  />
                ))}
              </div>

              {/* Massas */}
              <div className="bg-transparent pl-2">
                <h3 className="text-2xl text-primary text-center font-bold mb-4">Massas</h3>
                {CATEGORY_RECIPES.massas.map((recipe) => (
                  <RecipeCard4
                    key={recipe.id}
                    rank={recipe.rank}
                    image={recipe.image}
                    title={recipe.title}
                  />
                ))}
              </div>

              {/* Doces */}
              <div className="bg-transparent pl-2">
                <h3 className="text-2xl text-primary text-center font-bold mb-4">Doces</h3>
                {CATEGORY_RECIPES.doces.map((recipe) => (
                  <RecipeCard4
                    key={recipe.id}
                    rank={recipe.rank}
                    image={recipe.image}
                    title={recipe.title}
                  />
                ))}
              </div>

              {/* Bolos */}
              <div className="bg-transparent pl-2">
                <h3 className="text-2xl text-primary text-center font-bold mb-4">Bolos</h3>
                {CATEGORY_RECIPES.bolos.map((recipe) => (
                  <RecipeCard4
                    key={recipe.id}
                    rank={recipe.rank}
                    image={recipe.image}
                    title={recipe.title}
                  />
                ))}
              </div>

              {/* Bebidas */}
              <div className="bg-transparent pl-2">
                <h3 className="text-2xl text-primary text-center font-bold mb-4">Bebidas</h3>
                {CATEGORY_RECIPES.bebidas.map((recipe) => (
                  <RecipeCard4
                    key={recipe.id}
                    rank={recipe.rank}
                    image={recipe.image}
                    title={recipe.title}
                  />
                ))}
              </div>

              {/* Saudáveis */}
              <div className="bg-transparent pl-2">
                <h3 className="text-2xl text-primary text-center font-bold mb-4">Saudáveis</h3>
                {CATEGORY_RECIPES.saudavel.map((recipe) => (
                  <RecipeCard4
                    key={recipe.id}
                    rank={recipe.rank}
                    image={recipe.image}
                    title={recipe.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary w-full mt-8">
        <div className="max-w-[1310px] mx-auto px-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-16">
            {/* Mission Message */}
            <div className="text-dark text-center md:text-left">
              <p className="text-sm">
                Esse projeto é para ajudar na obra de Jesus e salvar vidas
              </p>
            </div>

            {/* Instagram */}
            <div className="text-dark text-center md:text-right">
              <a 
                href="https://instagram.com/receitasdefe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline"
              >
                @receitasdefe
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-dark"></div>

          {/* Bottom Section - Biblical Text */}
          <div className="py-6 text-center">
            <p className="text-dark text-sm font-bold italic">
              "Provai e vede que o Senhor é bom" - Salmos 34:8
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
