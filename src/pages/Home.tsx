import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, Users, Calendar, TrendingUp } from 'lucide-react';
import CommunityCard from '../components/community/CommunityCard';
import WorkoutSchedule from '../components/schedule/WorkoutSchedule';
import ActivityTracker from '../components/progress/ActivityTracker';

const featuredMembers = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 28,
    gender: 'Female',
    level: 'Advanced',
    interests: ['Yoga', 'CrossFit'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: false
  },
  {
    id: '2',
    name: 'Arjun Patel',
    age: 32,
    gender: 'Male',
    level: 'Intermediate',
    interests: ['Calisthenics', 'Boxing'],
    imageUrl: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: true
  }
];

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleExerciseClick = () => {
    navigate('/exercise-database');
  };

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">Welcome to MyFitness</h1>
        <p className="text-lg sm:text-xl mb-8 sm:mb-12">Your personal fitness companion for achieving your goals</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <button 
          onClick={handleExerciseClick}
          className="bg-dark-surface p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-600"
        >
          <div className="flex flex-col items-center">
            <Dumbbell className="h-8 sm:h-12 w-8 sm:w-12 mb-3 sm:mb-4 text-blue-400" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Exercises</h2>
            <p className="text-sm sm:text-base text-gray-400 text-center">Customized plans for all levels</p>
          </div>
        </button>
        
        <button 
          onClick={() => toggleSection('community')} 
          className="bg-dark-surface p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex flex-col items-center">
            <Users className="h-8 sm:h-12 w-8 sm:w-12 mb-3 sm:mb-4 text-green-400" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Community</h2>
            <p className="text-sm sm:text-base text-gray-400 text-center">Connect with fellow gym-goers</p>
          </div>
        </button>
        
        <button 
          onClick={() => toggleSection('schedule')} 
          className="bg-dark-surface p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex flex-col items-center">
            <Calendar className="h-8 sm:h-12 w-8 sm:w-12 mb-3 sm:mb-4 text-purple-400" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Schedule</h2>
            <p className="text-sm sm:text-base text-gray-400 text-center">Plan your workouts efficiently</p>
          </div>
        </button>
        
        <button 
          onClick={() => toggleSection('progress')} 
          className="bg-dark-surface p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex flex-col items-center">
            <TrendingUp className="h-8 sm:h-12 w-8 sm:w-12 mb-3 sm:mb-4 text-red-400" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Progress Tracking</h2>
            <p className="text-sm sm:text-base text-gray-400 text-center">Monitor your fitness journey</p>
          </div>
        </button>
      </div>

      {activeSection === 'community' && (
        <div className="bg-dark-surface rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h3 className="text-xl font-bold mb-2 sm:mb-0">Featured Community Members</h3>
            <Link to="/community" className="text-blue-400 hover:text-gray-500 text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredMembers.map(member => (
              <CommunityCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {activeSection === 'schedule' && (
        <div className="bg-dark-surface rounded-lg p-4 sm:p-6">
          <WorkoutSchedule />
        </div>
      )}

      {activeSection === 'progress' && (
        <div className="bg-dark-surface rounded-lg p-4 sm:p-6">
          <ActivityTracker />
        </div>
      )}
    </div>
  );
};

export default Home;