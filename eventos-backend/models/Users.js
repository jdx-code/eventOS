const mongoose = require('mongoose');

// Create the database schema for the particular collection
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the access to our collection

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;