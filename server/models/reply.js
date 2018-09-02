const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    seq:Number,
    reply:String,
    postId:String,
    authorId:String
});

module.exports = mongoose.model('Reply',replySchema);