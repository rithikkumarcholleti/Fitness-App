import React from 'react';
import { Calendar, Dumbbell } from 'lucide-react';

interface ScheduledWorkout {
  date: string;
  type: string;
  muscleGroups: string[];
  duration: string;
  intensity: 'Light' | 'Moderate' | 'High';
}

const workoutSchedule: ScheduledWorkout[] = [
  {
    date: '2024-03-18',
    type: 'Push Day',
    muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
    duration: '60 min',
    intensity: 'High'
  },
  {
    date: '2024-03-19',
    type: 'Pull Day',
    muscleGroups: ['Back', 'Biceps'],
    duration: '60 min',
    intensity: 'High'
  },
  {
    date: '2024-03-20',
    type: 'Legs Day',
    muscleGroups: ['Quadriceps', 'Hamstrings', 'Calves'],
    duration: '75 min',
    intensity: 'High'
  },
  {
    date: '2024-03-21',
    type: 'Rest & Recovery',
    muscleGroups: [],
    duration: '0 min',
    intensity: 'Light'
  },
  {
    date: '2024-03-22',
    type: 'Upper Body',
    muscleGroups: ['Chest', 'Back', 'Shoulders', 'Arms'],
    duration: '70 min',
    intensity: 'Moderate'
  }
];

const WorkoutSchedule: React.FC = () => {
  return (
    <div className="bg-dark-surface rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          This Week's Schedule
        </h3>
        <button className="text-blue-400 hover:text-blue-300 text-sm">
          View Full Calendar
        </button>
      </div>

      <div className="space-y-4">
        {workoutSchedule.map((workout, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
          >
            <div className="flex-shrink-0 w-16 text-center">
              <div className="text-sm text-gray-400">
                {new Date(workout.date).toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="font-semibold">
                {new Date(workout.date).getDate()}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-blue-400" />
                <span className="font-semibold">{workout.type}</span>
              </div>
              {workout.muscleGroups.length > 0 && (
                <div className="text-sm text-gray-400 mt-1">
                  {workout.muscleGroups.join(' • ')}
                </div>
              )}
            </div>

            <div className="text-right">
              <div className="text-sm font-medium">{workout.duration}</div>
              <div className={`text-sm ${
                workout.intensity === 'High' ? 'text-red-400' :
                workout.intensity === 'Moderate' ? 'text-yellow-400' :
                'text-green-400'
              }`}>
                {workout.intensity} Intensity
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSchedule;