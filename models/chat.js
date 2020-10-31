var mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    room: String,
    nickname: String,
    message: String,
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Chat', chatSchema);