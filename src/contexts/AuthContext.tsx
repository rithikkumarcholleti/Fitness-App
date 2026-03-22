import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface User {
  name: string;
  email: string;
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  imageUrl?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_URL = 'http://localhost:5000/api';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchProfile(token);
    }
  }, []);

  const fetchProfile = async (token: string) => {
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(response.data);
      setIsAuthenticated(true);
    } catch (err) {
      localStorage.removeItem('token');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const register = async (data: any) => {
    try {
      await axios.post(`${API_URL}/register`, data);
      navigate('/login');
    } catch (error: any) {
      throw error; // pass error to Register.tsx
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });

      const token = response.data.data.token;

      localStorage.setItem('token', token);

      await fetchProfile(token);

      navigate('/');
    } catch (error: any) {
      throw error; // pass error to Login.tsx
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  const updateProfile = async (data: Partial<User>) => {
    const token = localStorage.getItem('token');

    const response = await axios.put(`${API_URL}/profile`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setUser(response.data);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};