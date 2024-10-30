// Login.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type LoginFormData = {
  email: string;
  password: string;
};

interface LoginProps {
  setIsAuthenticated: (authenticated: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    // Dummy credentials check
    const isValid = data.email === "user@example.com" && data.password === "password";
    if (isValid) {
      setIsAuthenticated(true);
      navigate("/"); // Redirect to home
    } else {
      setError("email", { type: "manual", message: "Credentials do not match" });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md"
          />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
