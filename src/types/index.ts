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

// Constants
export const BREAKPOINTS = {
  MOBILE: 488,
  TABLET: 720,
  DESKTOP: 1100,
  MAX_WIDTH: 1310,
} as const;

export const GRID_CLASSES = {
  RESPONSIVE_5_COL: "grid grid-cols-[repeat(5,1fr)] min-[1100px]:grid-cols-5 min-[880px]:max-[1099px]:grid-cols-[repeat(5,calc(25%-12px))] min-[670px]:max-[879px]:grid-cols-[repeat(5,calc(33.333%-10.667px))] max-[669px]:grid-cols-[repeat(5,calc(50%-8px))] gap-4 min-w-full",
  RESPONSIVE_6_COL: "grid grid-cols-[repeat(6,1fr)] min-[1100px]:grid-cols-6 min-[880px]:max-[1099px]:grid-cols-[repeat(6,calc(25%-12px))] min-[670px]:max-[879px]:grid-cols-[repeat(6,calc(33.333%-10.667px))] max-[669px]:grid-cols-[repeat(6,calc(50%-8px))] gap-4 min-w-full",
  RECIPE_2_COL: "grid grid-cols-2 min-[488px]:grid-cols-3 gap-4",
} as const;

export const COMMON_CLASSES = {
  HEADER_BUTTON: "flex items-center gap-2 bg-transparent border-none cursor-pointer text-dark text-sm font-semibold",
  SECTION_TITLE: "text-2xl font-bold text-dark m-0",
  CONTAINER: "max-w-[1310px] mx-auto",
  SCROLL_CONTAINER: "overflow-x-auto pb-2 scrollbar-hide",
} as const;