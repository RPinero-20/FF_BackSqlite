"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excCurrenciesModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.excCurrenciesModel = connect_1.default.define('ff_exc_currencies', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.NUMBER
    },
    code: {
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    symbol: {
        type: sequelize_typescript_1.DataType.STRING
    },
    value: {
        type: sequelize_typescript_1.DataType.DECIMAL
    }
});
//# sourceMappingURL=currency.js.map