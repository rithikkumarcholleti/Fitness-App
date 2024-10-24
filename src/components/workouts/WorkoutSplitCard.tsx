import React, { useState } from 'react';
import { Activity, Calendar, Users } from 'lucide-react';
import { WorkoutSplit } from '../../types/workout';
import WorkoutDayCard from './WorkoutDayCard';
import SupplementaryWorkouts from './SupplementaryWorkouts';

interface WorkoutSplitCardProps {
  split: WorkoutSplit;
}

const iconMap = {
  activity: Activity,
  calendar: Calendar,
  users: Users,
};

const WorkoutSplitCard: React.FC<WorkoutSplitCardProps> = ({ split }) => {
  const [showExercises, setShowExercises] = useState(false);
  const Icon = iconMap[split.icon as keyof typeof iconMap];

  return (
    <div className="bg-dark-surface rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-500" />
        <h4 className="text-xl font-semibold ml-3">{split.name}</h4>
      </div>
      
      <p className="text-gray-300 mb-4">{split.description}</p>
      
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-400">
          Days per week: {split.daysPerWeek}
        </span>
      </div>

      <details className="mb-4">
        <summary className="cursor-pointer font-semibold mb-2 text-blue-400 hover:text-blue-300">
          View Schedule
        </summary>
        <ul className="list-disc list-inside pl-4 space-y-1 text-gray-300">
          {split.schedule.map((day, idx) => (
            <li key={idx}>{day}</li>
          ))}
        </ul>
      </details>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">
          Suitable for: {split.suitable.join(', ')}
        </span>
        <button
          onClick={() => setShowExercises(!showExercises)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          {showExercises ? 'Hide Exercises' : 'View Exercises'}
        </button>
      </div>

      {showExercises && (
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {split.workoutDays.main.map((day, index) => (
              <WorkoutDayCard key={index} day={day} />
            ))}
          </div>
          
          <SupplementaryWorkouts
            core={split.workoutDays.supplementary.core}
            hiit={split.workoutDays.supplementary.hiit}
            cardio={split.workoutDays.supplementary.cardio}
          />
        </div>
      )}
    </div>
  );
};

export default WorkoutSplitCard;