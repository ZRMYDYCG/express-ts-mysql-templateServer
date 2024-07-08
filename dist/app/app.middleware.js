"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestUrl = (request, response, next) => {
    console.log(request.url);
    next();
};
exports.defaultErrorHandler = (error, request, response, next) => {
    if (error.message) {
        console.log('🦠', error.message);
    }
    let statusCode, message;
    switch (error.message) {
        case 'Name_Is_Required':
            statusCode = 400;
            message = '请提供用户名';
            break;
        case 'Password_Is_Required':
            statusCode = 400;
            message = '请提供用户密码';
            break;
        case 'UserName_IS_Exited':
            statusCode = 409;
            message = '用户名已被占用';
        case 'USER_DOES_NOT_EXOST':
            statusCode = 400;
            message = '用户不存在';
        case 'PASSWORD_DOES_NOT_MATCH':
            statusCode = 400;
            message = '密码不正确';
        default:
            statusCode = 500;
            message = "服务器暂时出了点问题";
            break;
    }
    response.status(statusCode).send({ message });
};
//# sourceMappingURL=app.middleware.js.map