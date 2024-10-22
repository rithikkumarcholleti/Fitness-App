import React, { useState } from 'react';

type Exercise = {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
  description: string;
  imageUrl: string;
};

const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Barbell Bench Press',
    muscleGroup: 'Chest',
    equipment: 'Barbell',
    description: 'A compound exercise that targets the chest, shoulders, and triceps.',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    name: 'Squat',
    muscleGroup: 'Legs',
    equipment: 'Barbell',
    description: 'A compound lower body exercise that primarily targets the quadriceps, hamstrings, and glutes.',
    imageUrl: 'https://images.unsplash.com/photo-1534368420009-621bfab424a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    name: 'Pull-up',
    muscleGroup: 'Back',
    equipment: 'Body weight',
    description: 'An upper body compound movement that primarily targets the back and biceps.',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-a4a113b13855?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  },
];

const ExerciseDatabase: React.FC = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('');

  const filteredExercises = exercises.filter(exercise => 
    (!selectedMuscleGroup || exercise.muscleGroup === selectedMuscleGroup) &&
    (!selectedEquipment || exercise.equipment === selectedEquipment)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Exercise Database</h2>
      <div className="mb-4 flex space-x-4">
        <select
          value={selectedMuscleGroup}
          onChange={(e) => setSelectedMuscleGroup(e.target.value)}
          className="border rounded-md px-2 py-1"
        >
          <option value="">All Muscle Groups</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Arms">Arms</option>
        </select>
        <select
          value={selectedEquipment}
          onChange={(e) => setSelectedEquipment(e.target.value)}
          className="border rounded-md px-2 py-1"
        >
          <option value="">All Equipment</option>
          <option value="Barbell">Barbell</option>
          <option value="Dumbbell">Dumbbell</option>
          <option value="Machine">Machine</option>
          <option value="Body weight">Body weight</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={exercise.imageUrl} alt={exercise.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
              <p><strong>Muscle Group:</strong> {exercise.muscleGroup}</p>
              <p><strong>Equipment:</strong> {exercise.equipment}</p>
              <p className="mt-2">{exercise.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseDatabase;