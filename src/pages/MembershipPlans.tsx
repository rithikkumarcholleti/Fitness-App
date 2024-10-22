import React from 'react';

type MembershipPlan = {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
};

const membershipPlans: MembershipPlan[] = [
  {
    id: 1,
    name: 'Basic',
    price: 29.99,
    duration: 'Monthly',
    features: [
      'Access to gym facilities',
      'Basic workout plans',
      'Locker room access',
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: 49.99,
    duration: 'Monthly',
    features: [
      'Access to gym facilities',
      'Advanced workout plans',
      'Group fitness classes',
      'Locker room access',
      '1 personal training session per month',
    ],
  },
  {
    id: 3,
    name: 'Elite',
    price: 299.99,
    duration: 'Quarterly',
    features: [
      'Access to gym facilities',
      'Custom workout plans',
      'Unlimited group fitness classes',
      'Locker room access',
      '4 personal training sessions per month',
      'Nutrition consultation',
      'Access to sauna and spa',
    ],
  },
];

const MembershipPlans: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membershipPlans.map(plan => (
          <div key={plan.id} className="border rounded-lg p-6 shadow-md flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-2">${plan.price}<span className="text-sm font-normal">/{plan.duration}</span></p>
            <ul className="list-disc list-inside mb-4 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-1">{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
              Select Plan
            </button>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-600">
        * All plans include access to our mobile app for tracking workouts and progress.
        Cancellation policy applies. Please read our terms and conditions for more details.
      </p>
    </div>
  );
};

export default MembershipPlans;