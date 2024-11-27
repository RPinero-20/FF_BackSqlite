import { DataType } from "sequelize-typescript";
import db from "../db/connect";

export const userListOrdersModel = db.define('ff_order_details', {
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
        type: DataType.NUMBER
    },
    payNumber: {
        type: DataType.STRING
    },
    isOrderPaid: {
        type: DataType.NUMBER
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
        type: DataType.STRING
    },
    discount: {
        type: DataType.STRING
    },
    ivaUsd: {
        type: DataType.STRING
    },
    igtf: {
        type: DataType.STRING
    },
    totalBsd: {
        type: DataType.STRING
    },
    totalUsd: {
        type: DataType.STRING
    },
});

