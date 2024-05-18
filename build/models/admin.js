"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminClients = exports.adminUsers = exports.adminProducts = exports.adminDepartmentsModel = exports.adminJobsModel = exports.adminSalesUnits = exports.adminCategory = exports.adminSections = exports.sectionsHome = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.sectionsHome = connect_1.default.define('ff_sections', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.adminSections = connect_1.default.define('ff_sections', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.adminCategory = connect_1.default.define('ff_categories', {
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    sectionID: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    description: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.adminSalesUnits = connect_1.default.define('ff_sales_units', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.NUMBER
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    }
}, {
    timestamps: false
});
exports.adminJobsModel = connect_1.default.define('ff_jobs', {
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
    description: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.adminDepartmentsModel = connect_1.default.define('ff_departments', {
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
    description: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.adminProducts = connect_1.default.define('ff_products', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.NUMBER
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
    type: {
        type: sequelize_typescript_1.DataType.STRING
    },
    byWeight: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    weightPerUnit: {
        type: sequelize_typescript_1.DataType.FLOAT
    },
    weightPerBox: {
        type: sequelize_typescript_1.DataType.FLOAT,
    },
    byUnit: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    unitQty: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    unitPerBox: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    description: {
        type: sequelize_typescript_1.DataType.STRING
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
    discount: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    categoryID: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    sectionID: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    price: {
        type: sequelize_typescript_1.DataType.DECIMAL
    },
});
exports.adminUsers = connect_1.default.define('ff_users', {
    id: {
        type: sequelize_typescript_1.DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    uuid: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    idNumber: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING
    },
    password: {
        type: sequelize_typescript_1.DataType.STRING
    },
    phone: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    status: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    job: {
        type: sequelize_typescript_1.DataType.STRING
    },
    department: {
        type: sequelize_typescript_1.DataType.STRING
    },
    address: {
        type: sequelize_typescript_1.DataType.STRING
    }
}, {
    timestamps: false
});
exports.adminClients = connect_1.default.define('ff_clients', {
    uuid: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
    },
    rif: {
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING
    },
    phone: {
        type: sequelize_typescript_1.DataType.STRING
    },
    phone2: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    address: {
        type: sequelize_typescript_1.DataType.STRING
    },
    represent: {
        type: sequelize_typescript_1.DataType.STRING
    },
    password: {
        type: sequelize_typescript_1.DataType.STRING
    },
    status: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
}, {
    timestamps: false
});
//# sourceMappingURL=admin.js.map