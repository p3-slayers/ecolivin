const mongoose = require('mongoose');

const { Schema } = mongoose;

const resultsSchema = new Schema({
  food: {
    type: Number,
    required: true
  },
  transportation: {
    type: Number,
    required: true
  },
  waste: {
    type: Number,
    required: true
  },
  housing: {
    type: Number,
    required: true
  },
  lifestyle: {
    type: Number,
    required: true
  },

});

const Result = mongoose.model('Result', resultsSchema);

module.exports = Result;
