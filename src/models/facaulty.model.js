const mongoose = require('mongoose');

const facaultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Facaulty name cannot be blank'],
    unique: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Facaulty', facaultySchema);
