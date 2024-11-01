import React from 'react';
import { Link } from 'react-router-dom';

const NutritionPlans: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Nutrition Plans</h1>
      <p className="mb-4 text-center">Fuel your body with the right nutrients for optimal health and performance. Explore our tailored nutrition plans to match your fitness goals.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-surface p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Weight Loss Plan</h2>
          <p>Designed to help you burn fat and lose weight healthily. Includes calorie management, portion control, and low-carb recipes.</p>
          <Link to="/nutrition-plans/weight-loss" className="text-blue-500 hover:underline">View Diet</Link>
        </div>
        <div className="bg-dark-surface p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Muscle Gain Plan</h2>
          <p>High-protein plan focusing on lean muscle building. Balanced with carbs and fats to fuel workouts and muscle recovery.</p>
          <Link to="/nutrition-plans/muscle-gain" className="text-blue-500 hover:underline">View Diet</Link>
        </div>
        <div className="bg-dark-surface p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Balanced Diet Plan</h2>
          <p>A well-rounded diet plan that includes all food groups in moderation. Perfect for maintaining overall health and energy.</p>
          <Link to="/nutrition-plans/balanced-diet" className="text-blue-500 hover:underline">View Diet</Link>
        </div>
        {/* Add similar cards for Keto, Vegan, and Athlete's Diet */}
      </div>
    </div>
  );
};

export default NutritionPlans;
