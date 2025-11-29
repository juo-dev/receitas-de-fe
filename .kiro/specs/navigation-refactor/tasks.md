# Implementation Plan

## Phase 1: Project Setup and Migration

- [x] 1. Initialize new Vite + React + TypeScript project
  - Create new project with `npm create vite@latest aquela-receita -- --template react-ts`
  - Configure TypeScript with strict mode
  - Setup project structure (src/, public/, etc.)
  - _Requirements: Foundation for web-first development_

- [x] 2. Install and configure Tailwind CSS
  - Install Tailwind CSS, PostCSS, and autoprefixer
  - Create tailwind.config.js with custom theme (colors, spacing)
  - Configure PostCSS
  - Add Tailwind directives to index.css
  - _Requirements: Styling foundation for responsive UI_

- [x] 3. Install and configure Capacitor
  - Install @capacitor/core, @capacitor/cli
  - Run `npx cap init` with app details
  - Install @capacitor/android and @capacitor/ios
  - Create capacitor.config.ts
  - Add native platforms: `npx cap add android` and `npx cap add ios`
  - _Requirements: Native mobile compilation capability_

- [x] 4. Install core dependencies
  - Install react-router-dom for routing
  - Install @capacitor/camera for camera access
  - Install clsx for conditional classnames
  - Setup development tools (ESLint, Prettier)
  - _Requirements: Core functionality dependencies_

## Phase 2: Core Components and Infrastructure

- [x] 5. Create Icon component system
  - Create src/components/Icon.tsx
  - Implement SVG icon rendering with selected/unselected states
  - Add all category icons (salgados, massas, doces, bolos, bebidas, saudavel)
  - Add navigation icons (home, flame, favorite, profile)
  - Support size and className props
  - _Requirements: 1.4, 1.5, 2.2, 2.3, 2.4_

- [x] 6. Create BottomTabBar component
  - Create src/components/BottomTabBar.tsx
  - Implement 4-tab layout (Início, Em alta, Favoritos, Assinatura)
  - Integrate with React Router using useLocation
  - Add icon selection logic based on current route
  - Style with Tailwind (fixed bottom, safe area support)
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 7. Create CategoryItem component
  - Create src/components/CategoryItem.tsx
  - Implement category pill with icon and label
  - Add selected/unselected visual states
  - Handle click events
  - Add hover and active states
  - _Requirements: 2.2, 2.3, 3.2_

- [x] 8. Create MainLayout component
  - Create src/layouts/MainLayout.tsx
  - Include BottomTabBar at bottom
  - Handle safe area insets for mobile
  - Provide consistent padding and spacing
  - Render children (page content)
  - _Requirements: 1.1, 4.2, 5.2_

## Phase 3: Data Layer and Context

- [x] 9. Port recipe data models
  - Create src/data/recipes.ts
  - Define Recipe and Category interfaces
  - Port CATEGORIES array with 6 categories
  - Create mock recipe data
  - Add helper functions (getLatestRecipes, getRecipesByCategory)
  - _Requirements: All requirements depend on data layer_

- [ ] 10. Create FavoritesContext
  - Create src/contexts/FavoritesContext.tsx
  - Implement favorites state management
  - Add toggleFavorite, isFavorite functions
  - Persist favorites to localStorage
  - _Requirements: Support for favorites functionality_

## Phase 4: Page Components

- [ ] 11. Create Home page
  - Create src/pages/Home.tsx
  - Implement header with logo and icons
  - Add horizontal scrollable category list
  - Implement category selection state
  - Display recipe grid (2 columns)
  - Filter recipes by selected category
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4_

- [ ] 12. Create TopRecipes page
  - Create src/pages/TopRecipes.tsx
  - Display trending/popular recipes
  - Use same RecipeCard component
  - Add sorting options
  - _Requirements: 4.1, 4.2, 4.3_

- [ ] 13. Create Favorites page
  - Create src/pages/Favorites.tsx
  - Display favorited recipes from context
  - Handle empty state
  - Allow unfavoriting
  - _Requirements: Support favorites feature_

- [ ] 14. Create Profile page
  - Create src/pages/Profile.tsx
  - Display user profile/subscription info
  - Add placeholder content for future features
  - _Requirements: 5.1, 5.2, 5.3_

- [ ] 15. Create RecipeDetail page
  - Create src/pages/RecipeDetail.tsx
  - Display full recipe information
  - Add favorite button
  - Show ingredients and instructions
  - Add back navigation
  - _Requirements: Recipe viewing functionality_

- [ ] 16. Create Category page
  - Create src/pages/Category.tsx
  - Display recipes filtered by category
  - Show category name in header
  - Use RecipeCard component
  - _Requirements: 3.1_

## Phase 5: Routing and Navigation

- [ ] 17. Setup React Router
  - Configure routes in src/App.tsx
  - Add MainLayout wrapper for tab pages
  - Setup route paths (/inicio, /em-alta, /favoritos, /assinatura)
  - Add detail routes (/receita/:id, /categoria/:id)
  - Implement 404 page
  - _Requirements: 1.2, 4.1, 5.1_

- [ ] 18. Implement navigation logic
  - Add Link components for recipe cards
  - Add navigation to category page
  - Handle back navigation
  - Add route transitions
  - _Requirements: 1.2, 3.1_

## Phase 6: Styling and Responsiveness

- [ ] 19. Implement mobile-first responsive design
  - Style all components with Tailwind mobile-first
  - Add responsive breakpoints (sm, md, lg)
  - Test on different screen sizes (320px to 1920px)
  - Adjust grid layouts for larger screens
  - _Requirements: Mobile-first, responsive web requirement_

- [ ] 20. Add animations and transitions
  - Add page transition animations
  - Add hover effects on interactive elements
  - Add loading states
  - Add smooth scrolling
  - _Requirements: Polish and UX_

## Phase 7: Capacitor Integration

- [ ] 21. Configure Capacitor for production
  - Update capacitor.config.ts with production settings
  - Configure splash screen
  - Setup app icons
  - Configure status bar
  - _Requirements: Native mobile compilation_

- [ ] 22. Implement camera functionality (placeholder)
  - Create useCameraservice hook
  - Integrate @capacitor/camera
  - Add camera button to profile or recipe creation
  - Handle permissions
  - _Requirements: Hardware access requirement_

- [ ] 23. Test Capacitor build process
  - Run `npm run build` to create dist/
  - Run `npx cap sync` to update native projects
  - Open Android Studio and build APK
  - Open Xcode and build for iOS simulator
  - Test app on emulators
  - _Requirements: Native compilation verification_

## Phase 8: Cleanup and Optimization

- [ ] 24. Remove unused React Native code and dependencies
  - Delete old React Native components
  - Delete old navigation files
  - Remove React Native dependencies from package.json
  - Delete expo configuration files
  - Clean up unused assets
  - _Requirements: Clean codebase_

- [ ] 25. Remove unused icons and assets
  - Audit all icons in assets/icons/
  - Remove icons not referenced in Icon component
  - Optimize remaining SVG icons
  - Remove unused images
  - _Requirements: Optimize bundle size_

- [ ] 26. Optimize bundle size
  - Configure Vite for production optimization
  - Enable tree-shaking
  - Purge unused Tailwind classes
  - Lazy load pages with React.lazy()
  - Analyze bundle with vite-bundle-visualizer
  - _Requirements: Performance optimization_

- [ ] 27. Add error boundaries
  - Create ErrorBoundary component
  - Wrap app with error boundary
  - Add error logging
  - Create error fallback UI
  - _Requirements: Error handling_

## Phase 9: Testing and Quality Assurance

- [ ] 28. Setup testing infrastructure
  - Install Vitest for unit tests
  - Install @testing-library/react
  - Configure test environment
  - Create test utilities
  - _Requirements: Testing foundation_

- [ ]* 29. Write unit tests for components
  - Test Icon component with different props
  - Test BottomTabBar active state logic
  - Test CategoryItem selection
  - Test RecipeCard rendering
  - _Requirements: Component testing_

- [ ]* 30. Write integration tests
  - Test navigation flow between pages
  - Test category filtering
  - Test favorites functionality
  - Test recipe detail navigation
  - _Requirements: Integration testing_

- [ ] 31. Browser testing
  - Test on Chrome, Safari, Firefox
  - Test on different screen sizes
  - Test touch interactions
  - Verify responsive design
  - Test on mobile browsers (iOS Safari, Chrome Android)
  - _Requirements: Cross-browser compatibility_

- [ ] 32. Native platform testing
  - Test on Android emulator
  - Test on iOS simulator
  - Test camera functionality
  - Test app lifecycle events
  - Verify performance on mobile devices
  - _Requirements: Native platform verification_

## Phase 10: Documentation and Deployment

- [ ] 33. Create README documentation
  - Document project setup
  - Add development workflow instructions
  - Document build process for web
  - Document native build process (Android/iOS)
  - Add troubleshooting section
  - _Requirements: Developer documentation_

- [ ] 34. Create deployment guide
  - Document web deployment process
  - Document Android APK generation
  - Document iOS IPA generation
  - Add environment configuration guide
  - _Requirements: Deployment documentation_

- [ ] 35. Final verification checkpoint
  - Ensure all tests pass
  - Verify web build works in browser
  - Verify Android build runs on emulator
  - Verify iOS build runs on simulator
  - Check bundle size is acceptable
  - Verify all requirements are met
  - _Requirements: Final quality check_
