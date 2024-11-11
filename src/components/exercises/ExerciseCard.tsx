import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Exercise } from '../../types/exercise';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [showDemo, setShowDemo] = useState(false);

  if (!exercise) {
    return null;
  }

  return (
    <div className="bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={exercise.imageUrl} 
          alt={exercise.name} 
          className="w-full h-64 object-cover"
        />
        <button
          onClick={() => setShowDemo(true)}
          className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          View Exercise
        </button>
      </div>

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
          <p><strong>Split Options:</strong> {Array.isArray(exercise.split) ? exercise.split.join(', ') : 'Not specified'}</p>
        </div>
        
        <p className="mb-4">{exercise.description}</p>
        
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold mb-2">Target Muscles</summary>
          <ul className="list-disc list-inside pl-4">
            {Array.isArray(exercise.targetMuscles) && exercise.targetMuscles.map((muscle, idx) => (
              <li key={idx}>{muscle}</li>
            ))}
          </ul>
        </details>
        
        <details>
          <summary className="cursor-pointer font-semibold mb-2">Instructions</summary>
          <ol className="list-decimal list-inside pl-4">
            {Array.isArray(exercise.instructions) && exercise.instructions.map((instruction, idx) => (
              <li key={idx} className="mb-1">{instruction}</li>
            ))}
          </ol>
        </details>
      </div>

      {showDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-dark-surface rounded-lg p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-2 right-2 p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-4">{exercise.name} Demonstration</h3>
            <div className="relative pt-[56.25%]">
              <img
                src={exercise.demoGif}
                alt={`${exercise.name} demonstration`}
                className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Key Points:</h4>
              <ul className="list-disc list-inside space-y-1">
                {Array.isArray(exercise.keyPoints) && exercise.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;