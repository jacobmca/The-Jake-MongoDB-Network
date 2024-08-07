const { Schema, model } = require('mongoose');

// Schema for what makes up an email
const emailSchema = new Schema({
    email: String
});

// Initialize the Email Model
