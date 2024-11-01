import React from 'react';
import { useParams } from 'react-router-dom';

const dietPlans = {
  'weight-loss': [
    { meal: 'Breakfast', items: ['Oatmeal', 'Egg whites', 'Fruit'] },
    { meal: 'Lunch', items: ['Grilled chicken', 'Salad', 'Brown rice'] },
    { meal: 'Dinner', items: ['Baked salmon', 'Steamed vegetables', 'Quinoa'] },
  ],
  'muscle-gain': [
    { meal: 'Breakfast', items: ['Protein shake', 'Banana', 'Whole wheat toast'] },
    { meal: 'Lunch', items: ['Turkey sandwich', 'Sweet potato', 'Green beans'] },
    { meal: 'Dinner', items: ['Steak', 'Mashed potatoes', 'Asparagus'] },
  ],
  'maintenance': [
    { meal: 'Breakfast', items: ['Greek yogurt', 'Granola', 'Berries'] },
    { meal: 'Lunch', items: ['Tuna salad', 'Whole grain bread', 'Fruit'] },
    { meal: 'Dinner', items: ['Chicken stir-fry', 'Brown rice', 'Mixed vegetables'] },
  ],
};

function DietPlan() {
  const { planType } = useParams<{ planType: string }>();
  const selectedPlan = dietPlans[planType] || null;

  if (!selectedPlan) {
    return <p className="text-center">No diet plan available for this type.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
      <h2 className="text-2xl font-bold mb-6 capitalize">{planType.replace("-", " ")} Plan</h2>
      {selectedPlan.map((meal, index) => (
        <div key={index} className="border rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold">{meal.meal}</h3>
          <ul className="list-disc list-inside mt-2">
            {meal.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DietPlan;
