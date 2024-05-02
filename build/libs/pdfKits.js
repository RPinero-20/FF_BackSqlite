"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPDF = void 0;
const pdfkit_table_1 = __importDefault(require("pdfkit-table"));
function buildPDF(dataCallback, info, endCallback) {
    const doc = new pdfkit_table_1.default();
    console.log("TESTING INFO::: ", info);
    doc.on('data', dataCallback);
    doc.fontSize(16).text(`Orden de compra: ${info}`, { align: "right" });
    const table = {
        headers: [
            { label: "Código", property: 'code', width: 60, renderer: null },
            { label: "Descripción", property: 'name', width: 150, renderer: null },
            { label: "Precio unitario", property: 'price', width: 100, renderer: null },
            { label: "Cantidad", property: 'qty', width: 80, renderer: null },
            { label: "Sub-total", property: 'subTotal', width: 100, renderer: null },
        ],
        datas: [
            { name: 'Tablero de madera contrachapada. ', qty: '7', price: '$29.99', subTotal: '$209.93', code: 'MC001' },
            { name: 'Escuadra de carpintero', qty: '5', code: 'SQU005', price: '$6.99', subTotal: '$34.95' },
            { name: 'Formón de carpintero', code: 'CHI003', price: '$8.99', qty: '7', subTotal: '$62.93', options: { fontSize: 10, separation: true } },
            { name: 'bold:Total a pagar', subTotal: 'bold:$307.81' },
        ],
    };
    doc.table(table, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow) => doc.font("Helvetica").fontSize(8),
    });
    doc.end();
    doc.on('end', () => { endCallback(); });
}
exports.buildPDF = buildPDF;
//# sourceMappingURL=pdfKits.js.map