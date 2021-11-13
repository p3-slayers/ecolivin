const mongoose = require('mongoose');
const { Schema } = mongoose;

const Message = require(`./Message`);

const conversationSchema = new Schema({
  // array of Messages
  messages: [Message.schema],
  // array of Recipient ID's to identify who is involved in the conversation
  recipients: [String],
});

const Conversation = mongoose.model(`Conversation`, conversationSchema);

module.exports = Conversation;
