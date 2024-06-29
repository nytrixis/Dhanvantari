import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  role: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  allergies: { type: String, required: true },
  contact: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;