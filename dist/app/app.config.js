"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.APP_PORT = process.env.APP_PORT;
_a = process.env, exports.MYSQL_HOST = _a.MYSQL_HOST, exports.MYSQL_PORT = _a.MYSQL_PORT, exports.MYSQL_USER = _a.MYSQL_USER, exports.MYSQL_PASSWORD = _a.MYSQL_PASSWORD, exports.MYSQL_DATABASE = _a.MYSQL_DATABASE;
exports.PRIVATE_KEY = Buffer.from(process.env.PRIVATE_KEY, 'base64').toString('utf-8');
exports.PUBLIC_KEY = Buffer.from(process.env.PUBLIC_KEY, 'base64').toString('utf-8');
//# sourceMappingURL=app.config.js.map