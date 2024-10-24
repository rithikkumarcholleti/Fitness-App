import { Exercise } from '../types/exercise';

export const exercises: Exercise[] = [
  // Chest Exercises
  {
    id: 1,
    name: 'Barbell Bench Press',
    muscleGroup: 'Chest',
    equipment: 'Barbell',
    description: 'The king of chest exercises, targeting the entire pectoral region.',
    split: ['Push', 'Chest Day', 'Upper'],
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3',
    targetMuscles: ['Upper Chest', 'Middle Chest', 'Front Deltoids', 'Triceps'],
    instructions: [
      'Lie on bench with feet flat on ground',
      'Grip barbell slightly wider than shoulder width',
      'Lower bar to chest with control',
      'Press back up to starting position'
    ]
  },
  {
    id: 2,
    name: 'Incline Dumbbell Press',
    muscleGroup: 'Chest',
    equipment: 'Dumbbells',
    description: 'Targets the upper chest region with better range of motion.',
    split: ['Push', 'Chest Day', 'Upper'],
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3',
    targetMuscles: ['Upper Chest', 'Front Deltoids', 'Triceps'],
    instructions: [
      'Set bench to 30-45 degree angle',
      'Hold dumbbells at shoulder level',
      'Press weights up and slightly inward',
      'Lower with control to starting position'
    ]
  },
  {
    id: 3,
    name: 'Cable Flyes',
    muscleGroup: 'Chest',
    equipment: 'Cables',
    description: 'Isolation exercise for chest development with constant tension.',
    split: ['Push', 'Chest Day', 'Upper'],
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?ixlib=rb-4.0.3',
    targetMuscles: ['Inner Chest', 'Outer Chest'],
    instructions: [
      'Stand between cable machines',
      'Grip handles with slight bend in elbows',
      'Bring hands together in hugging motion',
      'Control the return to starting position'
    ]
  },
  // Back Exercises
  {
    id: 4,
    name: 'Barbell Deadlift',
    muscleGroup: 'Back',
    equipment: 'Barbell',
    description: 'A compound movement targeting the entire posterior chain.',
    split: ['Pull', 'Back Day', 'Lower'],
    difficulty: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3',
    targetMuscles: ['Lower Back', 'Lats', 'Traps', 'Hamstrings', 'Glutes'],
    instructions: [
      'Stand with feet shoulder-width apart',
      'Bend at hips and knees to grip bar',
      'Keep back straight and chest up',
      'Pull bar up while extending hips and knees'
    ]
  },
  {
    id: 5,
    name: 'Pull-ups',
    muscleGroup: 'Back',
    equipment: 'Bodyweight',
    description: 'Fundamental back exercise for overall upper body strength.',
    split: ['Pull', 'Back Day', 'Upper'],
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-a4a113b13855?ixlib=rb-4.0.3',
    targetMuscles: ['Lats', 'Rhomboids', 'Biceps', 'Rear Deltoids'],
    instructions: [
      'Grip pull-up bar slightly wider than shoulders',
      'Hang with arms fully extended',
      'Pull yourself up until chin over bar',
      'Lower with control'
    ]
  },
  // Legs Exercises
  {
    id: 6,
    name: 'Bulgarian Split Squats',
    muscleGroup: 'Legs',
    equipment: 'Dumbbells',
    description: 'Unilateral leg exercise for strength and balance.',
    split: ['Legs', 'Lower'],
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1534368420009-621bfab424a8?ixlib=rb-4.0.3',
    targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core'],
    instructions: [
      'Place rear foot on elevated surface',
      'Stand on working leg about 2 feet from bench',
      'Lower until back knee nearly touches ground',
      'Push through front foot to return to start'
    ]
  },
  // Shoulders Exercises
  {
    id: 7,
    name: 'Lateral Raises',
    muscleGroup: 'Shoulders',
    equipment: 'Dumbbells',
    description: 'Isolation exercise for lateral deltoid development.',
    split: ['Push', 'Shoulder Day', 'Upper'],
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3',
    targetMuscles: ['Lateral Deltoids', 'Traps'],
    instructions: [
      'Stand with dumbbells at sides',
      'Raise arms out to sides until parallel with ground',
      'Maintain slight bend in elbows',
      'Lower with control'
    ]
  },
  // Arms Exercises
  {
    id: 8,
    name: 'Diamond Push-ups',
    muscleGroup: 'Arms',
    equipment: 'Bodyweight',
    description: 'Challenging triceps-focused push-up variation.',
    split: ['Push', 'Arms Day', 'Upper'],
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3',
    targetMuscles: ['Triceps', 'Chest', 'Front Deltoids'],
    instructions: [
      'Form diamond shape with hands under chest',
      'Keep elbows close to body',
      'Lower chest to hands',
      'Push back up to start'
    ]
  },
  // Core Exercises
  {
    id: 9,
    name: 'Hanging Leg Raises',
    muscleGroup: 'Core',
    equipment: 'Bodyweight',
    description: 'Advanced core exercise for lower abs development.',
    split: ['Full Body', 'Core'],
    difficulty: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3',
    targetMuscles: ['Lower Abs', 'Hip Flexors', 'Obliques'],
    instructions: [
      'Hang from pull-up bar with straight arms',
      'Keep legs straight and raise to parallel',
      'Control the lowering phase',
      'Avoid swinging'
    ]
  }
];