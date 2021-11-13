const mongoose = require('mongoose');

const { Schema } = mongoose;

// answers to the questions, will give a number so that we can calculate the total score
const actionsSchema = new Schema({
    actionId: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
});

const Action = mongoose.model('Action', actionsSchema);

module.exports = Action;
