import React, { useState } from 'react';
import { Calendar as CalendarIcon, Dumbbell, Edit2, X, Plus, Save } from 'lucide-react';

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

const workoutTypes = [
  'Push Day',
  'Pull Day',
  'Legs Day',
  'Upper Body',
  'Lower Body',
  'Full Body',
  'Cardio',
  'Rest & Recovery'
];

const muscleGroupOptions = [
  'Chest',
  'Back',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Quadriceps',
  'Hamstrings',
  'Calves',
  'Core',
  'Arms'
];

const WorkoutSchedule: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState<ScheduledWorkout[]>(workoutSchedule);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Generate next 15 days
  const next15Days = Array.from({ length: 15 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  const handleAddWorkout = (date: string) => {
    const newWorkout: ScheduledWorkout = {
      date,
      type: 'Push Day',
      muscleGroups: [],
      duration: '60 min',
      intensity: 'Moderate'
    };
    setEditedSchedule([...editedSchedule, newWorkout]);
  };

  const handleUpdateWorkout = (index: number, field: keyof ScheduledWorkout, value: any) => {
    const updated = [...editedSchedule];
    updated[index] = { ...updated[index], [field]: value };
    setEditedSchedule(updated);
  };

  const handleRemoveWorkout = (index: number) => {
    setEditedSchedule(editedSchedule.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
  };

  const CalendarView = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-surface rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">15-Day Workout Calendar</h3>
          <button onClick={() => setShowCalendar(false)} className="text-white-400 hover:text-gray-500 focus:outline-none p-0"
          style={{ backgroundColor: 'transparent' }}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          {next15Days.map((date) => {
            const workout = editedSchedule.find(w => w.date === date);
            return (
              <div key={date} className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold">
                    {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </div>
                  {!workout && isEditing && (
                    <button
                      onClick={() => handleAddWorkout(date)}
                      className="text-blue-400 hover:text-gray-300 flex items-center gap-1 bg-transparent hover:bg-transparent"
                    >
                      <Plus className="w-4 h-4" /> Add Workout
                    </button>
                  )}
                </div>
                {workout && (
                  <div className="bg-gray-700 rounded p-3">
                    {isEditing ? (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <select
                            value={workout.type}
                            onChange={(e) => handleUpdateWorkout(editedSchedule.indexOf(workout), 'type', e.target.value)}
                            className="bg-gray-600 rounded px-2 py-1"
                          >
                            {workoutTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          <button
                             onClick={() => handleRemoveWorkout(editedSchedule.indexOf(workout))}
                             className="text-white-400 hover:text-gray-500 focus:outline-none p-0" 
                             style={{ backgroundColor: 'transparent' }} 
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <select
                          multiple
                          value={workout.muscleGroups}
                          onChange={(e) => handleUpdateWorkout(
                            editedSchedule.indexOf(workout),
                            'muscleGroups',
                            Array.from(e.target.selectedOptions, option => option.value)
                          )}
                          className="bg-gray-600 rounded px-2 py-1 w-full"
                        >
                          {muscleGroupOptions.map(muscle => (
                            <option key={muscle} value={muscle}>{muscle}</option>
                          ))}
                        </select>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={workout.duration}
                            onChange={(e) => handleUpdateWorkout(editedSchedule.indexOf(workout), 'duration', e.target.value)}
                            className="bg-gray-600 rounded px-2 py-1 flex-1"
                            placeholder="Duration"
                          />
                          <select
                            value={workout.intensity}
                            onChange={(e) => handleUpdateWorkout(editedSchedule.indexOf(workout), 'intensity', e.target.value)}
                            className="bg-gray-600 rounded px-2 py-1"
                          >
                            <option value="Light">Light</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <Dumbbell className="w-4 h-4 text-blue-400" />
                          <span className="font-semibold">{workout.type}</span>
                        </div>
                        {workout.muscleGroups.length > 0 && (
                          <div className="text-sm text-gray-400 mt-1">
                            {workout.muscleGroups.join(' • ')}
                          </div>
                        )}
                        <div className="text-sm mt-2">
                          <span className="font-medium">{workout.duration}</span>
                          <span className={`ml-2 ${
                            workout.intensity === 'High' ? 'text-red-400' :
                            workout.intensity === 'Moderate' ? 'text-yellow-400' :
                            'text-green-400'
                          }`}>
                            {workout.intensity} Intensity
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {isEditing && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          This Week's Schedule
        </h3>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setShowCalendar(true);
              setIsEditing(false);
            }}
            className="text-blue-400 hover:text-gray-500 text-sm flex items-center gap-1 bg-transparent hover:bg-transparent"
          >
            <CalendarIcon className="w-4 h-4" /> View Full Calendar
          </button>
          <button
            onClick={() => {
              setShowCalendar(true);
              setIsEditing(true);
            }}
            className="text-blue-400 hover:text-gray-500 text-sm flex items-center gap-1 bg-transparent hover:bg-transparent"
          >
            <Edit2 className="w-4 h-4" /> Edit Schedule
          </button>
        </div>
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

      {showCalendar && <CalendarView />}
    </div>
  );
};

export default WorkoutSchedule;