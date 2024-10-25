import React from 'react';
import { Calendar } from 'lucide-react';

type WorkoutIntensity = 'none' | 'light' | 'moderate' | 'intense';

interface DayActivity {
  date: string;
  intensity: WorkoutIntensity;
  exercises: number;
}

const getIntensityColor = (intensity: WorkoutIntensity): string => {
  switch (intensity) {
    case 'intense':
      return 'bg-green-600';
    case 'moderate':
      return 'bg-green-500';
    case 'light':
      return 'bg-green-300';
    default:
      return 'bg-gray-700';
  }
};

const currentWeekActivity: DayActivity[] = [
  { date: '2024-03-18', intensity: 'intense', exercises: 12 },
  { date: '2024-03-19', intensity: 'moderate', exercises: 8 },
  { date: '2024-03-20', intensity: 'light', exercises: 3 },
  { date: '2024-03-21', intensity: 'none', exercises: 0 },
  { date: '2024-03-22', intensity: 'intense', exercises: 15 },
  { date: '2024-03-23', intensity: 'moderate', exercises: 7 },
  { date: '2024-03-24', intensity: 'none', exercises: 0 },
];

const ActivityTracker: React.FC = () => {
  return (
    <div className="bg-dark-surface rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Weekly Activity
        </h3>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {currentWeekActivity.map((day, idx) => (
          <div key={idx} className="text-center">
            <div className="text-sm text-gray-400 mb-1">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <div
              className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${getIntensityColor(
                day.intensity
              )}`}
            >
              {day.exercises > 0 && (
                <span className="text-sm font-medium">
                  {day.exercises}
                </span>
              )}
            </div>
            <div className="text-xs mt-1">
              {new Date(day.date).getDate()}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-4 gap-2">
        <div className="text-center">
          <div className="w-6 h-6 rounded-full bg-green-600 mx-auto mb-1"></div>
          <span className="text-xs">Intense</span>
        </div>
        <div className="text-center">
          <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-1"></div>
          <span className="text-xs">Moderate</span>
        </div>
        <div className="text-center">
          <div className="w-6 h-6 rounded-full bg-green-300 mx-auto mb-1"></div>
          <span className="text-xs">Light</span>
        </div>
        <div className="text-center">
          <div className="w-6 h-6 rounded-full bg-gray-700 mx-auto mb-1"></div>
          <span className="text-xs">Rest</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;