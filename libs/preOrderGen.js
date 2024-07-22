import { Router } from 'express';
import { buildPDF } from './pdfKits';

// const router = Router();

export async function pdfConstruct() {

    console.log("OK");

    // const orderId = "888";
    // const filename = `Orden de compra ${orderId}.pdf`;

    // const stream = res.writeHead(200, {
    //     "Content-Type": "application/pdf",
    //     "Content-Disposition": `attachment; filename = ${filename}`, //aqui se puede cambiar el nombre del archivo orderId
    // });

    // const info = orderId;
    // buildPDF(
    //     (data) => stream.write(data),
    //     info,
    //     () => stream.end(),
    // );

}

// router.get('/invoice',  (_req, res) => {
//     const orderId = "888";
//     const filename = `Orden de compra ${orderId}.pdf`;

//     const stream = res.writeHead(200, {
//         "Content-Type": "application/pdf",
//         "Content-Disposition": `attachment; filename = ${filename}`, //aqui se puede cambiar el nombre del archivo orderId
//     });

//     const info = orderId;
//     buildPDF(
//         (data) => stream.write(data),
//         info,
//         () => stream.end(),
//     );

//     res.send("invoice");
// });

// export default router;