import React, { useState } from 'react';

type WorkoutPlan = {
  id: number;
  name: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'Push-Pull-Legs' | 'Chest-Triceps, Back-Biceps, Shoulder-Legs' | 'One Muscle Per Day';
};

const workoutPlans: WorkoutPlan[] = [
  {
    id: 1,
    name: 'Beginner Push-Pull-Legs',
    description: 'A simple 3-day split for beginners focusing on basic compound movements.',
    level: 'Beginner',
    type: 'Push-Pull-Legs',
  },
  {
    id: 2,
    name: 'Intermediate Full Body Split',
    description: 'A 4-day split targeting all major muscle groups with increased volume.',
    level: 'Intermediate',
    type: 'Chest-Triceps, Back-Biceps, Shoulder-Legs',
  },
  {
    id: 3,
    name: 'Advanced Bodybuilder Split',
    description: 'A 6-day split focusing on individual muscle groups for maximum hypertrophy.',
    level: 'Advanced',
    type: 'One Muscle Per Day',
  },
];

const WorkoutPlans: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  const filteredPlans = workoutPlans.filter(plan => 
    (!selectedLevel || plan.level === selectedLevel) &&
    (!selectedType || plan.type === selectedType)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Workout Plans</h2>
      <div className="mb-4 flex space-x-4">
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="border rounded-md px-2 py-1"
        >
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border rounded-md px-2 py-1"
        >
          <option value="">All Types</option>
          <option value="Push-Pull-Legs">Push-Pull-Legs</option>
          <option value="Chest-Triceps, Back-Biceps, Shoulder-Legs">Chest-Triceps, Back-Biceps, Shoulder-Legs</option>
          <option value="One Muscle Per Day">One Muscle Per Day</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlans.map(plan => (
          <div key={plan.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-2">{plan.description}</p>
            <p><strong>Level:</strong> {plan.level}</p>
            <p><strong>Type:</strong> {plan.type}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;