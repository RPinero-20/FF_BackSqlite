import { Request, Response } from "express";
import { buyListConfirm, isOrderConfirmedModel, paymentDetailsModel, orderPayModel, companyDetailsModel } from "../models/buyListConfirm";
import { buyListConfirmInterface, buyListConfirmData, isOrderConfirmedInterface, paymentDetailInterface, orderPayInterface, urlParams } from "../src/types";
import { userInfo } from "../middlewares/authJwtStore";


export const putOrderConfirmed = async (req: Request, res: Response) => {
    const body = req.body;
    const orderId: urlParams = req.query;
    const findOrderId = orderId;
    console.log("putOrderConfirmed body ::::::::::: ", body);
    if (orderId != undefined) {
        try {
            const existOrder = await isOrderConfirmedModel.findOne({
                where: {
                    orderId: findOrderId.orderId
                } 
            });

            if (!existOrder?.dataValues.orderId){
                res.status(404).json({
                    msg: 'No se encuentra la orden de compra. Contacte con el proveedor. '
                }); return
            } else{
                let isConfirmed: number = 0;
                // let orderConfirmed = {};
                if (existOrder.dataValues.isOrderConfirmed === 0 ) {
                    isConfirmed = 1;
                    const orderConfirmed: isOrderConfirmedInterface = {
                        orderId: existOrder.dataValues.orderId,
                        isOrderConfirmed: isConfirmed
                    };
                    console.log("linea 31::: ", orderConfirmed);
                    await isOrderConfirmedModel.update(
                        orderConfirmed,
                        {where:
                            {
                                orderId: existOrder.dataValues.orderId,
                            }});
                    res.status(201).end();
                }
            }
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno contacte al administrador.'
            });            
        }
    }
}


export const getPaymentDetail = async (req: Request, res: Response) => {
    const token = req.headers["x-access-token"];
    let userId: string = "";
    if(token){
        userId = await userInfo(token);
    }

    // let userId = req.query.id;
    console.log("getPaymentDetail USERID :::::::: ", userId);
    try{
        if (userId != undefined) {
            const paymentData = await orderPayModel.findOne({
                where:{
                    userId: userId
                }
            });
            console.log("getPaymentDetail paymentData :::::::::::... ", paymentData?.dataValues);
            let totalPay = paymentData?.dataValues.currency === 0 ? paymentData?.dataValues.totalUsd : paymentData?.dataValues.totalBsd;
            let currency = paymentData?.dataValues.currency === 0 ? 'usd' : 'bsd';
            const companyDetails = await companyDetailsModel.findAll();
            const bankList = await paymentDetailsModel.findAll();
            const paymentDetails: paymentDetailInterface = {
                orderId: paymentData?.dataValues.orderId,
                currency: currency,
                totalPay: totalPay,
                companyName: companyDetails[0].dataValues.name,
                companyRif: companyDetails[0].dataValues.rif,
                downloadInvoice: 'PROBANDO', //TODO: poner la url de descargar factura
                bankList: bankList.map((bank) => ({
                    bankName: bank.dataValues.bankName,
                    bankAccount: bank.dataValues.bankAccount
                }))
            };

            res.json(paymentDetails);
        }
    } catch (error) {
        console.log("ERROR en paymentDetail: ", error);
        res.status(500).json({
            error: ' internal Server Error'
        });
    }
}

export const postBuyList = async (req: Request, res: Response) => {
    const { body } = req;

    console.log(body);

    try {

        const productID: number[] = body.productsList.map((strID: buyListConfirmData) => strID.productId)
        const productQty: number[] = body.productsList.map((prodQty: buyListConfirmData) => prodQty.quantity)
        const productByIdPromises = productID.map(async (id: number) => {
            const product = await buyListConfirm.findByPk(id);
            return product;
        });

        const products = await Promise.all(productByIdPromises);
        console.log(products);

        res.json({msg: "OK"})

    } catch {
        res.status(400).send("Error en buyListConfirm postBuyList function")
    }
    // try {

    //     const productID: number[] = body.productList.map((strID: cartListinterfaceProduct) => strID.productId)
    //     const productQty: number[] = body.productList.map((prodQty: cartListinterfaceProduct) => prodQty.quantity)
    //     const productByIdPromises = productID.map(async (id: number) => {
    //         const product = await buyListConfirm.findByPk(id);
    //         return product;
    //     });

    //     const products = await Promise.all(productByIdPromises);

    //     // requestedQty
    //     const productsWithQty = products.map((product, index) => {
    //         const priceDiscount = calcularDescuentoProducto(product?.dataValues.price, product?.dataValues.isOffer);
    //         const productDiscount = calcularDescuentoGlobal(product?.dataValues.price, product?.dataValues.isOffer);
    //         return {
    //             userId: parseInt(body.userId),
    //             ...product?.dataValues,
    //             price: priceDiscount,
    //             requestedQty: productQty[index],
    //             discount: productDiscount
    //             // AGREGAR TOKEN_ID
    //         };
    //     });


    //     const productsCalculated = productsWithQty.map((product) => {
    //         return {
    //             ...product,
    //             price: product.price * product.requestedQty
    //         };
    //     });

    //     const subtotal = productsCalculated.reduce((total, product) => {
    //         return total + product.price;
    //     }, 0);


    //     const totalDescuentoPorProducto: number = productsCalculated.reduce((total, product) => {
    //         const descuentoPorProducto: number = product?.requestedQty * product?.discount;
    //         return total + descuentoPorProducto;
    //     }, 0);

    //     const ivaUsd: number = 16;
    //     const dolarToday: number = 36.11;
    //     const subTotalBsd: number = subtotal * dolarToday;
    //     const iva: number = subTotalBsd * (ivaUsd / 100);
    //     const totalBsd: number = subTotalBsd + iva;
    //     const igtf = subtotal * (3 / 100);
    //     const totalImpuesto = igtf * 0.16;
    //     const totalUsd: number = subtotal + totalImpuesto;


    //     const returnObject: payResumeInterface = {
    //         subtotal: subtotal,
    //         discount: totalDescuentoPorProducto,
    //         ivaUsd: 16,
    //         igtf: 3,
    //         totalBsd: parseFloat(totalBsd.toFixed(2)),
    //         totalUsd: parseFloat(totalUsd.toFixed(2))
    //     }


    //     for (let key in returnObject) {
    //         if (returnObject[key as keyof payResumeInterface] === null) {
    //             returnObject[key as keyof payResumeInterface] = 0;
    //         }
    //         for (let key in returnObject) {
    //             if (isNaN(returnObject[key as keyof payResumeInterface])) {
    //                 returnObject[key as keyof payResumeInterface] = 0;
    //             }
    //         }
    //     }


    //     res.json(returnObject);//(returnObject);//(productsCalculated);

    // } catch (error) {
    //     res.status(500).json({
    //         msg: 'Error interno contacte al administrador.'
    //     });
    // }

}

