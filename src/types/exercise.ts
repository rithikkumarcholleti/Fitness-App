export type Exercise = {
    id: number;
    name: string;
    muscleGroup: string;
    equipment: string;
    description: string;
    split: string[];
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    imageUrl: string;
    targetMuscles: string[];
    instructions: string[];
  };