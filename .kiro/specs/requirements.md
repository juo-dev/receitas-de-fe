# Requirements Document

## Introduction

Refatoração do sistema de navegação e categorias do aplicativo de receitas "Aquela Receita" para implementar uma navegação por abas inferior (bottom tabs) com 4 seções principais e categorias horizontais com scroll lateral na tela inicial, utilizando os ícones fornecidos com estados selecionado/não-selecionado.

## Glossary

- **App**: O aplicativo móvel "Aquela Receita"
- **Bottom Tab Navigator**: Componente de navegação inferior com abas
- **Category Scroll**: Lista horizontal de categorias com scroll lateral
- **Icon State**: Estado visual do ícone (selecionado ou não-selecionado)
- **Tab Screen**: Tela acessível através da navegação inferior
- **Category Filter**: Filtro de receitas por categoria

## Requirements

### Requirement 1

**User Story:** Como usuário, quero navegar entre as principais seções do app através de abas na parte inferior da tela, para acessar rapidamente diferentes funcionalidades

#### Acceptance Criteria

1. THE App SHALL display a bottom tab navigator with exactly 4 tabs: Início, Em alta, Favoritos, and Assinatura
2. WHEN a user taps on a tab, THE App SHALL navigate to the corresponding screen
3. WHEN a tab is selected, THE App SHALL display the icon without the "_alt" suffix
4. WHEN a tab is not selected, THE App SHALL display the icon with the "_alt" suffix
5. THE App SHALL use home.svg/home_alt.svg for the Início tab, flame.png/flame_alt.png for Em alta tab, favorite.png/favorite_alt.png for Favoritos tab, and profile.png/profile_alt.png for Assinatura tab

### Requirement 2

**User Story:** Como usuário, quero ver categorias de receitas em uma lista horizontal com scroll na tela inicial, para explorar diferentes tipos de receitas facilmente

#### Acceptance Criteria

1. THE App SHALL display a horizontal scrollable list of 6 categories on the Início screen: Salgadas, Massas, Doces, Bolos, Bebidas, and Saudáveis
2. WHEN a category is selected, THE App SHALL display the icon without the "_alt" suffix
3. WHEN a category is not selected, THE App SHALL display the icon with the "_alt" suffix
4. THE App SHALL use salgados.svg/salgados_alt.svg for Salgadas, massas.svg/massas_alt.svg for Massas, doces.svg/doces_alt.svg for Doces, bolos.svg/bolos_alt.svg for Bolos, bebidas.svg/bebidas_alt.svg for Bebidas, and saudavel.svg/saudavel_alt.svg for Saudáveis
5. THE App SHALL allow horizontal scrolling through all categories

### Requirement 3

**User Story:** Como usuário, quero filtrar receitas ao selecionar uma categoria, para ver apenas receitas relevantes ao tipo que me interessa

#### Acceptance Criteria

1. WHEN a user taps on a category, THE App SHALL filter the displayed recipes to show only recipes from that category
2. THE App SHALL visually indicate which category is currently selected
3. WHEN a user taps on an already selected category, THE App SHALL deselect it and show all recipes
4. THE App SHALL maintain smooth scrolling performance with category filtering

### Requirement 4

**User Story:** Como usuário, quero acessar uma tela de receitas em alta, para descobrir receitas populares e tendências

#### Acceptance Criteria

1. WHEN a user navigates to the Em alta tab, THE App SHALL display a screen showing trending or popular recipes
2. THE App SHALL maintain the bottom tab navigator visible on the Em alta screen
3. THE App SHALL highlight the Em alta tab icon when this screen is active

### Requirement 5

**User Story:** Como usuário, quero acessar uma tela de assinatura/perfil, para gerenciar minha conta e configurações

#### Acceptance Criteria

1. WHEN a user navigates to the Assinatura tab, THE App SHALL display a profile or subscription screen
2. THE App SHALL maintain the bottom tab navigator visible on the Assinatura screen
3. THE App SHALL highlight the Assinatura tab icon when this screen is active
