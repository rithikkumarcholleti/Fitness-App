import React, { useState } from 'react';
import ExerciseCard from '../components/exercises/ExerciseCard';
import ExerciseFilters from '../components/exercises/ExerciseFilters';
import WorkoutSplitSelector from '../components/workouts/WorkoutSplitSelector';
import { exercises } from '../data/exercises';

const ExerciseDatabase: React.FC = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('');
  const [selectedSplit, setSelectedSplit] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredExercises = exercises.filter(exercise => 
    (!selectedMuscleGroup || exercise.muscleGroup === selectedMuscleGroup) &&
    (!selectedEquipment || exercise.equipment === selectedEquipment) &&
    (!selectedSplit || exercise.split.includes(selectedSplit)) &&
    (!selectedDifficulty || exercise.difficulty === selectedDifficulty) &&
    (!searchTerm || exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.muscleGroup.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Exercise Database</h2>
      
      <WorkoutSplitSelector />
      
      <ExerciseFilters
        selectedMuscleGroup={selectedMuscleGroup}
        setSelectedMuscleGroup={setSelectedMuscleGroup}
        selectedEquipment={selectedEquipment}
        setSelectedEquipment={setSelectedEquipment}
        selectedSplit={selectedSplit}
        setSelectedSplit={setSelectedSplit}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map(exercise => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseDatabase;