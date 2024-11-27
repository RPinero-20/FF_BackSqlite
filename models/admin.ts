import { DataType, Unique } from 'sequelize-typescript';
import db from '../db/connect';
import bcrypt from 'bcryptjs';


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


export const adminSections = db.define('ff_sections', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    // imageUrl: {
    //     type: DataType.STRING
    // },
}, {
    timestamps: false
});


export const adminCategory = db.define('ff_categories', {
    name: {
        type: DataType.STRING
    },
    sectionID: {
        type: DataType.NUMBER
    },
    description: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});


export const adminSalesUnits = db.define('ff_sales_units', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
    },
    name: {
        type: DataType.STRING
    }
}, {
    timestamps: false
});


export const adminStatusModel = db.define('ff_statuses', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
    },
    name: {
        type: DataType.STRING
    }
}, {
    timestamps: false
});


export const adminJobsModel = db.define('ff_jobs', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
    },
    code: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    description: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});


export const adminDepartmentsModel = db.define('ff_departments', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
    },
    code: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    description: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});


export const adminOrderStatusModel = db.define('ff_order_statuses', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
    },
    name: {
        type: DataType.STRING
    },
    code: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});


export const adminStatusIdentifiers = db.define('ff_status_identifiers', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
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
}, {
    timestamps: false
});

export const adminOrdersModel = db.define('ff_order_details', {
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
        type: DataType.NUMBER
    },
    isOrderPaid: {
        type: DataType.NUMBER
    },
    orderStatusId: {
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
        type: DataType.NUMBER
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
}, {
    timestamps: false
});


export const adminProducts = db.define('ff_products', {
    id: {
        primaryKey: true,
        type: DataType.NUMBER
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
    type: {
        type: DataType.STRING
    },
    byWeight: {
        type: DataType.BOOLEAN
    },
    weightPerUnit: {
        type: DataType.FLOAT
    },
    weightPerBox: {
        type: DataType.FLOAT,
    },
    byUnit: {
        type: DataType.BOOLEAN
    },
    unitQty: {
        type: DataType.NUMBER
    },
    saleUnitID: {
        type: DataType.NUMBER
    },
    unitPerBox: {
        type: DataType.NUMBER
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
    discount: {
        type: DataType.NUMBER
    },
    categoryID: {
        type: DataType.NUMBER
    },
    sectionID: {
        type: DataType.NUMBER
    },
    price: {
        type: DataType.DECIMAL
    },
});


export const adminUsers = db.define('ff_users', {
    id: {
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    uuid: {
        type: DataType.STRING,
    },
    name: {
        type: DataType.STRING
    },
    idNumber: {
        type: DataType.NUMBER
    },
    email: {
        type: DataType.STRING
    },
    password: {
        type: DataType.STRING
    },
    phone: {
        type: DataType.NUMBER
    },
    status: {
        type: DataType.BOOLEAN
    },
    job: {
        type: DataType.STRING
    },
    department: {
        type: DataType.STRING
    },
    address: {
        type: DataType.STRING
    }
}, {
    timestamps: false
});


export const adminClients = db.define('ff_clients', {
    uuid: {
        type: DataType.STRING,
        primaryKey: true,
    },
    rif: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    email: {
        type: DataType.STRING
    },
    phone: {
        type: DataType.STRING
    },
    phone2: {
        type: DataType.NUMBER
    },
    address: {
        type: DataType.STRING
    },
    represent: {
        type: DataType.STRING
    },
    password: {
        type: DataType.STRING
    },
    status: {
        type: DataType.BOOLEAN
    },
}, {
    timestamps: false
});

// ENCRIPTADO DE LA CLAVE PARA EL REGISTRO
export const encryptPassword = async (password: string) => {
    const trimmedPassword = password.trim(); // Eliminar espacios en blanco alrededor de la contraseña
    const salt = await bcrypt.genSalt(5);
    return await bcrypt.hash(trimmedPassword, salt)
};

//  Y COMPARACIÓN DE LA CLAVE PARA LOGIN
export const comparePassword = async (receivedPassword: string, savedPassword: string) => {
    const trimmedPassword = savedPassword.trim(); // Eliminar espacios en blanco alrededor de la contraseña
    const trimmedReceivedPassword = receivedPassword.trim(); // Eliminar espacios en blanco alrededor de la contraseña recibida
    console.log(trimmedPassword, trimmedReceivedPassword);
    return await bcrypt.compare(trimmedReceivedPassword, trimmedPassword);
    // return await bcrypt.compare(password, receivedPassword)
};

// export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

// export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
