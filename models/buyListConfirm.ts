import { DataType } from "sequelize-typescript";
import db from '../db/connect';
import { NUMBER } from "sequelize";


export const orderDetailConfirmedModel = db.define('ff_order_details', {
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
    payNumber: {
        type: DataType.STRING
    },
    isOrderPaid: {
        type: DataType.STRING
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
}, {
    timestamps: false
});


export const buyListConfirm = db.define('ff_products', {
    id: {
        primaryKey: true,
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


export const lastBuyListConfirmedModel = db.define('ff_products', {
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
        type:DataType.STRING
    },
    price: {
        type: DataType.STRING
    }
})


export const isOrderConfirmedModel = db.define('ff_order_details', {
    orderId: {
        type: DataType.STRING
    },
    isOrderConfirmed: {
        type: DataType.NUMBER
    }
}, {
    timestamps: false
});


export const paymentDetailsModel = db.define('ff_payment_detail', {
    bankName: {
        type: DataType.STRING,
    },
    bankAccount: {
        type: DataType.STRING,
    }
}, {
    timestamps: false
});

export const companyDetailsModel = db.define('ff_companies', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
    },
    rif: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    phone: {
        type: DataType.STRING
    },
    mail: {
        type: DataType.STRING
    },
    address: {
        type: DataType.STRING
    }
}, {
    timestamps: false
})

export const orderPayModel = db.define('ff_order_details', {
    orderId: {
        type: DataType.STRING
    },
    currency: {
        type: DataType.NUMBER
    },
    totalBsd: {
        type: DataType.STRING
    },
    totalUsd: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});

export const orderProductsConfirmedModel = db.define('ff_products', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    // imageUrl: {
    //     type: DataType.STRING
    // },
    // name: {
    //     type: DataType.STRING
    // },
    // code: {
    //     type: DataType.STRING
    // },
    // type: {
    //     type: DataType.STRING
    // },
    // byWeight: {
    //     type: DataType.BOOLEAN
    // },
    // weightPerUnit: {
    //     type: DataType.FLOAT
    // },
    // weightPerBox: {
    //     type: DataType.FLOAT,
    // },
    // byUnit: {
    //     type: DataType.BOOLEAN
    // },
    unitQty: {
        type: DataType.INTEGER
    },
    // unitPerBox: {
    //     type: DataType.INTEGER
    // },
    // description: {
    //     type: DataType.STRING
    // },
    // isOffer: {
    //     type: DataType.NUMBER
    // },
    // isFree: {
    //     type: DataType.BOOLEAN
    // },
    // isOutStock: {
    //     type: DataType.BOOLEAN
    // },
    // discount: {
    //     type: DataType.NUMBER
    // },
    // categoryID: {
    //     type: DataType.INTEGER
    // },
    // sectionID: {
    //     type: DataType.INTEGER
    // },
    // price: {
    //     type: DataType.DECIMAL
    // },
}, {
    timestamps: false
});
