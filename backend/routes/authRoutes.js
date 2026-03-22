import express from 'express';
import verifyToken from '../middleware/authMiddleware.js';

import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);

export default router;