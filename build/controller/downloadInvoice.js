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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoice = void 0;
const path_1 = __importDefault(require("path"));
const getInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dominio = req.get('host');
    const directorioActual = process.cwd();
    const fileName = 'odc_ferle_.xlsx';
    const rutaArchivo = path_1.default.join(directorioActual, '/src', fileName);
    console.log('HOST: ', dominio);
    console.log('Directorio actual:', directorioActual);
    console.log('Ruta del archivo:', rutaArchivo);
    res.download(rutaArchivo);
});
exports.getInvoice = getInvoice;
//# sourceMappingURL=downloadInvoice.js.map