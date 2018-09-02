import { getUsers, getUser, addUser, getAuthor } from '../db/userDB';
import { getPosts, getPostsByMe, getPost, addPost } from '../db/postDB';
import { getAllReplies, getReplies, addReply } from '../db/replyDB';

const mongoose = require('mongoose');

const resolvers = {
    Query:{
        users: async () => await getUsers(),
        user: async (_,{id}) => await getUser(id),
        posts: async () => await getPosts(),
        post: async (_,{id}) => await getPost(id),
        replies: async () => await getAllReplies()
    },
    Mutation:{
        addUser : async (_,{seq, name, part, mod, level, charge}) => await addUser(seq, name, part, mod, level, charge),
        addPost : async (_,{seq, cDate, tDate, title, content, shareType, authorId}) => await addPost(seq, cDate, tDate, title, content, shareType, authorId),
        addReply : async (_,{seq, reply, postId, authorId}) => await addReply(seq, reply, postId, authorId)
    },
    Post:{
        author : async (post,{}) => await getUser(post.authorId),
        replies : async (post,{}) => await getReplies(post.id)
    },
    User:{
        posts: async (user,{}) => await getPostsByMe(user.id)
    },
};

export default resolvers;