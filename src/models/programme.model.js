const mongoose = require('mongoose');

const programmeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Programme name cannot be blank'],
    unique: true,
  },
  department_id: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Programme', programmeSchema);
