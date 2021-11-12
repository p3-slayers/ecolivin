const User = require('./User');
const Questionnaire = require('./Questionnaire');
const Category = require('./Category');
const Answer = require('./Answer');
const Action = require('./Action');
const ActionAnswer = require('./ActionAnswer');
const Post = require('./Post');

const { Contact, Conversation, Message } = require(`./messengerSchemas`);

module.exports = {
  User,
  Questionnaire,
  Category,
  Answer,
  Action,
  ActionAnswer,
  Post,
  Contact,
  Conversation,
  Message,
};
