import React, { useState } from 'react';
import { CreditCard, Calendar, Lock, Tag } from 'lucide-react';

type MembershipPlan = {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
};

type Offer = {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
};

const offers: Offer[] = [
  {
    id: 1,
    title: "Quarterly Subscription Offer",
    description: "Pay for 3 months in advance and get 15% off on any plan",
    discount: "15% OFF",
    validUntil: "2024-04-30"
  },
  {
    id: 2,
    title: "Annual Membership Deal",
    description: "Subscribe for a year and get 2 months free + a free personal training session",
    discount: "2 MONTHS FREE",
    validUntil: "2024-03-31"
  },
  {
    id: 3,
    title: "Student Special",
    description: "20% off on all plans with valid student ID",
    discount: "20% OFF",
    validUntil: "2024-12-31"
  },
  {
    id: 4,
    title: "Early Bird Offer",
    description: "Join before 8 AM and get 10% off on any plan",
    discount: "10% OFF",
    validUntil: "2024-06-30"
  }
];

const membershipPlans: MembershipPlan[] = [
  {
    id: 1,
    name: 'Basic',
    price: 2500,
    duration: 'One Month',
    features: [
      'Access to gym facilities',
      'Basic workout plans',
      'Locker room access',
      'Mobile app access',
      'Basic fitness assessment'
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: 5000,
    duration: 'Three Months',
    features: [
      'Access to gym facilities',
      'Advanced workout plans',
      'Group fitness classes',
      'Locker room access',
      '1 personal training session per month',
      'Nutrition consultation',
      'Priority booking for classes'
    ],
  },
  {
    id: 3,
    name: 'Elite',
    price: 10000,
    duration: 'Six Months',
    features: [
      'Access to gym facilities',
      'Custom workout plans',
      'Unlimited group fitness classes',
      'Premium locker with towel service',
      '4 personal training sessions per month',
      'Monthly nutrition consultation',
      'Access to sauna and spa',
      'Guest passes (2 per month)',
      'Exclusive member events',
      'Fitness gear welcome pack'
    ],
  },
];

const OffersModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-surface rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold flex items-center">
            <Tag className="w-6 h-6 mr-2" />
            Current Offers
          </h3>
          <button onClick={onClose} className="text-white-400 hover:text-gray-300 bg-transparent hover:bg-transparent">✕</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map(offer => (
            <div key={offer.id} className="border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">{offer.title}</h4>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">{offer.discount}</span>
              </div>
              <p className="text-gray-400 mb-2">{offer.description}</p>
              <p className="text-sm text-gray-500">Valid until: {new Date(offer.validUntil).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PaymentForm: React.FC<{ plan: MembershipPlan; onClose: () => void }> = ({ plan, onClose }) => {
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
          <button onClick={onClose} className="text-white-400 hover:text-gray-300 bg-transparent hover:bg-transparent">✕</button>
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
              className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 flex items-center"
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
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Membership Plans</h2>
        <button
          onClick={() => setShowOffers(true)}
          className="flex items-center gap-2 text-white-400 hover:text-gray-300 transition-colors bg-transparent hover:bg-transparent hover:underline"
        >
          <Tag className="w-4 h-4" />
          View Current Offers
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membershipPlans.map(plan => (
          <div key={plan.id} className="border rounded-lg p-6 shadow-md flex flex-col bg-dark-surface">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-2">
              ₹{plan.price.toLocaleString()}
              <span className="text-sm font-normal text-gray-400">/{plan.duration.toLowerCase()}</span>
            </p>
            <ul className="list-disc list-inside mb-4 flex-grow space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-300">{feature}</li>
              ))}
            </ul>
            <button 
              onClick={() => setSelectedPlan(plan)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
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

      <div className="mt-8 p-4 bg-dark-surface rounded-lg text-sm text-gray-400">
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