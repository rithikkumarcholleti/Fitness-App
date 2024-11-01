import React from 'react';
import { Link } from 'react-router-dom';

const dietPlans = [
  { name: "Weight Loss", planType: "weight-loss", description: "A diet plan focused on calorie deficit to help you shed pounds." },
  { name: "Muscle Gain", planType: "muscle-gain", description: "A high-calorie diet plan to help you build muscle mass." },
  { name: "Maintenance", planType: "maintenance", description: "A balanced diet plan to maintain your current weight." },
];

function NutritionPlans() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
      {dietPlans.map((plan) => (
        <div key={plan.planType} className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <p className="mb-4">{plan.description}</p>
          <Link
            to={`/nutrition-plans/${plan.planType}`}
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            View {plan.name} Plan
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NutritionPlans;
