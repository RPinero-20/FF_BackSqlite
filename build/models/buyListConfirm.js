"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProductsConfirmedModel = exports.orderPayModel = exports.companyDetailsModel = exports.paymentDetailsModel = exports.isOrderConfirmedModel = exports.lastBuyListConfirmedModel = exports.buyListConfirm = exports.orderDetailConfirmedModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.orderDetailConfirmedModel = connect_1.default.define('ff_order_details', {
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
    payNumber: {
        type: sequelize_typescript_1.DataType.STRING
    },
    isOrderPaid: {
        type: sequelize_typescript_1.DataType.STRING
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
}, {
    timestamps: false
});
exports.buyListConfirm = connect_1.default.define('ff_products', {
    id: {
        primaryKey: true,
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
exports.lastBuyListConfirmedModel = connect_1.default.define('ff_products', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl: {
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    code: {
        type: sequelize_typescript_1.DataType.STRING
    },
    price: {
        type: sequelize_typescript_1.DataType.STRING
    }
});
exports.isOrderConfirmedModel = connect_1.default.define('ff_order_details', {
    orderId: {
        type: sequelize_typescript_1.DataType.STRING
    },
    isOrderConfirmed: {
        type: sequelize_typescript_1.DataType.NUMBER
    }
}, {
    timestamps: false
});
exports.paymentDetailsModel = connect_1.default.define('ff_payment_detail', {
    bankName: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    bankAccount: {
        type: sequelize_typescript_1.DataType.STRING,
    }
}, {
    timestamps: false
});
exports.companyDetailsModel = connect_1.default.define('ff_companies', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.NUMBER
    },
    rif: {
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    phone: {
        type: sequelize_typescript_1.DataType.STRING
    },
    mail: {
        type: sequelize_typescript_1.DataType.STRING
    },
    address: {
        type: sequelize_typescript_1.DataType.STRING
    }
}, {
    timestamps: false
});
exports.orderPayModel = connect_1.default.define('ff_order_details', {
    orderId: {
        type: sequelize_typescript_1.DataType.STRING
    },
    currency: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    totalBsd: {
        type: sequelize_typescript_1.DataType.STRING
    },
    totalUsd: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.orderProductsConfirmedModel = connect_1.default.define('ff_products', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    unitQty: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
}, {
    timestamps: false
});
//# sourceMappingURL=buyListConfirm.js.map