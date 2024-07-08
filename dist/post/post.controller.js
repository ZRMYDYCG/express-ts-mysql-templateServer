"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_server_1 = require("./post.server");
exports.index = async (request, response, next) => {
    try {
        const posts = await post_server_1.getPosts();
        response.send(posts);
    }
    catch (error) {
        next(error);
    }
};
exports.store = async (request, response, next) => {
    const { title, content } = request.body;
    try {
        const data = await post_server_1.createPost({ title, content });
        response.status(201).send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.update = async (request, response, next) => {
    const { postId } = request.params;
    const { title, content } = request.body;
    try {
        const data = await post_server_1.updatePost(parseInt(postId, 10), { title, content });
        response.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = async (request, response, next) => {
    const { postId } = request.params;
    try {
        const data = await post_server_1.deletePost(parseInt(postId, 10));
        response.send(data);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=post.controller.js.map