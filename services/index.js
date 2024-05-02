import path from "path";
import XlsxPopulate from "xlsx-populate";


export async function exportToFile(data) {
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
    const workbook = await XlsxPopulate.fromFileAsync("./services/model/odc_ferle.xlsx");
    workbook.sheet('odc').cell('F2').value(orderId);
    workbook.sheet('odc').cell('F3').value(dateOrder);

    for (let i = 0; i < productCode.length; i++) {
        const rowIndex = 9 + i; // Calcula el índice de fila basado en i

        workbook.sheet('odc').cell(`B${rowIndex}`).value(productCode[i]);
        workbook.sheet('odc').cell(`C${rowIndex}`).value(productNames[i]);
        workbook.sheet('odc').cell(`D${rowIndex}`).value(productQty[i]);
        workbook.sheet('odc').cell(`E${rowIndex}`).value(productPrices[i]);
        workbook.sheet('odc').cell(`F${rowIndex}`).value(amountByQty[i]);
    }


    workbook.sheet('odc').cell('C22').value(`Tipo de moneda seleccionada: ${selectedCurrency}`);
    workbook.sheet('odc').cell('F22').value(subtotal);
    workbook.sheet('odc').cell('F24').value(totalPay);

    await workbook.toFileAsync(fileName);

    return fileName;
}
