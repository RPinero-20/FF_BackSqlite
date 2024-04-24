"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userListOrdersModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.userListOrdersModel = connect_1.default.define('ff_order_details', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.NUMBER
    },
    userId: {
        type: sequelize_typescript_1.DataType.STRING
    },
    productsList: {
        type: sequelize_typescript_1.DataType.STRING
    },
    orderId: {
        type: sequelize_typescript_1.DataType.STRING
    },
    isOrderConfirmed: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    payNumber: {
        type: sequelize_typescript_1.DataType.STRING
    },
    isOrderPaid: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    bank: {
        type: sequelize_typescript_1.DataType.STRING
    },
    shippingAddress: {
        type: sequelize_typescript_1.DataType.STRING
    },
    depositorName: {
        type: sequelize_typescript_1.DataType.STRING
    },
    depositorPhone: {
        type: sequelize_typescript_1.DataType.STRING
    },
    currency: {
        type: sequelize_typescript_1.DataType.STRING
    },
    subtotal: {
        type: sequelize_typescript_1.DataType.STRING
    },
    discount: {
        type: sequelize_typescript_1.DataType.STRING
    },
    ivaUsd: {
        type: sequelize_typescript_1.DataType.STRING
    },
    igtf: {
        type: sequelize_typescript_1.DataType.STRING
    },
    totalBsd: {
        type: sequelize_typescript_1.DataType.STRING
    },
    totalUsd: {
        type: sequelize_typescript_1.DataType.STRING
    },
});
//# sourceMappingURL=userListOrders.js.map