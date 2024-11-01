import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

type ProfileFormData = {
  name: string;
  age: number;
  weight: number;
  height: number;
};

const Profile: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: user?.name,
      age: user?.age,
      weight: user?.weight,
      height: user?.height
    }
  });

  const onSubmit = (data: ProfileFormData) => {
    updateProfile(data);
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-6 flex items-center">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover mr-6"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-400">{user.email}</p>
        </div>
      </div>
      
      {isEditing ? (
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
            <label htmlFor="age" className="block mb-1">Age</label>
            <input
              type="number"
              id="age"
              {...register('age', { required: 'Age is required', min: { value: 1, message: 'Age must be positive' } })}
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
          </div>
          <div>
            <label htmlFor="weight" className="block mb-1">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              {...register('weight', { required: 'Weight is required', min: { value: 1, message: 'Weight must be positive' } })}
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
            />
            {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
          </div>
          <div>
            <label htmlFor="height" className="block mb-1">Height (cm)</label>
            <input
              type="number"
              id="height"
              {...register('height', { required: 'Height is required', min: { value: 1, message: 'Height must be positive' } })}
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
            />
            {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
          </div>
          <div className="flex gap-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-surface p-4 rounded-lg">
              <p className="text-gray-400">Age</p>
              <p className="text-xl">{user.age} years</p>
            </div>
            <div className="bg-dark-surface p-4 rounded-lg">
              <p className="text-gray-400">Gender</p>
              <p className="text-xl capitalize">{user.gender}</p>
            </div>
            <div className="bg-dark-surface p-4 rounded-lg">
              <p className="text-gray-400">Weight</p>
              <p className="text-xl">{user.weight} kg</p>
            </div>
            <div className="bg-dark-surface p-4 rounded-lg">
              <p className="text-gray-400">Height</p>
              <p className="text-xl">{user.height} cm</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;