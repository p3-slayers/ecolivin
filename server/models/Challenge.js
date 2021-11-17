const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const challengeSchema = new Schema({
   challengeId: {
       type: String,
       required: true
   },
    user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  challenge: {
    type: String,
    required: true
  },
  dateStart: {
    type: Date,
  },
  dateEnd: {
    type: Date,
  }
});


const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;