"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect_1 = __importDefault(require("../db/connect"));
const roleSchema = connect_1.default.define('ff_roles', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    access: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false
});
exports.default = roleSchema;
//# sourceMappingURL=role.js.map