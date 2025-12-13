import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

interface TabConfig {
  path: string;
  label: string;
  icon: 'home' | 'flame' | 'favorite' | 'profile';
}

const tabs: TabConfig[] = [
  { path: '/inicio', label: 'Início', icon: 'home' },
  { path: '/em-alta', label: 'Em alta', icon: 'flame' },
  { path: '/favoritos', label: 'Favoritos', icon: 'favorite' },
  { path: '/assinatura', label: 'Assinatura', icon: 'profile' },
];

const BottomTabBar: FC = () => {
  const location = useLocation();
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Altura aproximada do header mobile (h-16 + py-3 = 64px + 24px = 88px)
      const headerHeight = 88;
      const scrollY = window.scrollY;
      
      // BottomBar aparece quando o header não está mais visível
      // e permanece visível enquanto o header não voltar ao topo
      setShowBottomBar(scrollY >= headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden transition-all duration-300 z-50 ${
      showBottomBar ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
            >
              <Icon 
                name={tab.icon} 
                selected={isActive} 
                size={24}
                className="mb-1"
              />
              <span 
                className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabBar;
