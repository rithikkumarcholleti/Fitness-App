import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  weight: Number,
  height: Number
});

const User = mongoose.model('User', userSchema);

export default User;