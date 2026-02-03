import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { HiHome, HiUser, HiMail, HiDocumentText, HiMoon, HiSun, HiArrowRight, HiMenu, HiX } from 'react-icons/hi';

interface NavbarProps {
  onToggle: () => void;
  isDarkModeEnabled: boolean;
}

const Navbar = (props: NavbarProps) => {
  const {onToggle, isDarkModeEnabled} = props;
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  // Helper function to get link classes
  const getLinkClasses = (path: string): string => {
    const baseClasses = "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium";
    const activeClasses = "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg";
    const inactiveClasses = "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  // Close sidebar when clicking a link
  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto flex p-4 md:p-5 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 cursor-pointer hover:opacity-80 transition-opacity">
            <Logo width="45" height="45" />
            <span className="ml-3 text-xl dark:text-white font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Vikash Maskhare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center text-base gap-1 ml-auto mr-6">
            <Link
              to="/"
              className={getLinkClasses('/')}
            >
              <HiHome className="text-lg" />
              Home
            </Link>
            <Link
              to="/profile"
              className={getLinkClasses('/profile')}
            >
              <HiUser className="text-lg" />
              Profile
            </Link>
            <Link
              to="/contact"
              className={getLinkClasses('/contact')}
            >
              <HiMail className="text-lg" />
              Contact
            </Link>
            <Link
              to="/blogs"
              className={getLinkClasses('/blogs')}
            >
              <HiDocumentText className="text-lg" />
              Languages
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onToggle}
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-lg text-sm p-2.5 transition-all duration-200 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDarkModeEnabled ? (
                <HiMoon className="w-5 h-5 text-purple-600" />
              ) : (
                <HiSun className="w-5 h-5 text-yellow-500" />
              )}
            </button>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 py-2 px-5 focus:outline-none hover:from-purple-700 hover:to-indigo-700 rounded-lg text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Sign in
              <HiArrowRight className="text-lg" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onToggle}
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-lg text-sm p-2.5 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkModeEnabled ? (
                <HiMoon className="w-5 h-5 text-purple-600" />
              ) : (
                <HiSun className="w-5 h-5 text-yellow-500" />
              )}
            </button>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-lg text-sm p-2.5 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3">
              <Logo width="40" height="40" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Vikash Maskhare
              </span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-lg p-2 transition-all duration-200"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={getLinkClasses('/')}
            >
              <HiHome className="text-xl" />
              Home
            </Link>
            <Link
              to="/profile"
              onClick={handleLinkClick}
              className={getLinkClasses('/profile')}
            >
              <HiUser className="text-xl" />
              Profile
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={getLinkClasses('/contact')}
            >
              <HiMail className="text-xl" />
              Contact
            </Link>
            <Link
              to="/blogs"
              onClick={handleLinkClick}
              className={getLinkClasses('/blogs')}
            >
              <HiDocumentText className="text-xl" />
              Languages
            </Link>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 py-3 px-5 focus:outline-none hover:from-purple-700 hover:to-indigo-700 rounded-lg text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Sign in
              <HiArrowRight className="text-lg" />
            </Link>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © 2024 Vikash Maskhare
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

