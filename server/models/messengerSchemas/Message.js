const mongoose = require('mongoose');

const { Schema } = mongoose;

// Sender represents the ID of the User who sent the message.
// I don't think sender needs to be set up as a ref as it is not directly relevant to that user- it is stored in a particular conversation and all this does is allow the client logic to know who is who. Conversations are linked to the user via the recipients array.

// Text represents the body of the sent message.
const messageSchema = new Schema({
  sender: String,
  text: String,
});

const Message = mongoose.model(`Message`, messageSchema);

module.exports = Message;
