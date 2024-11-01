import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
};

const Register: React.FC = () => {
  const { register: registerUser } = useAuth();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        gender: data.gender,
        age: data.age,
        weight: data.weight,
        height: data.height
      });
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="gender" className="block mb-1">Gender</label>
          <select
            id="gender"
            {...register('gender', { required: 'Gender is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>

        <div>
          <label htmlFor="age" className="block mb-1">Age</label>
          <input
            type="number"
            id="age"
            {...register('age', { 
              required: 'Age is required',
              min: { value: 16, message: 'Must be at least 16 years old' },
              max: { value: 100, message: 'Must be under 100 years old' }
            })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
        </div>

        <div>
          <label htmlFor="weight" className="block mb-1">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            {...register('weight', { 
              required: 'Weight is required',
              min: { value: 30, message: 'Weight must be at least 30 kg' }
            })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
        </div>

        <div>
          <label htmlFor="height" className="block mb-1">Height (cm)</label>
          <input
            type="number"
            id="height"
            {...register('height', { 
              required: 'Height is required',
              min: { value: 100, message: 'Height must be at least 100 cm' }
            })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { 
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === watch('password') || 'Passwords do not match'
            })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login here</Link>
      </p>
    </div>
  );
};

export default Register;