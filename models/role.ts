import { DataTypes } from "sequelize";
import db from '../db/connect';


const roleSchema = db.define('ff_roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    access: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false
});

export default roleSchema;
// export default Model("Role", roleSchema);