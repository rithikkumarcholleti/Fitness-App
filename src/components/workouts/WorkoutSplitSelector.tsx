import React from 'react';
import { workoutSplits } from '../../data/workoutSplits';
import WorkoutSplitCard from './WorkoutSplitCard';

const WorkoutSplitSelector: React.FC = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Choose Your Workout Split</h3>
      <div className="space-y-6">
        {workoutSplits.map((split) => (
          <WorkoutSplitCard key={split.id} split={split} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutSplitSelector;