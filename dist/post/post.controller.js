"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_server_1 = require("./post.server");
exports.index = (request, response, next) => {
    if (request.headers.authorization !== 'SECRET') {
        return next(new Error());
    }
    const posts = post_server_1.getPosts();
    response.send(posts);
};
//# sourceMappingURL=post.controller.js.map