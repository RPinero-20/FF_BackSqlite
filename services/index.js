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
exports.exportToFile = void 0;
const path_1 = __importDefault(require("path"));
const xlsx_populate_1 = __importDefault(require("xlsx-populate"));
function exportToFile(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPath = process.cwd();
        console.log('DATA :::: ', data);
        const orderId = data.orderId;
        const dateOrder = data.updatedAt;
        const productCode = data.codes;
        const productNames = data.name;
        const productQty = data.quantity;
        const productPrices = data.prices;
        const amountByQty = data.amounts;
        const selectedCurrency = data.currency;
        const subtotal = data.subtotal;
        const totalPay = data.totalPay;
        const fileName = `./services/model/odc_ferle_order_${orderId}.xlsx`;
        const workbook = yield xlsx_populate_1.default.fromFileAsync("./services/model/odc_ferle.xlsx");
        workbook.sheet('odc').cell('F2').value(orderId);
        workbook.sheet('odc').cell('F3').value(dateOrder);
        for (let i = 0; i < productCode.length; i++) {
            const rowIndex = 9 + i;
            workbook.sheet('odc').cell(`B${rowIndex}`).value(productCode[i]);
            workbook.sheet('odc').cell(`C${rowIndex}`).value(productNames[i]);
            workbook.sheet('odc').cell(`D${rowIndex}`).value(productQty[i]);
            workbook.sheet('odc').cell(`E${rowIndex}`).value(productPrices[i]);
            workbook.sheet('odc').cell(`F${rowIndex}`).value(amountByQty[i]);
        }
        workbook.sheet('odc').cell('C22').value(`Tipo de moneda seleccionada: ${selectedCurrency}`);
        workbook.sheet('odc').cell('F22').value(subtotal);
        workbook.sheet('odc').cell('F24').value(totalPay);
        yield workbook.toFileAsync(fileName);
        return fileName;
    });
}
exports.exportToFile = exportToFile;
//# sourceMappingURL=index.js.map