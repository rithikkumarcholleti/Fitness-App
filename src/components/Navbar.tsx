import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark-surface text-dark-text shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">GymApp</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/workout-plans" className="hover:text-blue-300">Workout Plans</Link>
            <Link to="/exercise-database" className="hover:text-blue-300">Exercises</Link>
            <Link to="/membership-plans" className="hover:text-blue-300">Memberships</Link>
            <Link to="/profile" className="hover:text-blue-300">Profile</Link>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;