import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import WorkoutPlans from './pages/WorkoutPlans';
import ExerciseDatabase from './pages/ExerciseDatabase';
import MembershipPlans from './pages/MembershipPlans';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/workout-plans" element={<WorkoutPlans />} />
            <Route path="/exercise-database" element={<ExerciseDatabase />} />
            <Route path="/membership-plans" element={<MembershipPlans />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;