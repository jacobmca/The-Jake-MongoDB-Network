const { Schema, model } = require('mongoose');
const moment = require('moment');

// Schema for Reaction subdocument
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
    },
},
{
    toJSON: {
        getters: true,
    },
});

// Schema for Thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

// Virtual for length of thought reactions

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Initialize the Thoughts Model
const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
