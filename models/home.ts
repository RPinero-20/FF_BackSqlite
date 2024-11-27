import { DataType } from 'sequelize-typescript';
import db from '../db/connect';


export const sectionsHome = db.define('ff_sections', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    imageUrl: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});


export const productsHome = db.define('ff_products', {
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

// export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

// export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
