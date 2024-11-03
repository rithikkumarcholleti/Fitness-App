# Fitness App

**Project description.**  
*A complete fitness application built with TypeScript, JavaScript, React, HTML, CSS, and MongoDB. This app helps users track their workouts, manage nutrition plans, and monitor fitness progress, providing an engaging user experience through an intuitive UI.*

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Screenshots](#screenshots)
5. [Technologies](#technologies)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## Features

- **User Authentication:** Secure login and signup using MongoDB for user data storage.
- **Workout Tracking:** Log daily workouts, set fitness goals, and track exercise history.
- **Nutrition Management:** Track calories and macronutrients with built-in nutrition plans.
- **Community:** Can connect with fellow gym-goers.
- **Responsive Design:** Optimized for both desktop and mobile devices.


---

## Installation

### Prerequisites:
- **Node.js** and **npm** (Node Package Manager) installed.
  - [Download Node.js](https://nodejs.org/)
    
- **MongoDB** installed locally or set up with a cloud service like MongoDB Atlas.
  - [Download MongoDB](https://www.mongodb.com/try/download/community)

### Steps to Install:

1. Clone the repository:
   ```bash
   git clone https://github.com/rithikkumarcholleti/Fitness-App.git

2. Navigate to the project directory:
   ```bash
   cd Fitness-App

3. Install the necessary dependencies:
   ```bash
   npm install

4. Istall react-router-dom for routing:
   ```bash
   npm install express cors dotenv bcryptjs jsonwebtoken mongoose

5. Set up MongoDB connection:
   - Create a MongoDB database and get the MongoDB URI.
   - Create a .env file in the root of the project and add your MongoDB URI.
   ```bash
    MONGODB_URI=your_mongodb_uri_here
   JWT_SECRET=your_jwt_secret_key_here

6. Run the sever:
   ```bash
   npm run server
   
7. Run the project:
   ```bash
   npm run dev

## Usage 
1. **Run locally**: Start the development server with:
   ```bash
   npm run dev

2. **Access the application:**  Open your browser and go to:
   ```bash
   http://localhost:5000

3. **Create an Account:** Sign up to start logging your workouts, meals, and monitor progress.


## Screenshots
![Screenshot 2024-11-03 211016](https://github.com/user-attachments/assets/524cf326-6ee3-4994-9272-104b9bc3cdd2)
![Screenshot 2024-11-03 211147](https://github.com/user-attachments/assets/259b3097-16da-406a-9644-5d0af0b9a5d6)
![Screenshot 2024-11-03 211226](https://github.com/user-attachments/assets/0a24bcd5-e59f-41a8-a84a-6eb75f72fd9a)
![Screenshot 2024-11-03 211301](https://github.com/user-attachments/assets/4cd202f7-3fcb-41fe-9195-87320fc71632)
![Screenshot 2024-11-03 211315](https://github.com/user-attachments/assets/a9df5c94-3ca9-4fe2-90b9-f1e6071f9ea0)
![Screenshot 2024-11-03 211327](https://github.com/user-attachments/assets/a18d8c24-76ef-4aef-94b7-7e5555b7cdbd)
![Screenshot 2024-11-03 211354](https://github.com/user-attachments/assets/52218d52-4520-44c1-846e-5bb065a4e16b)
![Screenshot 2024-11-03 211406](https://github.com/user-attachments/assets/49df7ed4-60e7-4e21-99c3-730ce14b5d55)
![Screenshot 2024-11-03 211417](https://github.com/user-attachments/assets/df76c34c-a2dd-420b-863c-9c7ebb0d2734)
![Screenshot 2024-11-03 211429](https://github.com/user-attachments/assets/2bf63966-34d9-408b-ada5-74bc84974c97)
![Screenshot 2024-11-03 211441](https://github.com/user-attachments/assets/f9ad9ed5-fe7c-4be9-afea-bc366882a419)
![Screenshot 2024-11-03 211453](https://github.com/user-attachments/assets/e2fdba84-ce54-4b52-a678-a0df4d5a7cec)


## Technologies
- **Frontend** : React, Typescript, JavaScript, HTML, CSS
- **Backend** : Node.js, Express, MongoDB (using Mongoose)



## Project Structure

Overview of project structure:

```bash
├── backend
│   └── server.js
├── src
│   ├── components
│   │   ├── community
│   │   │   └── CommunityCard.tsx 
│   │   ├── exercises
│   │   │   ├── ExerciseCard.tsx
│   │   │   └── ExerciseFilters.tsx
│   │   ├── progress
│   │   │   └── ActivityTracker.tsx
│   │   ├── schedule
│   │   │   └── WorkoutSchedule.tsx
│   │   ├── workouts
│   │   │   ├── SupplementaryWorkouts.tsx
│   │   │   ├── WorkoutDayCard.tsx
│   │   │   ├── WorkoutSplitCard.tsx
│   │   │   └── WorkoutSplitSelector.tsx
│   │   └── Navbar.tsx
│   ├── contexts
│   │   └── AuthContext.tsx
│   ├── data
│   │   ├── exercise.ts
│   │   └── workoutSplits.ts
│   ├── pages
│   │   ├── BMICalculator.tsx
│   │   ├── Community.tsx
│   │   ├── DietPlan.tsx
│   │   ├── ExerciseDatabse.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── MembershipPlans.tsx
│   │   ├── NutritionPlans.tsx
│   │   ├── PersonalTraining.tsx
│   │   ├── Profile.tsx
│   │   ├── Progress.tsx
│   │   ├── Register.tsx
│   │   ├── Schedule.tsx
│   │   └── WorkoutPlans.tsx
│   ├── services
│   │   └── api.ts
│   ├── types
│   │   ├── exercise.ts
│   │   └── workout.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.local
├── eslint.config.js
├── GYMLOGO.png
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig,node.json
└── vite.config.ts
```

## Contributing

How others can contribute to this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push the changes to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Rithik Kumar Cholleti - [LinkedIn](https://www.linkedin.com/in/rithik-cholleti-394973317/) - [Email](mailto:rithikkumarcholleti@gmail.com)  
Project Link: [Fitness-App](https://github.com/rithikkumarcholleti/Fitness-App)
