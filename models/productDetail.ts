import { DataType } from "sequelize-typescript";
import db from "../db/connect";

export const productImageUrls = db.define('ff_product_images', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    productCode: {
        type: DataType.STRING
    },
    imageUrl1: {
        type: DataType.STRING
    },
    imageUrl2: {
        type: DataType.STRING
    },
    imageUrl3: {
        type: DataType.STRING
    },
    imageUrl4: {
        type: DataType.STRING
    },
    imageUrl5: {
        type: DataType.STRING
    },
    imageUrl6: {
        type: DataType.STRING
    },
    imageUrl7: {
        type: DataType.STRING
    },
});

export const productPriceCode = db.define('ff_products', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    price: {
        type: DataType.STRING
    },
    code: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
});

export const productDetails = db.define('ff_products', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    imageUrl: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    code: {
        type: DataType.STRING
    },
    description: {
        type: DataType.STRING
    },
    longDescription: {
        type: DataType.STRING
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
    categoryID: {
        type: DataType.INTEGER
    },
    sectionID: {
        type: DataType.INTEGER
    },
    price: {
        type: DataType.DECIMAL
    },
}, {
    timestamps: false
});

