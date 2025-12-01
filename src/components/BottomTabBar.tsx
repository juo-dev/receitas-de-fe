import { FC } from 'react';
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

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom lg:hidden">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
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
