import React, { useState } from 'react';
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
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setServerError(null);

      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        gender: data.gender,
        age: data.age,
        weight: data.weight,
        height: data.height
      });

    } catch (error: any) {
      setServerError(error.response?.data?.message)
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      {serverError && (
        <p className="text-red-500 text-center mb-2">{serverError}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Gender</label>
          <select
            {...register('gender', { required: 'Gender is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Age</label>
          <input
            type="number"
            {...register('age', { required: 'Age is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">Weight (kg)</label>
          <input
            type="number"
            {...register('weight', { required: 'Weight is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">Height (cm)</label>
          <input
            type="number"
            {...register('height', { required: 'Height is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', {
              validate: value => value === watch('password') || 'Passwords do not match'
            })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
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