import { DataType } from 'sequelize-typescript';
import db from '../db/connect';
import { STRING } from 'sequelize';

// OJO PAYRESUME ES TIPO JSON PARA MARIADB, PARA SQLITE3 TIPO TEXT
export const cartListpreOrder = db.define('ff_pre_orders', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER,
        autoIncrement: true
    },
    userId: {
        type: DataType.STRING
    },
    payResume: {
        type: DataType.TEXT
    }
}, {
    timestamps: false
});


export const cartListOrderDetailModel = db.define('ff_order_details', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
    },
    userId: {
        type: DataType.STRING
    },
    productsList: {
        type: DataType.STRING
    },
    orderId: {
        type: DataType.STRING
    },
    isOrderConfirmed: {
        type: DataType.NUMBER // 0 no / 1 si
    },
    payNumber: {
        type: DataType.NUMBER
    },
    isOrderPaid: {
        type: DataType.BOOLEAN
    },
    bank: {
        type: DataType.STRING
    },
	shippingAddress: {
        type: DataType.STRING
    },
    depositorName: {
        type: DataType.STRING
    },
    depositorPhone: {
        type: DataType.STRING
    },
    currency: {
        type: DataType.STRING
    },
    subtotal: {
        type: DataType.NUMBER
    },
    discount: {
        type: DataType.NUMBER
    },
    ivaUsd: {
        type: DataType.NUMBER
    },
	igtf: {
        type: DataType.NUMBER
    },
	totalBsd: {
        type: DataType.NUMBER
    },
    totalUsd: {
        type: DataType.NUMBER
    }
},{
    timestamps: false,
});

export const cartListProducts = db.define('ff_products', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    code: {
        type: DataType.STRING
    },
    unitQty: {
        type: DataType.INTEGER
    },
    unitPerBox: {
        type: DataType.INTEGER
    },
    isOffer: {
        type: DataType.NUMBER
    },
    isFree: {
        type: DataType.BOOLEAN
    },
    isOutStock: {
        type: DataType.BOOLEAN
    },
    price: {
        type: DataType.DECIMAL
    },
});
