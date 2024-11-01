import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-dark-surface text-dark-text shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">GymApp</span>
          </Link>
          {isAuthenticated ? (
            <div className="flex space-x-4">
              <Link to="/personal-training" className="hover:text-gray-500">Personal Training</Link>
              <Link to="/nutrition-plans" className="hover:text-gray-500">Nutrition Plans</Link>
              <Link to="/membership-plans" className="hover:text-gray-500">Memberships</Link>
              <Link to="/profile" className="hover:text-gray-500">Profile</Link>
              <button 
                onClick={logout}
                className="px-2 py-0 bg-blue-500 text-white font-semibold rounded hover:bg-blue-800 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
