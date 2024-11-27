import { Request, Response } from "express";
import path from "path";
import { productListInterfaceData, urlParams, orderDetailsInterface, infoOrderDetailPrintInterface } from "../src/types";
import { cartListOrderDetailModel } from "../models/payResume";
import { productPriceCode } from "../models/productDetail";
import { exportToFile } from "../services";
import { adminClients } from "../models/admin";


export const getInvoice = async (req: Request, res: Response) => {
    const temp_Id = req.query.id;
    const orderId = req.query.orderId;
    const dominio = req.get('host');
    const pattern = new RegExp('^[jv]-\\d{8,10}$');

    try {
        if (typeof temp_Id === 'string' && pattern.test(temp_Id as string)) {
            let userId: string = '';
            if (pattern.test(temp_Id)) {
                const clientFound = await adminClients.findOne({
                    where: {
                        rif: temp_Id
                    }
                });
                userId = clientFound?.dataValues.uuid;
                console.log(":::::::::: ", userId);

                if (userId !== undefined && orderId !== undefined) {
                    const orderInformation = await cartListOrderDetailModel.findOne({
                        where: {
                            userId: userId,
                            orderId: orderId
                        }
                    });

                    const productsList = JSON.parse(orderInformation?.dataValues.productsList);
                    const productIdArray = productsList.map((product: { productId: string; }) => parseInt(product.productId));
                    const productQtyArray = productsList.map((product: {quantity: number; }) => product.quantity);
                    console.log(productQtyArray);
                    let listPrices: string[] = [];
                    let listCode = [];
                    let listName = [];
                    for (let id in productIdArray) {
                        let productListPrice = await productPriceCode.findOne({
                            where: {
                                id: productIdArray[id]
                            },
                            attributes: ['price', 'code', 'name']
                        });
                        listPrices.push(productListPrice?.dataValues.price);
                        listCode.push(productListPrice?.dataValues.code);
                        listName.push(productListPrice?.dataValues.name);
                    }

                    let codes: string[] = listCode;
                    let prices: string[] = listPrices;
                    let names: string[] = listName;
                    let amounts: number[] = productQtyArray.map((qty: number, index: number) => qty * parseFloat(listPrices[index]));
                    let totalPay = orderInformation?.dataValues.currency === 0 ? orderInformation.dataValues.totalUsd : orderInformation?.dataValues.totalBsd;
                    let currency = orderInformation?.dataValues.currency === 0 ? 'usd' : 'bsd';
                    let subtotal = orderInformation?.dataValues.currency === 0 ? orderInformation.dataValues.subtotal : orderInformation?.dataValues.subtotal * 40.08;

                    const infoOrderDetail: infoOrderDetailPrintInterface = {
                        orderId: orderInformation?.dataValues.orderId,
                        updatedAt: "", // Arreglar desde la BD permitir campos createdAt y updatedAt, aqui es updatedAt porque la fecha de creación de la solicitud puede no ser la misma fecha de confirmación de la solicitud
                        codes: codes,
                        name: names,
                        quantity: productQtyArray,
                        prices: prices,
                        amounts: amounts,
                        currency: currency,
                        subtotal: subtotal,
                        totalPay: totalPay,
                    }

                    const downloadPath = await exportToFile(infoOrderDetail);

                    res.status(201).download(downloadPath);
                }
            } else {
                console.log(":::::::::: ");
            }
        } else {
            let userId = temp_Id;
            console.log(":::::::::: ", userId);
            res.status(403).json({
                msg: 'No se encuentra lo solicitado o los datos no son correctos.'
            });            
    
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });            
    }
}
