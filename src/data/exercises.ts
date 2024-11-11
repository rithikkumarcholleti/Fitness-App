import { Exercise } from '../types/exercise';

export const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Flat Bench Press',
    muscleGroup: 'Chest',
    equipment: 'Barbell',
    description: 'A classic exercise for targeting the chest muscles.',
    split: ['Push', 'Chest Day', 'Upper'],
    difficulty: 'Intermediate',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo-1200-80.jpg',
    demoGif: 'https://fitnessvolt.com/wp-content/uploads/2023/09/barbell-bench-press.gif',
    targetMuscles: ['Pectorals', 'Triceps', 'Shoulders'],
    instructions: [
      'Lie on bench with feet flat on floor',
      'Grip the barbell slightly wider than shoulder-width',
      'Lower bar to chest',
      'Press up until arms are straight'
    ],
    keyPoints: [
      'Keep feet flat and back slightly arched',
      'Engage core throughout the movement',
      'Do not lock elbows at the top'
    ]
  },
  {
    id: 4,
    name: 'Incline Dumbbell Press',
    muscleGroup: 'Chest',
    equipment: 'Dumbbell',
    description: 'Targets the upper chest by pressing at an incline.',
    split: ['Push', 'Chest Day', 'Upper'],
    difficulty: 'Intermediate',
    imageUrl: 'https://blogscdn.thehut.net/app/uploads/sites/419/2021/12/shutterstock_263444231-ft-min_1638521968-2_1639431722.jpeg',
    demoGif: 'https://burnfit.io/wp-content/uploads/2023/11/DB_INC_BP.gif',
    targetMuscles: ['Upper Pectorals', 'Triceps', 'Front Deltoids'],
    instructions: [
      'Lie back on an incline bench',
      'Hold dumbbells with arms straight above shoulders',
      'Lower dumbbells to chest level',
      'Press back up to starting position'
    ],
    keyPoints: [
      'Keep wrists straight and elbows slightly flared',
      'Engage core for stability',
      'Avoid bouncing dumbbells off chest'
    ]
  },
  {
    id: 7,
    name: 'Cable Flyes',
    muscleGroup: 'Chest',
    equipment: 'Cable',
    description: 'Isolation exercise focusing on chest contraction.',
    split: ['Push', 'Chest Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2018/04/23134449/cable-chest-fly-exercise-600-variation.png',
    demoGif: 'https://i.pinimg.com/originals/bd/d0/8c/bdd08cc009b9e4a4bc9c4d59ff686689.gif',
    targetMuscles: ['Pectorals'],
    instructions: [
      'Stand between cable machines with handles in each hand',
      'Bring arms together in front, slightly bent at elbows',
      'Return to starting position, maintaining control'
    ],
    keyPoints: [
      'Maintain slight bend in elbows',
      'Keep shoulders retracted',
      'Focus on squeezing chest at peak'
    ]
  },
  {
    id: 10,
    name: 'Decline Dumbbell Press',
    muscleGroup: 'Chest',
    equipment: 'Dumbbell',
    description: 'Targets lower portion of the chest.',
    split: ['Push', 'Chest Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://www.jefit.com/images/exercises/960_590/156.jpg',
    demoGif: 'https://i.pinimg.com/originals/b6/28/0f/b6280fbba2b4e7155a4a1901dfeebc9d.gif',
    targetMuscles: ['Lower Pectorals', 'Triceps'],
    instructions: [
      'Lie on decline bench with dumbbells in hand',
      'Lower dumbbells to chest',
      'Press back up until arms are straight'
    ],
    keyPoints: [
      'Maintain shoulder stability',
      'Focus on lowering the dumbbells with control',
      'Avoid locking elbows'
    ]
  },
  {
    id: 14,
    name: 'Push-ups',
    muscleGroup: 'Chest',
    equipment: 'Bodyweight',
    description: 'A bodyweight exercise that targets the chest and triceps.',
    split: ['Push', 'Chest Day'],
    difficulty: 'Beginner',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/43/46/08/360_F_343460855_D1NCqiRFaSD9WPIQLuyGeXRXIrnLGXTK.jpg',
    demoGif: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif',
    targetMuscles: ['Pectorals', 'Triceps', 'Shoulders'],
    instructions: [
      'Start in plank position',
      'Lower chest to the ground',
      'Push back up to starting position'
    ],
    keyPoints: [
      'Keep body in straight line',
      'Engage core',
      'Avoid flaring elbows outward'
    ]
  },
  {
    id: 18,
    name: 'Peck Deck Flyes',
    muscleGroup: 'Chest',
    equipment: 'Machine',
    description: 'Machine exercise focusing on the chest.',
    split: ['Push', 'Chest Day'],
    difficulty: 'Beginner',
    imageUrl: 'https://atlantisstrength.com/app/uploads/2023/02/pec-deck-1-1100x660.png',
    demoGif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif',
    targetMuscles: ['Pectorals'],
    instructions: [
      'Sit at peck deck machine and grasp handles',
      'Bring handles together in front of chest',
      'Return to starting position with control'
    ],
    keyPoints: [
      'Maintain slight bend in elbows',
      'Focus on chest squeeze',
      'Avoid using momentum'
    ]
  },

  // Shoulder Exercises
  {
    id: 21,
    name: 'Overhead Shoulder Press',
    muscleGroup: 'Shoulders',
    equipment: 'Barbell',
    description: 'Builds strength and size in the shoulders and triceps.',
    split: ['Push', 'Shoulder Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://ucarecdn.com/e2741385-3d52-4337-b7f7-8f16c1a6bfe8/-/format/auto/-/preview/3000x3000/-/quality/lighter/military-press-vs-%20overhead-press-torokhtiy.jpg',
    demoGif: 'https://fitnessprogramer.com/wp-content/uploads/2021/07/Barbell-Standing-Military-Press.gif',
    targetMuscles: ['Deltoids', 'Triceps'],
    instructions: [
      'Hold barbell at shoulder height',
      'Press bar up until arms are straight',
      'Lower back to shoulder height'
    ],
    keyPoints: [
      'Keep core tight and spine neutral',
      'Avoid excessive arch in lower back',
      'Control the weight during descent'
    ]
  },
  {
    id: 27,
    name: 'Lateral Raises',
    muscleGroup: 'Shoulders',
    equipment: 'Dumbbell',
    description: 'Isolates the lateral head of the shoulder.',
    split: ['Push', 'Shoulder Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://www.newbodyplan.co.uk/wp-content/uploads/2020/10/Screenshot-2020-10-22-at-16.26.49-768x421.png',
    demoGif: 'https://burnfit.io/wp-content/uploads/2023/11/DB_LAT_RAISE.gif',
    targetMuscles: ['Lateral Deltoid'],
    instructions: [
      'Stand with dumbbells in each hand',
      'Raise arms to sides until parallel to floor',
      'Lower back to starting position'
    ],
    keyPoints: [
      'Keep slight bend in elbows',
      'Avoid swinging weights',
      'Focus on controlled motion'
    ]
  },
  {
    id: 30,
    name: 'Arnold Press',
    muscleGroup: 'Shoulders',
    equipment: 'Dumbbell',
    description: 'Combines shoulder press and rotation for full shoulder engagement.',
    split: ['Push', 'Shoulder Day'],
    difficulty: 'Advanced',
    imageUrl: 'https://boxlifemagazine.com/wp-content/uploads/2023/07/arnold-press-1.png',
    demoGif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/arnold-presses.gif',
    targetMuscles: ['Front Deltoid', 'Lateral Deltoid', 'Triceps'],
    instructions: [
      'Start with palms facing shoulders',
      'Rotate wrists as you press up',
      'Lower back to starting position'
    ],
    keyPoints: [
      'Control the rotation of the wrists',
      'Avoid excessive sway',
      'Engage core for stability'
    ]
  },
  {
    id: 5,
    name: 'Upright Rows',
    muscleGroup: 'Shoulders',
    equipment: 'Barbell',
    description: 'Targets the traps and shoulders.',
    split: ['Push', 'Shoulder Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://app-media.fitbod.me/v2/428/images/landscape/0_960x540.jpg',
    demoGif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/barbell-upright-row-standing.gif',
    targetMuscles: ['Traps', 'Deltoids'],
    instructions: [
      'Hold barbell at hip level with palms facing body',
      'Lift bar to chest level by raising elbows',
      'Lower back to starting position'
    ],
    keyPoints: [
      'Keep elbows higher than wrists',
      'Avoid lifting bar too high',
      'Control the movement throughout'
    ]
  },
  {
    id: 9,
    name: 'Shrugs',
    muscleGroup: 'Shoulders',
    equipment: 'Dumbbell',
    description: 'Isolates the trapezius muscles.',
    split: ['Push', 'Shoulder Day'],
    difficulty: 'Beginner',
    imageUrl: 'https://app-media.fitbod.me/v2/40/images/landscape/0_960x540.jpg',
    demoGif: 'https://cdn.shopify.com/s/files/1/0547/0486/5477/files/dumbbell-shrug_480x480.gif?v=1701426774',
    targetMuscles: ['Traps'],
    instructions: [
      'Stand with dumbbells in each hand',
      'Lift shoulders towards ears',
      'Lower back to starting position'
    ],
    keyPoints: [
      'Avoid rolling shoulders',
      'Focus on straight upward motion',
      'Engage traps for full contraction'
    ]
  },
  {
    id: 12,
    name: 'Reverse Peck Deck',
    muscleGroup: 'Shoulders',
    equipment: 'Machine',
    description: 'Targets rear deltoids and upper back.',
    split: ['Pull', 'Shoulder Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://www.intowellness.in/wp-content/uploads/2019/12/Dec-Machine.jpg',
    demoGif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/reverse-pec-dec-machine.gif',
    targetMuscles: ['Rear Deltoids', 'Upper Back'],
    instructions: [
      'Sit at peck deck machine facing pads',
      'Grasp handles and pull back',
      'Return to starting position with control'
    ],
    keyPoints: [
      'Keep a slight bend in elbows',
      'Engage rear deltoids during pull',
      'Avoid using momentum'
    ]
  },
  {
    id: 2,
    name: 'Deadlifts',
    muscleGroup: 'Back',
    equipment: 'Barbell',
    description: 'A compound movement that targets the entire posterior chain.',
    split: ['Pull', 'Back Day', 'Lower'],
    difficulty: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1534368270820-9de3d8053204?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoGif: 'https://newlife.com.cy/wp-content/uploads/2018/12/22141301-Barbell-Deadlift-female_Hips_720-720x600.gif',
    targetMuscles: ['Lower Back', 'Glutes', 'Hamstrings'],
    instructions: [
      'Stand with feet hip-width apart',
      'Grip the bar with hands just outside knees',
      'Keep back straight and lift the bar by extending knees and hips',
    ],
    keyPoints: [
      'Keep the bar close to your body',
      'Drive through your heels',
      'Engage your core and keep spine neutral'
    ]
  },
  {
    id: 6,
    name: 'Seated Rows',
    muscleGroup: 'Back',
    equipment: 'Cable',
    description: 'An exercise focusing on the back muscles through a pulling motion.',
    split: ['Pull', 'Back Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://t4.ftcdn.net/jpg/04/27/97/65/360_F_427976553_WDdANdVpaRJMYoSCClbNDBTdJr3L3SvP.jpg',
    demoGif: 'https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif',
    targetMuscles: ['Lats', 'Rhomboids', 'Traps'],
    instructions: [
      'Sit at cable machine with feet on platform',
      'Pull handle to torso while keeping elbows close',
      'Slowly return to starting position'
    ],
    keyPoints: [
      'Avoid leaning forward too much',
      'Keep chest up and back straight',
      'Control the weight throughout the movement'
    ]
  },
  {
    id: 8,
    name: 'Lat PullDown',
    muscleGroup: 'Back',
    equipment: 'Cable',
    description: 'Targets the latissimus dorsi muscles through a downward pulling motion.',
    split: ['Pull', 'Back Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://www.attacktheback.com/wp-content/uploads/2018/04/LatPulldownExercise.jpg',
    demoGif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
    targetMuscles: ['Lats', 'Biceps', 'Rear Deltoids'],
    instructions: [
      'Grip the bar wider than shoulder-width',
      'Pull bar down to upper chest',
      'Slowly return to starting position'
    ],
    keyPoints: [
      'Avoid swinging',
      'Keep back straight and chest up',
      'Engage lats throughout the pull'
    ]
  },

  // Bicep Exercises
  {
    id: 3,
    name: 'Bicep Curls',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbell',
    description: 'An isolation exercise for the biceps.',
    split: ['Pull', 'Arm Day'],
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1598268030450-7a476f602bf6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljZXAlMjBjdXJsfGVufDB8fDB8fHww',
    demoGif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-bicep-curl.gif',
    targetMuscles: ['Biceps'],
    instructions: [
      'Hold dumbbells at your sides',
      'Curl the weights up to shoulder level',
      'Lower slowly to starting position'
    ],
    keyPoints: [
      'Keep elbows close to torso',
      'Avoid swinging',
      'Control the weight on the way down'
    ]
  },
  {
    id: 11,
    name: 'Hammer Curls',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbell',
    description: 'Targets both the biceps and brachialis muscles.',
    split: ['Pull', 'Arm Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hammer-curls-1581441441.jpg?resize=980:*',
    demoGif: 'https://i.pinimg.com/originals/45/38/18/453818257067e0df3ee77eb9d184f015.gif',
    targetMuscles: ['Biceps', 'Forearms'],
    instructions: [
      'Hold dumbbells with palms facing each other',
      'Curl weights up to shoulder level',
      'Lower to starting position with control'
    ],
    keyPoints: [
      'Avoid swinging',
      'Engage core for stability',
      'Keep elbows at your sides'
    ]
  },
  {
    id: 13,
    name: 'Preacher Curls',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbells',
    description: 'An effective variation of bicep curls that targets the brachialis and forearms.',
    split: ['Pull', 'Arm Day'],
    difficulty: 'Beginner',
    imageUrl: 'https://mirafit.co.uk/wp/wp-content/uploads/2022/09/Eccentric-Overload-on-Mirafit-M3-Preacher-Curl-Bench-1024x683.jpg', 
    demoGif: 'https://trainrightmuscle.com/wp-content/uploads/2022/01/preacher-curls-img.gif',  
    targetMuscles: ['Biceps', 'Forearms', 'Brachialis'],
    instructions: [
      'Adjust seat so arms rest comfortably on the pad; grip shoulder-width with an underhand grip, keeping upper arms pressed against the pad.',
      'Curl weight slowly, squeeze biceps at the top, then control the descent, fully extending arms to maintain tension.',
      'Avoid using momentum or lifting elbows; perform full reps with moderate weight to focus on bicep isolation and control.'
    ],
    keyPoints: [
      'Maintain a neutral grip (palms facing each other) throughout the movement',
      'Avoid swinging or using momentum',
      'Focus on contracting your biceps and forearms'
    ]
  },

  // Tricep Exercises
  {
    id: 15,
    name: 'Overhead Tricep Extensions',
    muscleGroup: 'Triceps',
    equipment: 'Dumbbell',
    description: 'Targets the triceps by extending the arms overhead.',
    split: ['Push', 'Arm Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2018/04/02113852/overhead-triceps-extension-960.png',
    demoGif: 'https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif',
    targetMuscles: ['Triceps'],
    instructions: [
      'Hold dumbbell overhead with both hands',
      'Lower dumbbell behind head',
      'Extend arms back to starting position'
    ],
    keyPoints: [
      'Keep elbows close to head',
      'Avoid arching lower back',
      'Engage core throughout'
    ]
  },
  {
    id: 19,
    name: 'Rope Pushdowns',
    muscleGroup: 'Triceps',
    equipment: 'Cable',
    description: 'Isolates the triceps through a pushdown motion.',
    split: ['Push', 'Arm Day'],
    difficulty: 'Beginner',
    imageUrl: 'https://t4.ftcdn.net/jpg/02/80/96/09/360_F_280960931_nObdxEXR5av6J33ZliqDArVOcRq2mnrP.jpg',
    demoGif: 'https://sporium.net/wp-content/uploads/2022/03/rope-pushdown.gif',
    targetMuscles: ['Triceps'],
    instructions: [
      'Hold rope with palms facing inward',
      'Push rope down until arms are straight',
      'Return to starting position'
    ],
    keyPoints: [
      'Keep elbows close to body',
      'Avoid swinging',
      'Fully extend arms at bottom'
    ]
  },
  {
    id: 28,
    name: 'Skull Crushers',
    muscleGroup: 'Triceps',
    equipment: 'Barbell or EZ Curl Bar',
    description: 'An isolation exercise that specifically targets the triceps, especially the long head.',
    split: ['Push', 'Arm Day', 'Triceps Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1876/4703/files/Skull_Crushers_600x600.jpg?v=1639687403',  
    demoGif: 'https://svc.heygainz.com/storage/exercises/39/006012-barbell-lying-triceps-extension-skull-crusher.gif', 
    targetMuscles: ['Triceps'],
    instructions: [
      'Lie on a flat bench with a barbell or EZ curl bar held directly above your chest, arms fully extended',
      'Slowly lower the bar towards your forehead by bending at the elbows',
      'Keep your upper arms stationary, focusing on the movement in your forearms',
      'Extend your arms to lift the bar back up to the starting position, fully engaging your triceps'
    ],
    keyPoints: [
      'Keep elbows stationary to focus on the triceps',
      'Lower the weight slowly to avoid strain on the elbows',
      'Avoid flaring the elbows outward; keep them close to the body'
    ]
  },

  // Leg Exercises
  {
    id: 20,
    name: 'Squats',
    muscleGroup: 'Legs',
    equipment: 'Barbell',
    description: 'A full-body exercise that targets the legs and core.',
    split: ['Leg Day', 'Lower'],
    difficulty: 'Intermediate',
    imageUrl: 'https://www.musclearmory.com/wp-content/uploads/2020/11/what-muscles-do-squats-work-2048x1365.jpg',
    demoGif: 'https://gogain.me/wp-content/uploads/workouts/barbell_squats.gif',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings', 'Core'],
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower body by bending knees and hips',
      'Push through heels to return to standing'
    ],
    keyPoints: [
      'Keep back straight',
      'Engage core for stability',
      'Avoid letting knees collapse inward'
    ]
  },
  {
    id: 26,
    name: 'Lunges',
    muscleGroup: 'Legs',
    equipment: 'Bodyweight or Dumbbell',
    description: 'Targets the lower body and improves balance.',
    split: ['Leg Day', 'Lower'],
    difficulty: 'Beginner',
    imageUrl: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/4581/Male/l/4581_2.jpg',
    demoGif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-afundo-com-halteres.gif',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings'],
    instructions: [
      'Step forward with one leg and lower body',
      'Push through front heel to return to starting position',
      'Repeat on the other leg'
    ],
    keyPoints: [
      'Keep torso upright',
      'Avoid letting front knee go past toes',
      'Engage core for balance'
    ]
  },
  {
    id: 16,
    name: 'Leg Press',
    muscleGroup: 'Legs',
    equipment: 'Machine',
    description: 'Targets the lower body using a machine for stability.',
    split: ['Leg Day', 'Lower'],
    difficulty: 'Intermediate',
    imageUrl: 'https://fitnessvolt.com/wp-content/uploads/2023/04/leg-press-variations.jpg',
    demoGif: 'https://www.bosshunting.com.au/wp-content/uploads/2022/09/Leg-Press.gif',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings'],
    instructions: [
      'Sit on leg press machine with feet shoulder-width apart',
      'Push platform away until legs are almost straight',
      'Slowly return to starting position'
    ],
    keyPoints: [
      'Keep back flat against the seat',
      'Avoid locking knees',
      'Control weight on the way down'
    ]
  },
  {
    id: 25,
    name: 'Calf Raises',
    muscleGroup: 'Legs',
    equipment: 'Bodyweight or Machine',
    description: 'Isolates the calf muscles.',
    split: ['Leg Day'],
    difficulty: 'Beginner',
    imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1iPVV0.img?w=1200&h=600&m=4&q=79',
    demoGif: 'https://burnfit.io/wp-content/uploads/2023/11/BB_STD_CALF_RAISE.gif',
    targetMuscles: ['Calves'],
    instructions: [
      'Stand with feet shoulder-width apart',
      'Raise heels to stand on toes',
      'Slowly lower back to starting position'
    ],
    keyPoints: [
      'Focus on slow, controlled movement',
      'Engage calves at the top',
      'Avoid bouncing'
    ]
  },
  // Leg Curls
{
  id: 29,
  name: 'Leg Curls',
  muscleGroup: 'Legs',
  equipment: 'Leg Curl Machine',
  description: 'An isolation exercise that targets the hamstrings, helping build strength and muscle in the back of the thigh.',
  split: ['Leg Day'],
  difficulty: 'Beginner',
  imageUrl: 'https://cdntlr.theproteinworks.com/thelockerroom/wp-content/uploads/2020/08/shutterstock_1019665669.jpg', 
  demoGif: 'https://media.tenor.com/bqKtsSuqilQAAAAM/gym.gif', 
  targetMuscles: ['Hamstrings'],
  instructions: [
    'Adjust the leg curl machine to your height and position yourself on the machine, lying face down with legs under the padded lever',
    'Grip the handles and curl your legs up as far as possible without lifting your hips',
    'Slowly lower your legs back to the starting position with control',
    'Repeat for the desired number of reps'
  ],
  keyPoints: [
    'Avoid lifting your hips; keep your torso stable',
    'Control the movement to focus on the hamstrings',
    'Engage your core throughout for stability'
  ]
},

// Reverse Leg Curls
{
  id: 17,
  name: 'Reverse Leg Curls',
  muscleGroup: 'Legs',
  equipment: 'Cable Machine or Ankle Weights',
  description: 'A variation of leg curls focusing on the hamstrings and glutes, performed by lifting the leg behind the body.',
  split: ['Leg Day'],
  difficulty: 'Intermediate',
  imageUrl: 'https://fitguide.nl/wp-content/uploads/2018/09/leg-curls.jpg', 
  demoGif: 'https://morabihamrah.com/wp-content/uploads/2023/07/Leg-Curl12.gif',  
  targetMuscles: ['Hamstrings', 'Glutes'],
  instructions: [
    'Attach an ankle strap to the cable machine and fasten it around your ankle, standing with your back to the machine',
    'Hold onto a stable surface, like the machine or a bar, for balance',
    'Extend your leg backward, keeping it straight, to engage the hamstrings and glutes',
    'Slowly return to the starting position with control and repeat for the desired number of reps'
  ],
  keyPoints: [
    'Keep your core engaged and back straight',
    'Avoid swinging or using momentum',
    'Focus on squeezing the glutes at the top of the movement'
  ]
  },
  {
    id: 24,
    name: 'Barbell Rows',
    muscleGroup: 'Back',
    equipment: 'Barbell',
    description: 'A powerful exercise targeting the upper back and lats.',
    split: ['Pull', 'Back Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://www.trainheroic.com/wp-content/uploads/2023/03/AdobeStock_58683749-TH-jpg.webp',
    demoGif: 'https://burnfit.io/wp-content/uploads/2023/11/PAUSE_BB_ROW.gif',
    targetMuscles: ['Lats', 'Rhomboids', 'Lower Back'],
    instructions: [
      'Stand with feet shoulder-width apart, holding barbell with an overhand grip',
      'Bend slightly at the knees and hinge forward from the hips',
      'Pull the barbell to your lower chest, keeping elbows close',
      'Lower the bar back down with control'
    ],
    keyPoints: [
      'Keep back straight and core engaged',
      'Avoid jerking the weight',
      'Focus on squeezing shoulder blades together at the top'
    ]
  },
  {
    id: 22,
    name: 'Straight Arm Pulldown',
    muscleGroup: 'Back',
    equipment: 'Cable',
    description: 'Isolates the lats and helps with back width development.',
    split: ['Pull', 'Back Day'],
    difficulty: 'Intermediate',
    imageUrl: 'https://images.ctfassets.net/3s5io6mnxfqz/1yFqJwTlvHuPbRkHFuEEzl/32ec5d3f2200447e2d61a32faddb7c83/AdobeStock_255470547.jpeg?fm=jpg&w=1200&fl=progressive',
    demoGif: 'https://seonbiblog.co.kr/wp-content/uploads/2024/06/CABLE_ARM_PULL_DOWN.gif',
    targetMuscles: ['Lats', 'Teres Major', 'Rear Deltoids'],
    instructions: [
      'Stand in front of a cable machine with a straight bar attachment',
      'Hold the bar with arms straight, keeping a slight bend in elbows',
      'Pull the bar down to your thighs, engaging your lats',
      'Return the bar to the starting position with control'
    ],
    keyPoints: [
      'Keep arms straight throughout',
      'Engage lats at the bottom of the movement',
      'Avoid using momentum'
    ]
  },
  {
    id: 23,
    name: 'Pull-Ups',
    muscleGroup: 'Back',
    equipment: 'Bodyweight or Assisted Machine',
    description: 'A classic bodyweight exercise that targets the lats and upper back.',
    split: ['Pull', 'Back Day'],
    difficulty: 'Advanced',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.zRFeH3UTV-anr2vXzrn0AQHaDL&pid=Api&P=0&h=180',
    demoGif: 'https://fitliferegime.com/wp-content/uploads/2024/03/Pull-Ups.gif',
    targetMuscles: ['Lats', 'Biceps', 'Rear Deltoids'],
    instructions: [
      'Grip the pull-up bar with palms facing away, shoulder-width apart',
      'Pull yourself up until your chin is above the bar',
      'Lower yourself down with control to the starting position'
    ],
    keyPoints: [
      'Engage core and avoid swinging',
      'Focus on pulling with your back rather than arms',
      'Keep elbows close to the body'
    ]
  },
];

// Helper function to get exercise by ID
export const getExerciseById = (id: number): Exercise | undefined => {
  return exercises.find(exercise => exercise.id === id);
};