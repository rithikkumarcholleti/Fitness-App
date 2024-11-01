import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import WorkoutPlans from './pages/WorkoutPlans';
import PersonalTraining from './pages/PersonalTraining';
import NutritionPlans from './pages/NutritionPlans';
import ExerciseDatabase from './pages/ExerciseDatabase';
import MembershipPlans from './pages/MembershipPlans';
import Community from './pages/Community';
import Schedule from './pages/Schedule';
import Progress from './pages/Progress';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Home /> : <Navigate to="/register" />} 
          />
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />} 
          />
          <Route 
            path="/register" 
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />} 
          />
          <Route 
            path="/profile" 
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/nutrition-plans" 
            element={isAuthenticated ? <NutritionPlans /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/workout-plans" 
            element={isAuthenticated ? <WorkoutPlans /> : <Navigate to="/login" />} 
          />
          <Route path="/personal-training" element= {isAuthenticated ? <PersonalTraining /> : <Navigate to="/login" />}
          />
          <Route 
            path="/exercise-database" 
            element={isAuthenticated ? <ExerciseDatabase /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/membership-plans" 
            element={isAuthenticated ? <MembershipPlans /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/community" 
            element={isAuthenticated ? <Community /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/schedule" 
            element={isAuthenticated ? <Schedule /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/progress" 
            element={isAuthenticated ? <Progress /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;