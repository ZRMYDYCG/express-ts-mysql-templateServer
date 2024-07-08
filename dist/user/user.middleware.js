"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userService = __importStar(require("./user.server"));
exports.validateUserData = async (request, response, next) => {
    console.log("👮🏼‍♂️ 验证用户数据");
    const { name, password } = request.body;
    if (!name)
        return next(new Error('Name_Is_Required'));
    if (!password)
        return next(new Error('Password_Is_Required'));
    const user = await userService.getUserByName(name);
    if (user) {
        return next(new Error('UserName_IS_Exited'));
    }
    next();
};
exports.hashPassword = async (request, response, next) => {
    const { password } = request.body;
    request.body.password = await bcrypt_1.default.hash(password, 10);
    next();
};
//# sourceMappingURL=user.middleware.js.map