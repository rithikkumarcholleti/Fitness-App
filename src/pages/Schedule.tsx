import React from 'react';
import WorkoutSchedule from '../components/schedule/WorkoutSchedule';

const Schedule: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Workout Schedule</h2>
      <WorkoutSchedule />
    </div>
  );
};

export default Schedule;