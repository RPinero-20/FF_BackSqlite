"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const connect_1 = __importDefault(require("../db/connect"));
exports.Usuario = connect_1.default.define('ff_users', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
});
exports.Clients = connect_1.default.define('ff_clients', {
    rif: {
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.default = exports.Clients;
//# sourceMappingURL=usuario.js.map