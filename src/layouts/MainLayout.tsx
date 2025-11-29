import { FC, ReactNode } from 'react';
import BottomTabBar from '../components/BottomTabBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#E0E0E0', paddingBottom: '4rem' }}>
      <main style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {children}
      </main>
      <BottomTabBar />
    </div>
  );
};

export default MainLayout;
