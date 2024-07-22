import PDFDocument from 'pdfkit-table';

export function buildPDF(dataCallback, info, endCallback) {
    const doc = new PDFDocument();
    console.log("TESTING INFO::: ", info);
    doc.on('data', dataCallback);

    doc.fontSize(16).text(`Orden de compra: ${info}`, { align: "right" });
    // doc.image('./src/images/logo.png', { fit: [50,50], align: 'center', valign: 'center' });

    const table = {
        headers: [
            { label: "Código", property: 'code', width: 60, renderer: null },
            { label: "Descripción", property: 'name', width: 150, renderer: null },
            { label: "Precio unitario", property: 'price', width: 100, renderer: null },
            { label: "Cantidad", property: 'qty', width: 80, renderer: null },
            { label: "Sub-total", property: 'subTotal', width: 100, renderer: null },
            // { label: "Price 4", property: 'price4', width: 63, renderer: (value, indexColumn, indexRow, row) => { return `U$ ${Number(value).toFixed(2)}` } },
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





// Claro, aquí tienes un ejemplo ajustado a Node.js para armar una URL de descarga de archivos:


// const dominio = "www.ejemplo.com";
// const ruta = "/ruta/del/archivo/";
// const nombreArchivo = "factura.pdf";

// const urlDescarga = `http://${dominio}${ruta}${nombreArchivo}`;

// En este ejemplo, dominio representa el dominio de tu aplicación, ruta es la ruta en la que se encuentra el archivo y nombreArchivo es el nombre del archivo que deseas descargar. Utilizando una template string, puedes concatenar estas variables para formar la URL completa de descarga.


// Una vez que hayas armado la URL de descarga, puedes utilizarla en tu aplicación para proporcionar el enlace de descarga al cliente. Por ejemplo, si estás utilizando un framework web como Express, puedes enviar la URL de descarga como respuesta a una solicitud HTTP.


// Recuerda reemplazar los valores de dominio, ruta y nombreArchivo con los correspondientes a tu aplicación.


// EN CASO DE HACERLO EN EXCEL

// import ExcelJS from 'exceljs';
// import fs from 'fs';

// export function writeExcelAndSaveAsPDF() {
//   const workbook = new ExcelJS.Workbook();
//   const worksheet = workbook.addWorksheet('Sheet 1');

//   // Escribir datos en el archivo de Excel
//   worksheet.getCell('A1').value = 'Hola, mundo!';
//   worksheet.getCell('B1').value = '¡Excelente!';

//   // Guardar el archivo de Excel en formato PDF
//   workbook.xlsx.writeBuffer().then((buffer) => {
//     fs.writeFileSync('ruta/del/archivo.xlsx', buffer);

//     // Convertir el archivo de Excel a PDF
//     const pdfPath = 'ruta/del/archivo.pdf';
//     const options = {
//       printOptions: {
//         'firstPageNumber': 1,
//         'fitToPage': true,
//         'fitToHeight': 0,
//         'fitToWidth': 1,
//       },
//     };

//     workbook.xlsx.writeFile(pdfPath, options).then(() => {
//       console.log('Archivo PDF guardado exitosamente');
//     }).catch((error) => {
//       console.error('Error al guardar el archivo PDF:', error);
//     });
//   }).catch((error) => {
//     console.error('Error al guardar el archivo de Excel:', error);
//   });
// }



// INSERTAR IMAGEN

// import ExcelJS from 'exceljs';
// import fs from 'fs';

// export function writeExcelAndSaveAsPDF() {
//   const workbook = new ExcelJS.Workbook();
//   const worksheet = workbook.addWorksheet('Sheet 1');

//   // Insertar una imagen en la celda A1
//   const imageId = workbook.addImage({
//     filename: 'ruta/de/la/imagen.png',
//     extension: 'png',
//   });

//   worksheet.getCell('A1').fill = {
//     type: 'pattern',
//     pattern: 'solid',
//     fgColor: { argb: 'FFFFFFFF' },
//     bgColor: { argb: 'FFFFFFFF' },
//   };

//   worksheet.addImage(imageId, {
//     tl: { col: 0.5, row: 0.5 },
//     ext: { width: 100, height: 100 },
//   });

//   // Guardar el archivo de Excel en formato PDF
//   workbook.xlsx.writeBuffer().then((buffer) => {
//     fs.writeFileSync('ruta/del/archivo.xlsx', buffer);

//     // Convertir el archivo de Excel a PDF
//     const pdfPath = 'ruta/del/archivo.pdf';
//     const options = {
//       printOptions: {
//         'firstPageNumber': 1,
//         'fitToPage': true,
//         'fitToHeight': 0,
//         'fitToWidth': 1,
//       },
//     };

//     workbook.xlsx.writeFile(pdfPath, options).then(() => {
//       console.log('Archivo PDF guardado exitosamente');
//     }).catch((error) => {
//       console.error('Error al guardar el archivo PDF:', error);
//     });
//   }).catch((error) => {
//     console.error('Error al guardar el archivo de Excel:', error);
//   });
// }
