import React from 'react';
import { Exercise } from '../../types/workout';

interface SupplementaryWorkoutsProps {
  core: Exercise[];
  hiit: Exercise[];
  cardio: Exercise[];
}

const SupplementaryWorkouts: React.FC<SupplementaryWorkoutsProps> = ({
  core,
  hiit,
  cardio
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-dark-surface rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Core Exercises</h3>
        <div className="space-y-3">
          {core.map((exercise, index) => (
            <div key={index} className="border-b border-gray-700 pb-2">
              <p className="font-medium">{exercise.name}</p>
              <p className="text-sm text-gray-400">
                {exercise.duration || `${exercise.sets} x ${exercise.reps}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-surface rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">HIIT Workout</h3>
        <div className="space-y-3">
          {hiit.map((exercise, index) => (
            <div key={index} className="border-b border-gray-700 pb-2">
              <p className="font-medium">{exercise.name}</p>
              <p className="text-sm text-gray-400">{exercise.duration}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-surface rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Cardio Sessions</h3>
        <div className="space-y-3">
          {cardio.map((exercise, index) => (
            <div key={index} className="border-b border-gray-700 pb-2">
              <p className="font-medium">{exercise.name}</p>
              <p className="text-sm text-gray-400">
                {exercise.duration}
                {exercise.notes && ` - ${exercise.notes}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplementaryWorkouts;