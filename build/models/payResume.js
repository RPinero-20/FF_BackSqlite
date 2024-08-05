"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartListProducts = exports.cartListOrderDetailModel = exports.cartListpreOrder = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.cartListpreOrder = connect_1.default.define('ff_pre_orders', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.NUMBER
    },
    userId: {
        type: sequelize_typescript_1.DataType.STRING
    },
    payResume: {
        type: sequelize_typescript_1.DataType.TEXT
    }
}, {
    timestamps: false
});
exports.cartListOrderDetailModel = connect_1.default.define('ff_order_details', {
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
        type: sequelize_typescript_1.DataType.NUMBER
    },
    isOrderPaid: {
        type: sequelize_typescript_1.DataType.BOOLEAN
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
        type: sequelize_typescript_1.DataType.NUMBER
    },
    discount: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    ivaUsd: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    igtf: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    totalBsd: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    totalUsd: {
        type: sequelize_typescript_1.DataType.NUMBER
    }
}, {
    timestamps: false,
});
exports.cartListProducts = connect_1.default.define('ff_products', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    code: {
        type: sequelize_typescript_1.DataType.STRING
    },
    unitQty: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    unitPerBox: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    isOffer: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    isFree: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    isOutStock: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    price: {
        type: sequelize_typescript_1.DataType.DECIMAL
    },
});
//# sourceMappingURL=payResume.js.map