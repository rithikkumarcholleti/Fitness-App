import React from 'react';
import { Exercise } from '../../types/exercise';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <div className="bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={exercise.imageUrl} 
        alt={exercise.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{exercise.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${
            exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {exercise.difficulty}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <p><strong>Muscle Group:</strong> {exercise.muscleGroup}</p>
          <p><strong>Equipment:</strong> {exercise.equipment}</p>
          <p><strong>Split Options:</strong> {exercise.split.join(', ')}</p>
        </div>
        
        <p className="mb-4">{exercise.description}</p>
        
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold mb-2">Target Muscles</summary>
          <ul className="list-disc list-inside pl-4">
            {exercise.targetMuscles.map((muscle, idx) => (
              <li key={idx}>{muscle}</li>
            ))}
          </ul>
        </details>
        
        <details>
          <summary className="cursor-pointer font-semibold mb-2">Instructions</summary>
          <ol className="list-decimal list-inside pl-4">
            {exercise.instructions.map((instruction, idx) => (
              <li key={idx} className="mb-1">{instruction}</li>
            ))}
          </ol>
        </details>
      </div>
    </div>
  );
};

export default ExerciseCard;