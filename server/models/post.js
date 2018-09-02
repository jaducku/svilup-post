const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    seq:Number,
    cDate:String,
    tDate:String,
    title:String,
    content:String,
    shareType:String,
    authorId:String
});

module.exports = mongoose.model('Post',postSchema);