import React from 'react';
import ActivityTracker from '../components/progress/ActivityTracker';

const Progress: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Your Progress</h2>
      <ActivityTracker />
    </div>
  );
};

export default Progress;