const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    seq:Number,
    name:String,
    part:String,
    mod:String,
    level:String,
    charge:String
});

module.exports = mongoose.model('User',userSchema);