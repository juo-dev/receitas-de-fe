import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import TopRecipes from './pages/TopRecipes';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/em-alta"
          element={
            <MainLayout>
              <TopRecipes />
            </MainLayout>
          }
        />
        <Route
          path="/favoritos"
          element={
            <MainLayout>
              <Favorites />
            </MainLayout>
          }
        />
        <Route
          path="/assinatura"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
