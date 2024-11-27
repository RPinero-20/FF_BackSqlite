import { DataType } from 'sequelize-typescript';
import db from '../db/connect';


export const guestSession = db.define('ff_client_sessions', {
    id: {
        type: DataType.NUMBER,
        primaryKey: true
    },
    uuid: {
        type: DataType.STRING,
        unique: true
    },
    validToken: {
        type: DataType.STRING
    },
    isLogged: {
        type: DataType.NUMBER
    },
});

