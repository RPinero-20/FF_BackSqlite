"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestSession = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.guestSession = connect_1.default.define('ff_client_sessions', {
    id: {
        type: sequelize_typescript_1.DataType.NUMBER,
        primaryKey: true
    },
    uuid: {
        type: sequelize_typescript_1.DataType.STRING,
        unique: true
    },
    validToken: {
        type: sequelize_typescript_1.DataType.STRING
    },
});
//# sourceMappingURL=clientSession.js.map