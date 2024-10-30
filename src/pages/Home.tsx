import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Welcome to GymApp</h1>
        <p className="text-xl mb-12">Your personal fitness companion for achieving your goals</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/exercise-database" className="bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-600">
          <div className="flex flex-col items-center">
            <Dumbbell className="h-12 w-12 mb-4 text-blue-400" />
            <h2 className="text-xl font-semibold mb-2">Exercises</h2>
            <p className="text-gray-400">Customized plans for all levels</p>
          </div>
        </Link>
        
        <button 
          onClick={() => toggleSection('community')} 
          className="bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 mb-4 text-green-400" />
            <h2 className="text-xl font-semibold mb-2">Community</h2>
            <p className="text-gray-400">Connect with fellow gym-goers</p>
          </div>
        </button>
        
        <button 
          onClick={() => toggleSection('schedule')} 
          className="bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex flex-col items-center">
            <Calendar className="h-12 w-12 mb-4 text-purple-400" />
            <h2 className="text-xl font-semibold mb-2">Schedule</h2>
            <p className="text-gray-400">Plan your workouts efficiently</p>
          </div>
        </button>
        
        <button 
          onClick={() => toggleSection('progress')} 
          className="bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex flex-col items-center">
            <TrendingUp className="h-12 w-12 mb-4 text-red-400" />
            <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
            <p className="text-gray-400">Monitor your fitness journey</p>
          </div>
        </button>
      </div>

      {activeSection === 'community' && (
        <div className="bg-dark-surface rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Featured Community Members</h3>
            <Link to="/community" className="text-white-400 hover:text-gray-500 text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMembers.map(member => (
              <CommunityCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {activeSection === 'schedule' && (
        <div className="bg-dark-surface rounded-lg p-6">
          <WorkoutSchedule />
        </div>
      )}

      {activeSection === 'progress' && (
        <div className="bg-dark-surface rounded-lg p-6">
          <ActivityTracker />
        </div>
      )}
    </div>
  );
};

export default Home;

