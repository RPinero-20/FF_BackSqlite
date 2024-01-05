"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectToDB = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const db = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: './database/f_ferlestore.db'
});
function conectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.authenticate();
            console.log('DB is conected OK!!!');
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.conectToDB = conectToDB;
exports.default = db;
//# sourceMappingURL=connect.js.map