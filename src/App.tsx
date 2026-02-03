import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks';
import { MainLayout } from './layouts';
import { Home, Profile, Contact, TechStack, Login, TechDetail } from './pages';
import { ROUTES } from './constants';

function App() {
  const [isDarkModeEnabled, toggleDarkMode] = useDarkMode();

  return (
    <div className={`home-wrapper ${isDarkModeEnabled ? 'dark' : ''}`}>
      <Router>
        <MainLayout isDarkModeEnabled={isDarkModeEnabled} onToggleDarkMode={toggleDarkMode}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.TECH_STACK} element={<TechStack />} />
            <Route path={ROUTES.TECH_DETAIL} element={<TechDetail />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;

