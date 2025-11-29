export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  prepTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: 'salgados' | 'massas' | 'doces' | 'bolos' | 'bebidas' | 'saudavel';
}

export const CATEGORIES: Category[] = [
  { id: 'salgadas', name: 'Salgadas', icon: 'salgados' },
  { id: 'massas', name: 'Massas', icon: 'massas' },
  { id: 'doces', name: 'Doces', icon: 'doces' },
  { id: 'bolos', name: 'Bolos', icon: 'bolos' },
  { id: 'bebidas', name: 'Bebidas', icon: 'bebidas' },
  { id: 'saudaveis', name: 'Saudáveis', icon: 'saudavel' },
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Coxinha de Frango',
    description: 'Coxinha crocante com recheio cremoso de frango',
    image: 'https://via.placeholder.com/300x200/FFCC00/2F394A?text=Coxinha',
    category: 'salgadas',
    prepTime: 60,
    servings: 20,
    ingredients: [
      '500g de peito de frango',
      '2 xícaras de farinha de trigo',
      '2 xícaras de caldo de galinha',
      '1 cebola picada',
      'Sal e pimenta a gosto',
    ],
    instructions: [
      'Cozinhe o frango e desfie',
      'Refogue com cebola e temperos',
      'Prepare a massa com farinha e caldo',
      'Modele as coxinhas',
      'Empane e frite',
    ],
    isNew: true,
  },
  {
    id: '2',
    title: 'Espaguete à Carbonara',
    description: 'Massa italiana clássica com molho cremoso',
    image: 'https://via.placeholder.com/300x200/FFCC00/2F394A?text=Carbonara',
    category: 'massas',
    prepTime: 30,
    servings: 4,
    ingredients: [
      '400g de espaguete',
      '200g de bacon',
      '4 ovos',
      '100g de queijo parmesão',
      'Pimenta do reino',
    ],
    instructions: [
      'Cozinhe o espaguete al dente',
      'Frite o bacon até ficar crocante',
      'Misture ovos e queijo',
      'Combine tudo rapidamente',
      'Sirva imediatamente',
    ],
  },
  {
    id: '3',
    title: 'Brigadeiro Gourmet',
    description: 'Doce brasileiro tradicional com toque especial',
    image: 'https://via.placeholder.com/300x200/FFCC00/2F394A?text=Brigadeiro',
    category: 'doces',
    prepTime: 20,
    servings: 30,
    ingredients: [
      '1 lata de leite condensado',
      '3 colheres de chocolate em pó',
      '1 colher de manteiga',
      'Chocolate granulado',
    ],
    instructions: [
      'Misture todos os ingredientes',
      'Cozinhe em fogo baixo mexendo sempre',
      'Deixe esfriar',
      'Enrole e passe no granulado',
    ],
    isNew: true,
  },
  {
    id: '4',
    title: 'Bolo de Cenoura',
    description: 'Bolo fofinho com cobertura de chocolate',
    image: 'https://via.placeholder.com/300x200/FFCC00/2F394A?text=Bolo',
    category: 'bolos',
    prepTime: 50,
    servings: 12,
    ingredients: [
      '3 cenouras médias',
      '3 ovos',
      '2 xícaras de açúcar',
      '2 xícaras de farinha',
      '1 xícara de óleo',
    ],
    instructions: [
      'Bata cenoura, ovos e óleo no liquidificador',
      'Misture com açúcar e farinha',
      'Asse por 40 minutos',
      'Prepare a cobertura',
      'Cubra o bolo ainda quente',
    ],
  },
  {
    id: '5',
    title: 'Suco Verde Detox',
    description: 'Bebida saudável e refrescante',
    image: 'https://via.placeholder.com/300x200/FFCC00/2F394A?text=Suco',
    category: 'bebidas',
    prepTime: 10,
    servings: 2,
    ingredients: [
      '1 maçã',
      '1 folha de couve',
      'Suco de 1 limão',
      '200ml de água',
      'Gengibre a gosto',
    ],
    instructions: [
      'Lave bem os ingredientes',
      'Bata tudo no liquidificador',
      'Coe se preferir',
      'Sirva gelado',
    ],
  },
  {
    id: '6',
    title: 'Salada Caesar',
    description: 'Salada clássica com molho especial',
    image: 'https://via.placeholder.com/300x200/FFCC00/2F394A?text=Salada',
    category: 'saudaveis',
    prepTime: 15,
    servings: 4,
    ingredients: [
      'Alface romana',
      'Peito de frango grelhado',
      'Croutons',
      'Queijo parmesão',
      'Molho caesar',
    ],
    instructions: [
      'Lave e corte a alface',
      'Grelhe o frango e corte em tiras',
      'Prepare o molho',
      'Monte a salada',
      'Finalize com parmesão',
    ],
    isNew: true,
  },
];

export const getLatestRecipes = (): Recipe[] => {
  return RECIPES.filter(recipe => recipe.isNew);
};

export const getRecipesByCategory = (categoryId: string): Recipe[] => {
  return RECIPES.filter(recipe => recipe.category === categoryId);
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return RECIPES.find(recipe => recipe.id === id);
};
