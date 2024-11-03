import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface BMICategory {
  range: string;
  category: string;
  description: string;
  recommendations: string[];
}

const bmiCategories: BMICategory[] = [
  {
    range: "< 18.5",
    category: "Underweight",
    description: "You may need to gain some weight. Consult with a healthcare provider.",
    recommendations: [
      "Increase caloric intake with nutrient-rich foods",
      "Include protein-rich foods in every meal",
      "Add healthy fats to your diet (nuts, avocados, olive oil)",
      "Consider strength training to build muscle mass"
    ]
  },
  {
    range: "18.5 - 24.9",
    category: "Normal Weight",
    description: "You're at a healthy weight. Maintain your current habits.",
    recommendations: [
      "Maintain a balanced diet",
      "Regular exercise (150 minutes/week)",
      "Stay hydrated",
      "Get adequate sleep"
    ]
  },
  {
    range: "25.0 - 29.9",
    category: "Overweight",
    description: "You may benefit from losing some weight. Consider lifestyle changes.",
    recommendations: [
      "Monitor portion sizes",
      "Increase physical activity",
      "Choose whole foods over processed foods",
      "Track your calorie intake"
    ]
  },
  {
    range: "≥ 30.0",
    category: "Obese",
    description: "For your health, weight loss is recommended. Consult healthcare providers.",
    recommendations: [
      "Seek professional medical advice",
      "Create a structured meal plan",
      "Regular exercise under supervision",
      "Consider joining support groups"
    ]
  }
];

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<BMICategory | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBMI(parseFloat(calculatedBMI.toFixed(1)));

    // Determine BMI category
    let selectedCategory;
    if (calculatedBMI < 18.5) {
      selectedCategory = bmiCategories[0];
    } else if (calculatedBMI < 25) {
      selectedCategory = bmiCategories[1];
    } else if (calculatedBMI < 30) {
      selectedCategory = bmiCategories[2];
    } else {
      selectedCategory = bmiCategories[3];
    }
    setCategory(selectedCategory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-2">
          <Calculator className="w-8 h-8" />
          BMI Calculator
        </h2>
        <p className="text-gray-400">Calculate your Body Mass Index (BMI) to assess your weight relative to your height</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark-surface p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="height" className="block mb-1">Height (cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g., 175"
                className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
                required
                min="100"
                max="250"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block mb-1">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g., 70"
                className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
                required
                min="30"
                max="300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Calculate BMI
            </button>
          </form>

          {bmi !== null && category && (
            <div className="mt-6 p-4 bg-blue-900 bg-opacity-20 rounded-lg border border-white-800">
              <div className="text-center">
                <p className="text-xl mb-2">Your BMI</p>
                <p className="text-4xl font-bold text-white-400 mb-2">{bmi}</p>
                <p className="text-lg font-semibold">{category.category}</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-dark-surface p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">BMI Categories</h3>
            <div className="space-y-3">
              {bmiCategories.map((cat, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    category?.category === cat.category
                      ? 'bg-blue-900 bg-opacity-20 border border-white-800'
                      : 'bg-gray-800'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{cat.category}</span>
                    <span className="text-sm text-gray-400">BMI: {cat.range}</span>
                  </div>
                  <p className="text-sm text-gray-400">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {category && (
            <div className="bg-dark-surface p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
              <ul className="list-disc list-inside space-y-2">
                {category.recommendations.map((rec, index) => (
                  <li key={index} className="text-gray-300">{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-dark-surface p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">About BMI</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            Body Mass Index (BMI) is a simple measure that uses your height and weight to work out if your weight is healthy. 
            While BMI is useful as a general guide, it's not a complete measure of body composition or health risk.
          </p>
          <p>
            Factors like muscle mass, bone density, age, sex, ethnicity, and body fat distribution aren't considered. 
            Athletes or muscular individuals might have a high BMI but not be overweight.
          </p>
          <p>
            For a more accurate assessment of your health status, consult with healthcare professionals who can consider 
            multiple factors beyond BMI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;