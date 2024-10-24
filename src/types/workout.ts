export type Exercise = {
    name: string;
    sets?: string;
    reps?: string;
    duration?: string;
    notes?: string;
  };
  
  export type WorkoutDay = {
    name: string;
    exercises: Exercise[];
  };
  
  export type WorkoutSplit = {
    id: string;
    name: string;
    description: string;
    daysPerWeek: number;
    schedule: string[];
    icon: string;
    suitable: string[];
    workoutDays: {
      main: WorkoutDay[];
      supplementary: {
        core: Exercise[];
        hiit: Exercise[];
        cardio: Exercise[];
      };
    };
  };