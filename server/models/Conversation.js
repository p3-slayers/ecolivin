const mongoose = require('mongoose');

const { Schema } = mongoose;

const conversationSchema = new Schema({});

const Conversation = mongoose.model(`Contact`, conversationSchema);

module.exports = Conversation;
