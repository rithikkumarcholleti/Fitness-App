import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Home, Calculator, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-dark-surface text-dark-text shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">MyFitness</span>
            </div>
            <Link to="/" className="hover:text-gray-500 flex items-center">
              <Home className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          {isAuthenticated && (
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}

          {/* Desktop menu */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/personal-training" className="hover:text-gray-500">Personal Training</Link>
              <Link to="/nutrition-plans" className="hover:text-gray-500">Nutrition Plans</Link>
              <Link to="/membership-plans" className="hover:text-gray-500">Memberships</Link>
              <Link to="/bmi-calculator" className="hover:text-gray-500 flex items-center">
                <Calculator className="h-4 w-4 mr-1" />
                BMI Calculator
              </Link>
              <Link to="/profile" className="hover:text-gray-500">Profile</Link>
              <button 
                onClick={logout}
                className="px-4 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-800 transition duration-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isAuthenticated && (
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/personal-training" 
                className="hover:bg-gray-700 px-3 py-2 rounded"
                onClick={toggleMenu}
              >
                Personal Training
              </Link>
              <Link 
                to="/nutrition-plans" 
                className="hover:bg-gray-700 px-3 py-2 rounded"
                onClick={toggleMenu}
              >
                Nutrition Plans
              </Link>
              <Link 
                to="/membership-plans" 
                className="hover:bg-gray-700 px-3 py-2 rounded"
                onClick={toggleMenu}
              >
                Memberships
              </Link>
              <Link 
                to="/bmi-calculator" 
                className="hover:bg-gray-700 px-3 py-2 rounded flex items-center"
                onClick={toggleMenu}
              >
                <Calculator className="h-4 w-4 mr-1" />
                BMI Calculator
              </Link>
              <Link 
                to="/profile" 
                className="hover:bg-gray-700 px-3 py-2 rounded"
                onClick={toggleMenu}
              >
                Profile
              </Link>
              <button 
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="text-left hover:bg-gray-700 px-3 py-2 rounded text-red-400"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;