const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Answer = require('./Answer');
const ActionAnswer = require('./ActionAnswer');

const { Conversation, Contact } = require('./messengerSchemas');

// Creating a user with the given information needed
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  profileImage: {
    type: String,
    default: "https://fullstacknomadimages.s3.us-east-2.amazonaws.com/1632419515031-defaultProfilePicture.png"
  },
  contacts: [Contact.schema],
  // these are the answers from the questionnaire
  answers: [Answer.schema],
  actionAnswers: [ActionAnswer.schema],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();
  if (!update.password) {
    next();
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(update.password, salt, (err, hash) => {
        this.getUpdate().password = hash;
        next();
      })
    })
  }
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
