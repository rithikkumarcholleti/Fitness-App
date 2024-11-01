import React, { useState } from 'react';
import { Calendar, CreditCard, Lock, Tag } from 'lucide-react';

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
};

interface PaymentFormData {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  healthConditions: string;
  termsAccepted: boolean;
}

const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 1999,
    duration: 'Monthly',
    features: [
      'Access to gym facilities',
      'Basic workout equipment',
      'Locker room access',
      'Free fitness assessment',
      'Mobile app access'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 3999,
    duration: 'Monthly',
    features: [
      'All Basic Plan features',
      'Personal trainer sessions (2/month)',
      'Group fitness classes',
      'Nutrition consultation',
      'Sauna & spa access',
      'Priority booking'
    ]
  },
  {
    id: 'elite',
    name: 'Elite Plan',
    price: 5999,
    duration: 'Monthly',
    features: [
      'All Premium Plan features',
      'Unlimited personal training',
      'Custom meal plans',
      'Recovery therapy sessions',
      'Private locker',
      'Guest passes (2/month)',
      'Premium merchandise'
    ]
  }
];

interface PaymentFormProps {
  plan: MembershipPlan;
  onClose: () => void;
}

const OffersModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-surface rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Current Offers</h3>
          <button onClick={onClose} className="text-white-400 hover:text-gray-400 bg-transparent hover:bg-transparent">✕</button>
        </div>
        <div className="space-y-4">
          <div className="border border-blue-500 rounded-lg p-4 bg-blue-900 bg-opacity-10">
            <div className="flex items-start gap-4">
              <Tag className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Early Bird Discount</h4>
                <p className="text-gray-300">Get 20% off on any annual membership plan. Valid until March 31st.</p>
              </div>
            </div>
          </div>
          <div className="border border-green-500 rounded-lg p-4 bg-green-900 bg-opacity-10">
            <div className="flex items-start gap-4">
              <Tag className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Student Special</h4>
                <p className="text-gray-300">15% discount for students with valid ID. Available on all plans.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500 rounded-lg p-4 bg-purple-900 bg-opacity-10">
            <div className="flex items-start gap-4">
              <Tag className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Refer & Earn</h4>
                <p className="text-gray-300">Get one month free when you refer a friend who joins any plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentForm: React.FC<PaymentFormProps> = ({ plan, onClose }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    name: '',
    email: '',
    phone: '',
    emergencyContact: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    healthConditions: '',
    termsAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment:', formData);
    onClose();
  };

  const inputClasses = "w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-surface rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Subscribe to {plan.name}</h3>
          <button onClick={onClose} className="text-white-400 hover:text-gray-500 bg-transparent hover:bg-transparent">✕</button>
        </div>

        <div className="mb-6 p-4 bg-blue-900 bg-opacity-20 rounded-lg border border-blue-800">
          <p className="text-xl">Total Amount: ₹{plan.price.toLocaleString()}</p>
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
              Pay ₹{plan.price.toLocaleString()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const MembershipPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [showOffers, setShowOffers] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Membership Plans</h2>
        <button
          onClick={() => setShowOffers(true)}
          className="flex items-center gap-2 text-blue-300 hover:text-gray-500 transition-colors bg-transparent hover:bg-transparent "
        >
          <Tag className="w-4 h-4" />
          View Current Offers
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {membershipPlans.map(plan => (
          <div key={plan.id} className="border border-gray-700 rounded-lg p-6 bg-dark-surface hover:border-gray-500 transition-colors">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">
              ₹{plan.price.toLocaleString()}
              <span className="text-sm font-normal text-gray-400">/{plan.duration.toLowerCase()}</span>
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-300">{feature}</li>
              ))}
            </ul>
            <button 
              onClick={() => setSelectedPlan(plan)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Select Plan
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <PaymentForm 
          plan={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}

      {showOffers && <OffersModal onClose={() => setShowOffers(false)} />}

      <div className="bg-dark-surface rounded-lg p-6 text-sm text-gray-400">
        <h4 className="font-semibold text-gray-300 mb-2">Important Information:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>All plans include access to our mobile app for tracking workouts and progress</li>
          <li>Monthly plans auto-renew at the end of each billing cycle</li>
          <li>Cancellation requires 30-day notice before the next billing cycle</li>
          <li>GST and applicable taxes will be added to the final amount</li>
          <li>Special corporate discounts available for group memberships</li>
        </ul>
      </div>
    </div>
  );
};

export default MembershipPlans;