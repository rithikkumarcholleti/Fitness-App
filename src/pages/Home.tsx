import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Users, Calendar, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to GymApp</h1>
      <p className="text-xl mb-12">Your personal fitness companion for achieving your goals</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Dumbbell className="h-12 w-12 mb-4 text-blue-500" />}
          title="Workout Plans"
          description="Customized plans for all levels"
          link="/workout-plans"
        />
        <FeatureCard
          icon={<Users className="h-12 w-12 mb-4 text-green-500" />}
          title="Community"
          description="Connect with fellow gym-goers"
          link="/community"
        />
        <FeatureCard
          icon={<Calendar className="h-12 w-12 mb-4 text-purple-500" />}
          title="Schedule"
          description="Plan your workouts efficiently"
          link="/schedule"
        />
        <FeatureCard
          icon={<TrendingUp className="h-12 w-12 mb-4 text-red-500" />}
          title="Progress Tracking"
          description="Monitor your fitness journey"
          link="/progress"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex flex-col items-center">
        {icon}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Home;