import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import WorkoutPlans from './pages/WorkoutPlans';
import PersonalTraining from './pages/PersonalTraining';
import ExerciseDatabase from './pages/ExerciseDatabase';
import MembershipPlans from './pages/MembershipPlans';
import Community from './pages/Community';
import Schedule from './pages/Schedule';
import Progress from './pages/Progress';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-dark-text">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/workout-plans" element={<WorkoutPlans />} />
            <Route path="/exercise-database" element={<ExerciseDatabase />} />
            <Route path="/membership-plans" element={<MembershipPlans />} />
            <Route path="/community" element={<Community />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;