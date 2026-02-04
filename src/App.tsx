import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks';
import { MainLayout } from './layouts';
import { Home, Profile, Contact, TechStack, Login, TechDetail, Dashboard } from './pages';
import { ProtectedRoute } from './components';
import { ROUTES } from './constants';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [isDarkModeEnabled, toggleDarkMode] = useDarkMode();

  return (
    <div className={`home-wrapper ${isDarkModeEnabled ? 'dark' : ''}`}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes with MainLayout */}
            <Route path={ROUTES.HOME} element={
              <MainLayout isDarkModeEnabled={isDarkModeEnabled} onToggleDarkMode={toggleDarkMode}>
                <Home />
              </MainLayout>
            } />
            <Route path={ROUTES.PROFILE} element={
              <MainLayout isDarkModeEnabled={isDarkModeEnabled} onToggleDarkMode={toggleDarkMode}>
                <Profile />
              </MainLayout>
            } />
            <Route path={ROUTES.CONTACT} element={
              <MainLayout isDarkModeEnabled={isDarkModeEnabled} onToggleDarkMode={toggleDarkMode}>
                <Contact />
              </MainLayout>
            } />
            <Route path={ROUTES.TECH_STACK} element={
              <MainLayout isDarkModeEnabled={isDarkModeEnabled} onToggleDarkMode={toggleDarkMode}>
                <TechStack />
              </MainLayout>
            } />
            <Route path={ROUTES.TECH_DETAIL} element={
              <MainLayout isDarkModeEnabled={isDarkModeEnabled} onToggleDarkMode={toggleDarkMode}>
                <TechDetail />
              </MainLayout>
            } />

            {/* Login Route (No Layout) */}
            <Route path={ROUTES.LOGIN} element={<Login />} />

            {/* Protected Dashboard Route (Has its own DashboardLayout) */}
            <Route path={ROUTES.DASHBOARD} element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

