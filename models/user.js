const { Schema, model } = require('mongoose');

// Schema for User model
const usernameSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match a valid email address'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// Virtual for friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize the Email Model
const User = model('User', usernameSchema);

module.exports = User;
