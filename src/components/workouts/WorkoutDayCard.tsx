import React from 'react';
import { WorkoutDay } from '../../types/workout';

interface WorkoutDayCardProps {
  day: WorkoutDay;
}

const WorkoutDayCard: React.FC<WorkoutDayCardProps> = ({ day }) => {
  return (
    <div className="bg-dark-surface rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">{day.name}</h3>
      <div className="space-y-3">
        {day.exercises.map((exercise, index) => (
          <div key={index} className="flex justify-between items-start border-b border-gray-700 pb-2">
            <div>
              <p className="font-medium">{exercise.name}</p>
              {exercise.notes && (
                <p className="text-sm text-gray-400">{exercise.notes}</p>
              )}
            </div>
            <div className="text-sm text-gray-400">
              {exercise.sets && exercise.reps && `${exercise.sets} x ${exercise.reps}`}
              {exercise.duration && `${exercise.duration}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutDayCard;