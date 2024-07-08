"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService = __importStar(require("./post.server"));
exports.index = async (request, response, next) => {
    try {
        const posts = await userService.getPosts();
        response.send(posts);
    }
    catch (error) {
        next(error);
    }
};
exports.store = async (request, response, next) => {
    const { title, content } = request.body;
    try {
        const data = await userService.createPost({ title, content });
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
        const data = await userService.updatePost(parseInt(postId, 10), { title, content });
        response.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = async (request, response, next) => {
    const { postId } = request.params;
    try {
        const data = await userService.deletePost(parseInt(postId, 10));
        response.send(data);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=post.controller.js.map