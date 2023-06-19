const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Department name cannot be blank'],
    unique: true,
  },
  facaulty_id: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Department', departmentSchema);
