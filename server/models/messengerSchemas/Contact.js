const mongoose = require('mongoose');

const { Schema } = mongoose;

// setting these as strings as the _id property will be added automatically. "id" references the _id of the OTHER user (who is a contact for the user of whom this object will be stored with.) The logic in the app will pass both of these values down as a string and it is important for the logic that the name of each of these fields exactly matches the logic in the client messenger page.
const contactSchema = new Schema({
  id: String,
  name: String,
});

const Contact = mongoose.model(`Contact`, contactSchema);

module.exports = Contact;
