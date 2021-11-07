const mongoose = require('mongoose');

const { Schema } = mongoose;

// answers to the questions, will give a number so that we can calculate the total score
const answersSchema = new Schema({
  answer: {
    type: Number,
    required: true
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Questionnaire',
    },
  ],
});

const Answer = mongoose.model('Answer', answersSchema);

module.exports = Answer;
