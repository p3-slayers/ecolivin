const mongoose = require('mongoose');

const { Schema } = mongoose;

const resultsSchema = new Schema({
  Food: {
    type: Number,
    required: true
  },
  Transportation: {
    type: Number,
    required: true
  },
  Waste: {
    type: Number,
    required: true
  },
  Housing: {
    type: Number,
    required: true
  },
  Lifestyle: {
    type: Number,
    required: true
  },

});

const Results = mongoose.model('Answer', resultsSchema);

module.exports = Results;
