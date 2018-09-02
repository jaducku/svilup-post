const mongoose = require('mongoose');
const Post = require('../models/post');

export const getPosts = async () => await Post.find({}).sort({seq:1});

export const getPost = async (id) => await Post.findById(id);

export const getPostsByMe = async (id) => await Post.find({authorId:id}).sort({seq:-1});

export const addPost = (seq,
                        cDate,
                        tDate, 
                        title, 
                        content, 
                        shareType,
                        authorId) => {
    let newPost = new Post({
        seq: seq,
        cDate: cDate,
        tDate: tDate,
        title: title,
        content: content,
        shareType: shareType,
        authorId: authorId
    });
    return newPost.save();
}