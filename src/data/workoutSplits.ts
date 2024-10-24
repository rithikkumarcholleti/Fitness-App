import { WorkoutSplit } from '../types/workout';

export const workoutSplits: WorkoutSplit[] = [
  {
    id: 'ppl',
    name: 'Push/Pull/Legs',
    description: 'Classic 6-day split focusing on pushing movements, pulling movements, and legs separately.',
    daysPerWeek: 6,
    schedule: [
      'Day 1: Push (Chest, Shoulders, Triceps)',
      'Day 2: Pull (Back, Biceps)',
      'Day 3: Legs',
      'Day 4: Push',
      'Day 5: Pull',
      'Day 6: Legs',
      'Day 7: Rest'
    ],
    icon: 'activity',
    suitable: ['Intermediate', 'Advanced'],
    workoutDays: {
      main: [
        {
          name: 'Push Day',
          exercises: [
            { name: 'Bench Press', sets: '4', reps: '8-12' },
            { name: 'Overhead Shoulder Press', sets: '4', reps: '8-12' },
            { name: 'Tricep Dips', sets: '3', reps: '10-15' },
            { name: 'Dumbbell Flyes', sets: '3', reps: '12-15' },
            { name: 'Push-ups', sets: '3', reps: 'To failure' }
          ]
        },
        {
          name: 'Pull Day',
          exercises: [
            { name: 'Deadlifts', sets: '4', reps: '6-8' },
            { name: 'Pull-ups', sets: '4', reps: '8-12' },
            { name: 'Barbell Row', sets: '3', reps: '8-12' },
            { name: 'Bicep Curls', sets: '3', reps: '12-15' },
            { name: 'Face Pulls', sets: '3', reps: '15-20' }
          ]
        },
        {
          name: 'Leg Day',
          exercises: [
            { name: 'Squats', sets: '4', reps: '8-12' },
            { name: 'Lunges', sets: '3', reps: '12 each leg' },
            { name: 'Romanian Deadlifts', sets: '3', reps: '10-12' },
            { name: 'Leg Press', sets: '3', reps: '12-15' },
            { name: 'Calf Raises', sets: '4', reps: '15-20' }
          ]
        }
      ],
      supplementary: {
        core: [
          { name: 'Planks', duration: '3 x 45 seconds' },
          { name: 'Russian Twists', sets: '3', reps: '20 each side' },
          { name: 'Bicycle Crunches', sets: '3', reps: '20 each side' },
          { name: 'Leg Raises', sets: '3', reps: '15' },
          { name: 'Mountain Climbers', duration: '3 x 30 seconds' }
        ],
        hiit: [
          { name: 'Burpees', duration: '30 seconds' },
          { name: 'Jump Squats', duration: '30 seconds' },
          { name: 'High Knees', duration: '30 seconds' },
          { name: 'Push-up to Tuck Jump', duration: '30 seconds' },
          { name: 'Jumping Lunges', duration: '30 seconds' }
        ],
        cardio: [
          { name: 'Running', duration: '30 minutes', notes: 'Moderate pace' },
          { name: 'Cycling', duration: '20 minutes', notes: 'High intensity' },
          { name: 'Jump Rope', duration: '10 minutes', notes: 'Intervals' },
          { name: 'Rowing Machine', duration: '15 minutes', notes: 'Steady state' },
          { name: 'Stair Climber', duration: '20 minutes', notes: 'Moderate pace' }
        ]
      }
    }
  },
  {
    id: 'bro-split',
    name: 'Bro Split',
    description: 'Traditional 5-day split targeting one major muscle group per day for maximum volume and recovery.',
    daysPerWeek: 5,
    schedule: [
      'Day 1: Chest',
      'Day 2: Back',
      'Day 3: Legs',
      'Day 4: Shoulders',
      'Day 5: Arms',
      'Day 6: Rest',
      'Day 7: Rest'
    ],
    icon: 'users',
    suitable: ['Intermediate', 'Advanced'],
    workoutDays: {
      main: [
        {
          name: 'Chest Day',
          exercises: [
            { name: 'Flat Bench Press', sets: '4', reps: '8-12' },
            { name: 'Incline Dumbbell Press', sets: '4', reps: '8-12' },
            { name: 'Decline Bench Press', sets: '3', reps: '10-12' },
            { name: 'Cable Flyes', sets: '3', reps: '12-15' },
            { name: 'Push-ups', sets: '3', reps: 'To failure' }
          ]
        },
        {
          name: 'Back Day',
          exercises: [
            { name: 'Deadlifts', sets: '4', reps: '6-8' },
            { name: 'Weighted Pull-ups', sets: '4', reps: '8-12' },
            { name: 'Barbell Rows', sets: '3', reps: '8-12' },
            { name: 'Lat Pulldowns', sets: '3', reps: '12-15' },
            { name: 'Cable Rows', sets: '3', reps: '12-15' }
          ]
        },
        {
          name: 'Leg Day',
          exercises: [
            { name: 'Back Squats', sets: '4', reps: '8-12' },
            { name: 'Romanian Deadlifts', sets: '4', reps: '8-12' },
            { name: 'Leg Press', sets: '3', reps: '12-15' },
            { name: 'Walking Lunges', sets: '3', reps: '12 each leg' },
            { name: 'Standing Calf Raises', sets: '4', reps: '15-20' }
          ]
        },
        {
          name: 'Shoulder Day',
          exercises: [
            { name: 'Military Press', sets: '4', reps: '8-12' },
            { name: 'Lateral Raises', sets: '4', reps: '12-15' },
            { name: 'Front Raises', sets: '3', reps: '12-15' },
            { name: 'Reverse Flyes', sets: '3', reps: '12-15' },
            { name: 'Shrugs', sets: '3', reps: '15-20' }
          ]
        },
        {
          name: 'Arms Day',
          exercises: [
            { name: 'Barbell Curls', sets: '4', reps: '8-12' },
            { name: 'Skull Crushers', sets: '4', reps: '8-12' },
            { name: 'Hammer Curls', sets: '3', reps: '12-15' },
            { name: 'Tricep Pushdowns', sets: '3', reps: '12-15' },
            { name: 'Preacher Curls', sets: '3', reps: '12-15' }
          ]
        }
      ],
      supplementary: {
        core: [
          { name: 'Weighted Planks', duration: '3 x 45 seconds' },
          { name: 'Cable Crunches', sets: '3', reps: '15-20' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12-15' },
          { name: 'Ab Wheel Rollouts', sets: '3', reps: '10-12' },
          { name: 'Side Planks', duration: '3 x 30 seconds each side' }
        ],
        hiit: [
          { name: 'Battle Ropes', duration: '30 seconds' },
          { name: 'Box Jumps', duration: '30 seconds' },
          { name: 'Kettlebell Swings', duration: '30 seconds' },
          { name: 'Medicine Ball Slams', duration: '30 seconds' },
          { name: 'Burpee Pull-ups', duration: '30 seconds' }
        ],
        cardio: [
          { name: 'Sprinting', duration: '20 minutes', notes: 'HIIT intervals' },
          { name: 'Cycling', duration: '30 minutes', notes: 'High resistance' },
          { name: 'Swimming', duration: '30 minutes', notes: 'Mixed strokes' },
          { name: 'Jump Rope', duration: '15 minutes', notes: 'Double unders' },
          { name: 'Rowing', duration: '20 minutes', notes: 'Tabata intervals' }
        ]
      }
    }
  },
  {
    id: 'single-muscle',
    name: 'Each Exercise a Day',
    description: 'Advanced 6-day split with dedicated focus on individual muscle groups for maximum specialization.',
    daysPerWeek: 6,
    schedule: [
      'Day 1: Chest',
      'Day 2: Back',
      'Day 3: Legs',
      'Day 4: Shoulders',
      'Day 5: Arms',
      'Day 6: Core & Cardio',
      'Day 7: Rest'
    ],
    icon: 'calendar',
    suitable: ['Advanced'],
    workoutDays: {
      main: [
        {
          name: 'Chest Focus',
          exercises: [
            { name: 'Flat Bench Press', sets: '5', reps: '6-8' },
            { name: 'Incline Smith Machine Press', sets: '4', reps: '8-10' },
            { name: 'Decline Dumbbell Press', sets: '4', reps: '8-12' },
            { name: 'Pec Deck Flyes', sets: '3', reps: '12-15' },
            { name: 'Weighted Dips', sets: '3', reps: '10-12' }
          ]
        },
        {
          name: 'Back Focus',
          exercises: [
            { name: 'Barbell Deadlifts', sets: '5', reps: '5-8' },
            { name: 'Weighted Pull-ups', sets: '4', reps: '6-10' },
            { name: 'T-Bar Rows', sets: '4', reps: '8-12' },
            { name: 'Meadows Rows', sets: '3', reps: '10-12' },
            { name: 'Straight Arm Pulldowns', sets: '3', reps: '12-15' }
          ]
        },
        {
          name: 'Legs Focus',
          exercises: [
            { name: 'Front Squats', sets: '5', reps: '6-8' },
            { name: 'Bulgarian Split Squats', sets: '4', reps: '8-12 each' },
            { name: 'Hack Squats', sets: '4', reps: '8-12' },
            { name: 'Glute-Ham Raises', sets: '3', reps: '12-15' },
            { name: 'Seated Calf Raises', sets: '4', reps: '15-20' }
          ]
        },
        {
          name: 'Shoulders Focus',
          exercises: [
            { name: 'Seated Military Press', sets: '5', reps: '6-8' },
            { name: 'Viking Press', sets: '4', reps: '8-12' },
            { name: 'Cable Lateral Raises', sets: '4', reps: '12-15' },
            { name: 'Reverse Pec Deck', sets: '3', reps: '12-15' },
            { name: 'Face Pulls', sets: '3', reps: '15-20' }
          ]
        },
        {
          name: 'Arms Focus',
          exercises: [
            { name: 'EZ Bar Curls', sets: '4', reps: '8-12' },
            { name: 'Close Grip Bench', sets: '4', reps: '8-12' },
            { name: 'Incline Dumbbell Curls', sets: '3', reps: '12-15' },
            { name: 'Overhead Tricep Extensions', sets: '3', reps: '12-15' },
            { name: 'Cable Concentration Curls', sets: '3', reps: '12-15' }
          ]
        }
      ],
      supplementary: {
        core: [
          { name: 'Dragon Flags', sets: '3', reps: '8-12' },
          { name: 'Weighted Decline Crunches', sets: '3', reps: '12-15' },
          { name: 'Cable Woodchoppers', sets: '3', reps: '15 each side' },
          { name: 'Hanging Windshield Wipers', sets: '3', reps: '10-12' },
          { name: 'Copenhagen Planks', duration: '3 x 30 seconds each side' }
        ],
        hiit: [
          { name: 'Assault Bike', duration: '30 seconds max effort' },
          { name: 'Sled Push/Pull', duration: '30 seconds each' },
          { name: 'Wall Balls', duration: '30 seconds' },
          { name: 'Rower Sprints', duration: '30 seconds' },
          { name: 'Ski Erg', duration: '30 seconds' }
        ],
        cardio: [
          { name: 'Hill Sprints', duration: '20 minutes', notes: '30s sprint/30s walk' },
          { name: 'StairMaster', duration: '25 minutes', notes: 'High intensity' },
          { name: 'Boxing', duration: '30 minutes', notes: 'Heavy bag work' },
          { name: 'Swimming', duration: '30 minutes', notes: 'Sprint intervals' },
          { name: 'Plyometric Circuit', duration: '15 minutes', notes: 'Max effort' }
        ]
      }
    }
  }
];

// Helper function to get workout split by ID
export const getWorkoutSplitById = (id: string): WorkoutSplit | undefined => {
  return workoutSplits.find(split => split.id === id);
};