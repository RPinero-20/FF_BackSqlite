import { DataType, Unique } from 'sequelize-typescript';
import db from '../db/connect';


export const Usuario = db.define('ff_users', {
    name: {
        type: DataType.STRING
    },
    idNumber: {
        type: DataType.NUMBER
    },
    email: {
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



export const Clients = db.define('ff_clients', {
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
        type: DataType.NUMBER
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
    codeId: {
        type: DataType.STRING
    },
    roles: {
        type:DataType.NUMBER
    }
}, {
    timestamps: false
});

export default Clients;