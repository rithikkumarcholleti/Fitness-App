import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


// =======================
// Register Controller
// =======================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, gender, age, weight, height } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and password are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      gender,
      age,
      weight,
      height
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully'
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};


// =======================
// Login Controller
// =======================
export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found'
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: 'Invalid password'
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: 'Login successful',
      data: { token }
    });

  } catch (err) {

    console.error("LOGIN ERROR:", err);

    res.status(500).json({
      success: false,
      message: 'Server error'
    });

  }
};


// =======================
// Get Profile Controller
// =======================
export const getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: 'Server error'
    });

  }
};


// =======================
// Update Profile Controller
// =======================
export const updateProfile = async (req, res) => {
  try {

    const { name, age, weight, height } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, age, weight, height },
      { new: true }
    ).select('-password');

    res.json({
      success: true,
      data: updatedUser
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: 'Server error'
    });

  }
};