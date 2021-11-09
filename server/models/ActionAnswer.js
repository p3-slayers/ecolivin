const mongoose = require('mongoose');

const { Schema } = mongoose;

// users commitments to the frequency of action in each day
const actionAnswersSchema = new Schema({
  mondayAnswer: {
    type: Number,
    default: 0
  },
  tuesdayAnswer: {
    type: Number,
    default: 0
  },

  wednesdayAnswer: {
    type: Number,
    default: 0
  },

  thursdayAnswer: {
    type: Number,
    default: 0
  },

  fridayAnswer: {
    type: Number,
    default: 0
  },

  saturdayAnswer: {
    type: Number,
    default: 0
  },

  sundayAnswer: {
    type: Number,
    default: 0
  },

  actions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Action',
    },
  ],
});

const ActionAnswer = mongoose.model('ActionAnswer', actionAnswersSchema);

module.exports = ActionAnswer;
