// Shared types for the application

export type CategoryType = 'salgados' | 'massas' | 'doces' | 'bolos' | 'bebidas' | 'saudavel';

export interface BaseRecipe {
  id: string;
  image: string;
  title: string;
}

export interface CategorizedRecipe extends BaseRecipe {
  category: CategoryType;
  categoryName: string;
}

export interface DetailedRecipe extends CategorizedRecipe {
  description: string;
}

export interface RankedRecipe extends BaseRecipe {
  rank: number;
}

export interface MenuItem {
  icon: string;
  label: string;
  alt: string;
  onClick?: () => void;
}

// Constants - Clean 3-Breakpoint System
export const BREAKPOINTS = {
  MOBILE: 768,    // < 768px
  TABLET: 1024,   // 768px - 1024px  
  DESKTOP: 1024,  // > 1024px
  MAX_WIDTH: 1310,
} as const;

export const GRID_CLASSES = {
  // RecipeCard1: Scrollable horizontal < 1024px, then 5 cols desktop
  RECIPE_CARD_1: "grid grid-flow-col gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide auto-cols-[calc((100%-16px)/2)] md:auto-cols-[calc((100%-32px)/3)] xl:grid-cols-5 xl:overflow-x-visible xl:auto-cols-auto",
  // RecipeCard2: 2 cols mobile, 3 cols tablet, 3 cols desktop  
  RECIPE_CARD_2: "grid grid-cols-2 md:grid-cols-3 gap-4",
  // RecipeCard4: Scrollable horizontal with progressive columns
  RECIPE_CARD_4: "grid grid-flow-col gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide auto-cols-[calc((100%-16px)/2)] sm:auto-cols-[calc((100%-32px)/3)] md:auto-cols-[calc((100%-48px)/4)] lg:auto-cols-[calc((100%-64px)/5)] xl:auto-cols-[calc((100%-80px)/6)]",
} as const;

export const COMMON_CLASSES = {
  HEADER_BUTTON: "flex items-center gap-2 bg-transparent border-none cursor-pointer text-dark text-sm font-semibold",
  SECTION_TITLE: "text-2xl font-bold text-dark m-0",
  CONTAINER: "max-w-[1310px] mx-auto w-full",
  SCROLL_CONTAINER: "overflow-x-auto pb-2 scrollbar-hide",
} as const;