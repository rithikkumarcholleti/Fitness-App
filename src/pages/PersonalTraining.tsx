// PersonalTraining.tsx
import React, { useState } from 'react';

// PaymentForm component (import if it's in another file)
const PaymentForm: React.FC<{ plan: any; onClose: () => void }> = ({ plan, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    emergencyContact: '',
    healthConditions: '',
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const inputClasses =
    'w-full px-3 py-2 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-dark-surface';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-surface rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Subscribe to {plan.name} Plan</h3>
          <button onClick={onClose} className="text-white-400 hover:text-gray-300 bg-transparent hover:bg-transparent">
            ✕
          </button>
        </div>

        <div className="mb-6 p-4 bg-blue-900 bg-opacity-20 rounded-lg border border-blue-800">
          <p className="text-xl">Total Amount: {plan.price}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['name', 'email', 'phone', 'cardNumber', 'expiryDate', 'cvv', 'address', 'city', 'pincode', 'state', 'emergencyContact', 'healthConditions'].map((field) => (
              <input
                key={field}
                name={field}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                value={(formData as any)[field]}
                onChange={handleInputChange}
                className={inputClasses}
              />
            ))}
            <label className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="mr-2"
              />
              Accept Terms and Conditions
            </label>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-6 py-2 rounded-md border border-gray-600 hover:bg-gray-700">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
              Pay {plan.price}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PersonalTraining: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);

  const packages = [
    {
      name: 'Basic Package',
      price: '₹3,500/month',
      description: '4 sessions per month, ideal for beginners to kickstart their fitness journey.',
    },
    {
      name: 'Premium Package',
      price: '₹6,500/month',
      description: '8 sessions per month, includes personalized workout plans and progress tracking.',
    },
    {
      name: 'VIP Package',
      price: '₹12,000/month',
      description: 'Unlimited sessions, personal training, and dedicated nutritionist support.',
    },
  ];

  const handleSelectPlan = (pkg: any) => {
    setSelectedPlan(pkg);
  };

  const handleClosePaymentForm = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Personal Training Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-xl font-bold mb-4">{pkg.price}</p>
            <p className="text-gray-700 mb-4">{pkg.description}</p>
            <button
              className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              onClick={() => handleSelectPlan(pkg)}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg font-medium mb-2">For additional details or to get started with our online training programs, reach out to us!</p>
        <p className="text-lg">
          Call us at <span className="font-semibold">+91 6309559515</span> or send an email to{' '}
          <a href="mailto:rithikkumarcholleti@gmail.com" className="text-blue-500 hover:underline">
            rithikkumarcholleti@gmail.com
          </a>.
        </p>
      </div>

      {selectedPlan && <PaymentForm plan={selectedPlan} onClose={handleClosePaymentForm} />}
    </div>
  );
};

export default PersonalTraining;
