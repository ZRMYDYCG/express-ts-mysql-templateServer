"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = async (request, response, next) => {
    console.log("👮🏼‍♂️ 验证用户数据");
    const { name, password } = request.body;
    if (!name)
        return next(new Error('👮🏼‍♂️ Name Is Required'));
    if (!password)
        return next(new Error('👮🏼‍♂️ Password Is Required'));
    next();
};
//# sourceMappingURL=user.middleware.js.map