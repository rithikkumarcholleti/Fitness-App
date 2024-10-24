import React from 'react';
import { Search } from 'lucide-react';

interface ExerciseFiltersProps {
  selectedMuscleGroup: string;
  setSelectedMuscleGroup: (value: string) => void;
  selectedEquipment: string;
  setSelectedEquipment: (value: string) => void;
  selectedSplit: string;
  setSelectedSplit: (value: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const ExerciseFilters: React.FC<ExerciseFiltersProps> = ({
  selectedMuscleGroup,
  setSelectedMuscleGroup,
  selectedEquipment,
  setSelectedEquipment,
  selectedSplit,
  setSelectedSplit,
  selectedDifficulty,
  setSelectedDifficulty,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          value={selectedMuscleGroup}
          onChange={(e) => setSelectedMuscleGroup(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">All Muscle Groups</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Arms">Arms</option>
          <option value="Core">Core</option>
        </select>

        <select
          value={selectedEquipment}
          onChange={(e) => setSelectedEquipment(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">All Equipment</option>
          <option value="Barbell">Barbell</option>
          <option value="Dumbbells">Dumbbells</option>
          <option value="Machine">Machine</option>
          <option value="Bodyweight">Bodyweight</option>
          <option value="Cables">Cables</option>
          <option value="Kettlebell">Kettlebell</option>
        </select>

        <select
          value={selectedSplit}
          onChange={(e) => setSelectedSplit(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">All Splits</option>
          <option value="Push">Push</option>
          <option value="Pull">Pull</option>
          <option value="Legs">Legs</option>
          <option value="Upper">Upper</option>
          <option value="Lower">Lower</option>
          <option value="Full Body">Full Body</option>
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">All Difficulties</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
};

export default ExerciseFilters;