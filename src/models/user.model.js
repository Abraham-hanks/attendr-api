const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Last name cannot be blank'],
  },
  last_name: {
    type: String,
    required: [true, 'Last name cannot be blank'],
  },
  matriculation_no: {
    type: String,
    required: [true, 'Matriculation number cannot be blank'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank']
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  user_type: {
    type: String,
    required: false,
    enum: ['student', 'lecturer', 'admin']
  },
  current_level: {
    type: String,
  },
  facaulty_id: {
    type: String,
  },
  department_id: {
    type: String,
  },
  programme_id: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
