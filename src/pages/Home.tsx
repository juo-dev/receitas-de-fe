import type { FC } from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryItem from '../components/CategoryItem';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import CategorySection from '../components/CategorySection';
import RecipeCard1 from '../components/RecipeCard1';
import RecipeCard2 from '../components/RecipeCard2';
import RecipeCard3 from '../components/RecipeCard3';
import Pagination from '../components/Pagination';
import { CATEGORIES } from '../data/recipes';
import { LATEST_RECIPES } from '../data/latestRecipes';
import { TOP_RECIPES } from '../data/topRecipes';
import { CATEGORY_RECIPES } from '../data/categoryRecipes';
import { FEATURED_RECIPES } from '../data/featuredRecipes';
import { GRID_CLASSES, COMMON_CLASSES } from '../types';
import { APP_CONFIG, SOCIAL_LINKS, BIBLICAL_QUOTE, MISSION_STATEMENT, CATEGORY_TITLES } from '../constants';

const Home: FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setSelectedCategory(prev => prev === categoryId ? null : categoryId);
  }, []);

  const handleHomeClick = useCallback(() => {
    navigate('/');
    setSelectedCategory(null);
  }, [navigate]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSearch = useCallback((query: string) => {
    console.log('Searching for:', query);
    // TODO: Implement search functionality
  }, []);

  return (
    <>
      <Header onHomeClick={handleHomeClick} onSearch={handleSearch} />
      
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Main Container - All content inside max-width */}
        <div className={`${COMMON_CLASSES.CONTAINER} flex-1`}>
          {/* Categories */}
          <div className="bg-gray-100 px-2 py-4 md:px-4">
            <div className="flex flex-row gap-2 md:gap-2 overflow-x-auto pb-2 scrollbar-hide lg:justify-center">
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
          <section className="my-4 px-4" aria-labelledby="featured-section">
            <SectionHeader 
              title="Doces e Sobremesas" 
              showMoreButton 
              onMoreClick={() => console.log('Ver mais doces')}
            />

            {/* Cards Grid - Scrollable horizontal < 1024px, then 5 cols desktop */}
            <div className={GRID_CLASSES.RECIPE_CARD_1}>
              {FEATURED_RECIPES.map((recipe) => (
                <RecipeCard1
                  key={recipe.id}
                  {...recipe}
                />
              ))}
            </div>
          </section>

          {/* Main Content - 3/4 and 1/4 Layout */}
          <div className="px-4 flex gap-4 flex-col xl:flex-row">
            {/* Left Section - 3/4 - Últimas receitas */}
            <main className="flex-[3] w-full" aria-labelledby="latest-recipes">
              <SectionHeader title="Últimas receitas" />

              {/* Grid responsive: 2 cols mobile, 3 cols tablet, 3 cols desktop */}
              <div className={GRID_CLASSES.RECIPE_CARD_2}>
                {LATEST_RECIPES.map((recipe) => (
                  <RecipeCard2
                    key={recipe.id}
                    {...recipe}
                  />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={APP_CONFIG.TOTAL_PAGES}
                onPageChange={handlePageChange}
              />
            </main>

            {/* Right Section - 1/4 - Melhores receitas - Only desktop */}
            <aside 
              className="hidden xl:block flex-1 bg-gray-100 rounded-lg h-fit w-80 mr-4"
              aria-labelledby="top-recipes"
            >
              <h3 
                id="top-recipes"
                className="text-2xl font-bold text-dark mb-1 px-3 pt-3"
              >
                Mais Curtidas
              </h3>
              <div className="flex flex-col px-3 pb-3">
                {TOP_RECIPES.map((recipe) => (
                  <RecipeCard3
                    key={recipe.id}
                    {...recipe}
                  />
                ))}
              </div>
            </aside>
          </div>

          {/* Category Recipes Section - Scrollable horizontal with progressive columns */}
          <section className="mt-8 px-4" aria-labelledby="category-recipes">
            <div className={GRID_CLASSES.RECIPE_CARD_4}>
              {Object.entries(CATEGORY_RECIPES).map(([categoryKey, recipes]) => (
                <CategorySection
                  key={categoryKey}
                  title={CATEGORY_TITLES[categoryKey as keyof typeof CATEGORY_TITLES]}
                  recipes={recipes}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary w-full mt-8" role="contentinfo">
        <div className={`${COMMON_CLASSES.CONTAINER} px-8`}>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-16">
            {/* Mission Message */}
            <div className="text-dark text-center md:text-left">
              <p className="text-sm">
                {MISSION_STATEMENT}
              </p>
            </div>

            {/* Instagram */}
            <div className="text-dark text-center md:text-right">
              <a 
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline"
                aria-label="Seguir no Instagram"
              >
                {SOCIAL_LINKS.INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-dark" aria-hidden="true"></div>

          {/* Bottom Section - Biblical Text */}
          <div className="py-6 text-center">
            <blockquote className="text-dark text-sm font-bold italic">
              "{BIBLICAL_QUOTE.TEXT}" - {BIBLICAL_QUOTE.REFERENCE}
            </blockquote>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
