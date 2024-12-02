"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsUsers = exports.clientSession = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.clientSession = connect_1.default.define('ff_client_sessions', {
    id: {
        type: sequelize_typescript_1.DataType.NUMBER,
        primaryKey: true
    },
    uuid: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    validToken: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    isLogged: {
        type: sequelize_typescript_1.DataType.NUMBER,
    },
});
exports.clientsUsers = connect_1.default.define('ff_clients', {
    uuid: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
    },
    rif: {
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING
    },
    phone: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    phone2: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    address: {
        type: sequelize_typescript_1.DataType.STRING
    },
    represent: {
        type: sequelize_typescript_1.DataType.STRING
    },
    password: {
        type: sequelize_typescript_1.DataType.STRING
    },
    status: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    codeId: {
        type: sequelize_typescript_1.DataType.STRING
    },
    roles: {
        type: sequelize_typescript_1.DataType.NUMBER
    }
}, {
    timestamps: false
});
exports.default = exports.clientsUsers;
//# sourceMappingURL=userProfileModel.js.map