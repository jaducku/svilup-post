const mongoose = require('mongoose');
const User = require('../models/user');

export const getUsers = async () => await User.find({}).sort({seq:1});

export const getUser = async (id) => await User.findById(id);

export const addUser = (seq,
                        name,
                        part, 
                        mod, 
                        level, 
                        charge) => {
    let newUser = new User({
        seq: seq,
        name: name,
        part: part,
        mod: mod,
        level: level,
        charge: charge
    });
    return newUser.save();
}