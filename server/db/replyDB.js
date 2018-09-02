const mongoose = require('mongoose');
const Reply = require('../models/reply');

export const getAllReplies = async () => await Reply.find().sort({seq:-1});

export const getReplies = async (postId) => {
    console.log(postId);
    return await Reply.find({postId:postId}).sort({seq:-1});
}

export const getReply = async (id) => await Reply.findById(id);

export const addReply = (seq,
                         reply,
                         postId,
                         authorId) => {
    let newReply = new Reply({
        seq: seq,
        reply: reply,
        postId: postId,
        authorId: authorId
    });
    return newReply.save();
}