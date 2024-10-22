import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type ProfileFormData = {
  name: string;
  age: number;
  weight: number;
  height: number;
};

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // TODO: Implement profile update logic
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="age" className="block mb-1">Age</label>
            <input
              type="number"
              id="age"
              {...register('age', { required: 'Age is required', min: { value: 1, message: 'Age must be positive' } })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
          </div>
          <div>
            <label htmlFor="weight" className="block mb-1">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              {...register('weight', { required: 'Weight is required', min: { value: 1, message: 'Weight must be positive' } })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
          </div>
          <div>
            <label htmlFor="height" className="block mb-1">Height (cm)</label>
            <input
              type="number"
              id="height"
              {...register('height', { required: 'Height is required', min: { value: 1, message: 'Height must be positive' } })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Age:</strong> 30</p>
          <p><strong>Weight:</strong> 75 kg</p>
          <p><strong>Height:</strong> 180 cm</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;