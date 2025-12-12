import type { FC } from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';
import type { MenuItem } from '../types';

interface HeaderProps {
  onHomeClick: () => void;
  onSearch?: (query: string) => void;
}

const Header: FC<HeaderProps> = ({ onHomeClick, onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      icon: "/src/assets-icons/trofy.svg",
      label: "Mais curtidas",
      alt: "Mais curtidas"
    },
    {
      icon: "/src/assets-icons/favorite_alt.svg", 
      label: "Curtidas",
      alt: "Curtidas"
    },
    {
      icon: "/src/assets-icons/user.svg",
      label: "Minha conta", 
      alt: "Usuário"
    }
  ];

  const HamburgerButton = () => (
    <button 
      className="flex flex-col gap-1 p-2"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Abrir menu de navegação"
      aria-expanded={mobileMenuOpen}
    >
      <div className="w-6 h-0.5 bg-dark"></div>
      <div className="w-6 h-0.5 bg-dark"></div>
      <div className="w-6 h-0.5 bg-dark"></div>
    </button>
  );

  const Logo = ({ className }: { className: string }) => (
    <img 
      src="/src/assets/logo1.png" 
      alt="Receitas de Fé - Página inicial" 
      className={`cursor-pointer ${className}`}
      onClick={onHomeClick}
    />
  );

  return (
    <>
      {/* Header Mobile/Tablet */}
      <header className="lg:hidden px-4 py-2 bg-primary w-full flex justify-between items-center">
        <Logo className="h-12" />
        <HamburgerButton />
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-dark">
          <nav className="px-4 py-2 space-y-3" role="navigation" aria-label="Menu principal">
            <SearchBar className="w-full" onSearch={onSearch} />
            
            {menuItems.map((item, index) => (
              <HeaderButton
                key={index}
                icon={item.icon}
                label={item.label}
                alt={item.alt}
                onClick={item.onClick}
                className="w-full text-left py-2"
              />
            ))}
          </nav>
        </div>
      )}

      {/* Header Desktop */}
      <header className="hidden lg:flex px-8 py-2 bg-primary w-full items-center justify-center gap-8">
        <Logo className="h-20" />

        <SearchBar className="flex-1 max-w-md" onSearch={onSearch} />

        <nav className="flex items-center gap-8" role="navigation" aria-label="Menu principal">
          {menuItems.slice(0, 2).map((item, index) => (
            <HeaderButton
              key={index}
              icon={item.icon}
              label={item.label}
              alt={item.alt}
              onClick={item.onClick}
            />
          ))}

          <span className="text-dark text-xl" aria-hidden="true">|</span>

          <HeaderButton
            icon={menuItems[2].icon}
            label={menuItems[2].label}
            alt={menuItems[2].alt}
            onClick={menuItems[2].onClick}
            iconPosition="right"
          />
        </nav>
      </header>
    </>
  );
};

export default Header;