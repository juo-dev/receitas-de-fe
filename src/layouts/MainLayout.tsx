import { FC, ReactNode } from 'react';
import BottomTabBar from '../components/BottomTabBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="pb-16 lg:pb-0" style={{ minHeight: '100vh', backgroundColor: '#F7F7F7' }}>
      <main>
        {children}
      </main>
      <BottomTabBar />
    </div>
  );
};

export default MainLayout;
