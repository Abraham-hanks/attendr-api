const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true,
  },
  departments: {
    type: Array,
  },
  level_code: {
    type: Number
  },
  semester_id: {
    type: String
  },
  no_of_classes: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
