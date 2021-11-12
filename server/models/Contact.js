const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({});

const Contact = mongoose.model(`Contact`, contactSchema);

module.exports = Contact;
