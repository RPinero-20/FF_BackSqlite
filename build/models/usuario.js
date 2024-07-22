"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = exports.Usuario = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.Usuario = connect_1.default.define('ff_users', {
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    idNumber: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING
    },
    phone: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    status: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    job: {
        type: sequelize_typescript_1.DataType.STRING
    },
    department: {
        type: sequelize_typescript_1.DataType.STRING
    },
    address: {
        type: sequelize_typescript_1.DataType.STRING
    }
}, {
    timestamps: false
});
exports.Clients = connect_1.default.define('ff_clients', {
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
exports.default = exports.Clients;
//# sourceMappingURL=usuario.js.map