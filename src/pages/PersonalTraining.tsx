// PersonalTraining.tsx
import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

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
    termsAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Payment submitted:', formData);
    onClose();
  };

  const inputClasses = "w-full px-3 py-2 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-dark-surface";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-surface rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Subscribe to {plan.name} Plan</h3>
          <button onClick={onClose} className="text-white-400 hover:text-red-500 bg-transparent hover:bg-transparent">✕</button>
        </div>

        <div className="mb-6 p-4 bg-blue-900 bg-opacity-20 rounded-lg border border-blue-800">
          <p className="text-xl">Total Amount: {plan.price.toLocaleString()}</p>
          <p className="text-sm text-gray-400">{plan.duration} subscription</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Full Name *</label>
              <input
                type="text"
                required
                className={inputClasses}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">Email *</label>
              <input
                type="email"
                required
                className={inputClasses}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                className={inputClasses}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">Emergency Contact *</label>
              <input
                type="tel"
                required
                className={inputClasses}
                value={formData.emergencyContact}
                onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
              />
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block mb-1">Card Number *</label>
                <input
                  type="text"
                  required
                  maxLength={16}
                  placeholder="1234 5678 9012 3456"
                  className={inputClasses}
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">Expiry Date *</label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  maxLength={5}
                  className={inputClasses}
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">CVV *</label>
                <input
                  type="password"
                  required
                  maxLength={3}
                  placeholder="123"
                  className={inputClasses}
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-lg font-semibold mb-4">Billing Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block mb-1">Street Address *</label>
                <input
                  type="text"
                  required
                  className={inputClasses}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">City *</label>
                <input
                  type="text"
                  required
                  className={inputClasses}
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">PIN Code *</label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  className={inputClasses}
                  value={formData.pincode}
                  onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">State *</label>
                <input
                  type="text"
                  required
                  className={inputClasses}
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-lg font-semibold mb-4">Health Information</h4>
            <div>
              <label className="block mb-1">Any Health Conditions or Allergies</label>
              <textarea
                className={inputClasses}
                rows={3}
                value={formData.healthConditions}
                onChange={(e) => setFormData({...formData, healthConditions: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              required
              id="terms"
              className="mt-1"
              checked={formData.termsAccepted}
              onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the terms and conditions, including the membership agreement, 
              cancellation policy, and gym rules. I understand that this subscription will 
              auto-renew at the end of the term unless cancelled.
            </label>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-md border border-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-800 flex items-center"
            >
              <Lock className="w-4 h-4 mr-2" />
              Pay {plan.price.toLocaleString()}
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
              className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300"
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
