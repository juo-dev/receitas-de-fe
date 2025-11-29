import { FC, useState } from 'react';
import CategoryItem from '../components/CategoryItem';
import { CATEGORIES, RECIPES } from '../data/recipes';

const Home: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredRecipes = selectedCategory
    ? RECIPES.filter(recipe => recipe.category === selectedCategory)
    : RECIPES;

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#E0E0E0' }}>
      {/* Header */}
      <header style={{ padding: '1rem', backgroundColor: '#FFCC00' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2F394A', textAlign: 'center' }}>
          Aquela Receita
        </h1>
      </header>

      {/* Categories */}
      <div style={{ backgroundColor: '#E0E0E0', padding: '1rem' }}>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '1rem', 
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}
          className="scrollbar-hide"
        >
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

      {/* Recipes Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-dark text-sm mb-1">
                  {recipe.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <span>⏱️ {recipe.prepTime} min</span>
                  <span>👥 {recipe.servings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
