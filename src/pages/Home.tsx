import type { FC } from 'react';
import { useState } from 'react';
import CategoryItem from '../components/CategoryItem';
import { CATEGORIES, RECIPES } from '../data/recipes';
import RecipeCard1 from '../components/RecipeCard1';

const Home: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredRecipes = selectedCategory
    ? RECIPES.filter(recipe => recipe.category === selectedCategory)
    : RECIPES;

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      {/* Header Mobile */}
      <header className="lg:hidden" style={{ padding: '1rem', backgroundColor: '#FFCC00', width: '100%' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2F394A', textAlign: 'center' }}>
          Receitas de Fé
        </h1>
      </header>

      {/* Header Desktop */}
      <header className="hidden lg:flex" style={{ 
        padding: '1rem 2rem', 
        backgroundColor: '#FFCC00', 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        {/* Logo */}
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2F394A', whiteSpace: 'nowrap' }}>
          Receitas de Fé
        </h1>

        {/* Search Bar */}
        <div style={{ 
          flex: 1, 
          maxWidth: '400px',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Pesquise uma receita"
            style={{
              width: '100%',
              padding: '0.5rem 2.5rem 0.5rem 1rem',
              borderRadius: '9999px',
              border: '1px solid #2F394A',
              fontSize: '0.875rem',
              outline: 'none'
            }}
          />
          <img 
            src="/src/assets-icons/search.svg" 
            alt="Buscar"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px'
            }}
          />
        </div>

        {/* Right Side */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem'
        }}>
          {/* Mais Curtidas */}
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#2F394A',
            fontSize: '0.875rem',
            fontWeight: 600
          }}>
            <img src="/src/assets-icons/trofy.svg" alt="Mais curtidas" style={{ width: '20px', height: '20px' }} />
            Mais curtidas
          </button>

          {/* Curtidas */}
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#2F394A',
            fontSize: '0.875rem',
            fontWeight: 600
          }}>
            <img src="/src/assets-icons/favorite_alt.svg" alt="Curtidas" style={{ width: '20px', height: '20px' }} />
            Curtidas
          </button>

          {/* Divider */}
          <span style={{ color: '#2F394A', fontSize: '1.25rem' }}>|</span>

          {/* Minha Conta */}
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#2F394A',
            fontSize: '0.875rem',
            fontWeight: 600
          }}>
            Minha conta
            <img src="/src/assets-icons/user.svg" alt="Usuário" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </header>
      
      <div style={{ minHeight: '100vh', backgroundColor: '#F7F7F7' }}>

      {/* Categories */}
      <div style={{ backgroundColor: '#F7F7F7', padding: '1rem', maxWidth: '1310px', margin: '0 auto' }}>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '1rem', 
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}
          className="scrollbar-hide lg:justify-center"
        >
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
      <div style={{ maxWidth: '1310px', margin: '1rem auto', padding: '0 1rem' }}>
        {/* Section Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '0.75rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#2F394A',
            margin: 0
          }}>
            Doces e Sobremesas
          </h2>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#2F394A',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            mais...
          </button>
        </div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
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

      {/* Recipes Grid */}
      <div className="p-4" style={{ maxWidth: '1310px', margin: '0 auto' }}>
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
    </>
  );
};

export default Home;
