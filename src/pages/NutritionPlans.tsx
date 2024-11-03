import React from 'react';
import { Link } from 'react-router-dom';

export const NutritionPlans: React.FC = () => {
  const nutritionPlans = [
    {
      type: "Weight Loss",
      description: "A calorie-controlled meal plan to help reduce body fat effectively and healthily.",
      link: "/nutrition-plans/weight-loss",
    },
    {
      type: "Muscle Gain",
      description: "High-protein meals designed to aid in muscle building and recovery.",
      link: "/nutrition-plans/muscle-gain",
    },
    {
      type: "Balanced Diet",
      description: "A well-rounded diet to maintain general health and wellness.",
      link: "/nutrition-plans/balanced-diet",
    },
    {
      type: "Keto",
      description: "A low-carb, high-fat diet that promotes fat burning and weight loss.",
      link: "/nutrition-plans/keto",
    },
    {
      type: "Vegan",
      description: "A plant-based diet providing essential nutrients and healthy alternatives.",
      link: "/nutrition-plans/vegan",
    },
    {
      type: "Athlete's Diet",
      description: "Nutrient-rich meals to fuel workouts, enhance performance, and aid recovery.",
      link: "/nutrition-plans/athletes-diet",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Nutrition Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nutritionPlans.map((plan, index) => (
          <div key={index} className="bg-dark-surface p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">{plan.type}</h2>
            <p className="text-gray-300 mb-6">{plan.description}</p>
            <Link
              to={plan.link}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              View Diet Plan
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg font-medium mb-2">For more additional nutrition plans or to get started with our online training programs, reach out to us!</p>
        <p className="text-lg">
          Call us at <span className="font-semibold">+91 6309559515</span> or send an email to{' '}
          <a href="mailto:rithikkumarcholleti@gmail.com" className="text-blue-500 hover:underline">
            rithikkumarcholleti@gmail.com
          </a>.
        </p>
      </div>
    </div>
    
  );
};

export default NutritionPlans;