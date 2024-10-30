import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    // Simulate registration logic
    setTimeout(() => {
      // Navigate to the homepage on successful registration
      navigate('/');
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Form fields go here */}
        </form>
      </div>
    </div>
  );
};

export default Register;