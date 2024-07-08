"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./app/index"));
const app_config_1 = require("./app/app.config");
const mysql_1 = require("./app/database/mysql");
index_1.default.listen(app_config_1.APP_PORT, () => {
    console.log('Server run at 3000 🚀');
});
mysql_1.connection.connect(error => {
    if (error) {
        console.log("连接失败：", error.message);
        return;
    }
    console.log("success");
});
//# sourceMappingURL=main.js.map