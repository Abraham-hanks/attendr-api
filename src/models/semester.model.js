const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Semester name cannot be blank'],
    unique: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Semester', semesterSchema);
