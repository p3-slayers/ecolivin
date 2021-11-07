const mongoose = require('mongoose');

const { Schema } = mongoose;

// questionnaire when an account is created or when a user wants to redo the questionnaire. Gives the text of the question and the category that the question belongs to
const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Questionnaire = mongoose.model('Questionnaire', questionSchema);

module.exports = Questionnaire;
