import { Request, Response } from "express";
import { cartListProducts, cartListpreOrder, cartListOrderDetailModel } from "../models/payResume";
import { orderInterfaceData, productListInterfaceData, payResumeInterfaceData, checkProductInterface, lastConfirmOrderInterface, urlParams } from "../src/types";
import { calcularDescuentoProducto, calcularDescuentoGlobal, checkStock, calcProducts } from "./payResumeCalc";
// import { pdfConstruct } from '../libs/preOrderGen';
import { Clients } from "../models/usuario";
import { orderDetailConfirmedModel, orderProductsConfirmedModel, lastBuyListConfirmedModel } from "../models/buyListConfirm";
import { userInfo, verifyTokenClient } from "../middlewares/authJwtStore";

// verificar el siguiente endpoint para extraer el uuid para no pasar el token

export const getPayResume = async (req: Request, res: Response) => {
    const { body } = req;
    const token = req.headers["x-access-token"];
    if(token){
        body.userId = await userInfo(token);
    }

    for (let key in body) {
        if (body[key] === null) {
            body[key] = 0;
        }
    }

    try {

        let currencyValue;
        if (body.currency === "bsd" ) {
            currencyValue = 1;
            console.log(body);
        } else {
            currencyValue = 0;
            console.log(body);
        }        
        body.currency = currencyValue;
        console.log("getPayResume body::::::::::: ", body);
        let userUid = body.userId;
        


// Inside getPayResume function

// try {

//     await sequelize.transaction(async (transaction) => {

//       // Existing logic

//       const updateStockQty = [
//         // stock updates  
//       ];

//       for (const update of updateStockQty) {
//         await orderProductsConfirmedModel.update(
//           update,
//           {transaction}  
//         );
//       }

//     });

//     // Rest of function

//   } catch (error) {
//     // error handling
//   }


        if (body.orderId.length === 0) {

            // COTIZACIÓN \\
            // COTIZACIÓN \\
            // COTIZACIÓN \\

            const orderRequest: orderInterfaceData = body;
            const listObjects = await calcProducts(orderRequest);
            const quoteOrder = listObjects.preOrder;
            // body.userId = parseInt(body.userId);
            const payResume = quoteOrder.payResume;

            const productsCalculated = listObjects.productsCalculated;
            const existProduct: string[] = checkStock(productsCalculated);

            if (existProduct.length !== 0 || existProduct.length < 0) {

                const productsList: checkProductInterface[] = [];
                let OutStockList: any;

                await Promise.all(existProduct.map(async (productID) => {
                    const product = await cartListProducts.findByPk(parseInt(productID));
                    const outOfStockProduct: checkProductInterface = {
                        id: product?.dataValues.id,
                        name: product?.dataValues.name,
                        code: product?.dataValues.code,
                        unitQty: product?.dataValues.unitQty,
                        unitPerBox: product?.dataValues.unitPerBox,
                        isOffer: product?.dataValues.isOffer,
                        isFree: product?.dataValues.isFree,
                        isOutStock: product?.dataValues.isOutStock,
                        price: product?.dataValues.price,
                        requestedQty: product?.dataValues.requestedQty,
                        discount: product?.dataValues.discount,
                    };
                    productsList.push(outOfStockProduct);
                }));

                OutStockList = body; // Asignar valor a OutStockList
                OutStockList["productsList"] = productsList;
                OutStockList["payResume"] = payResume;
                delete OutStockList.userId;
                delete OutStockList.orderId;

                res.status(403).json(OutStockList);

            } else {

                const orderRequest: orderInterfaceData = body;
                const listObjects = await calcProducts(orderRequest);
                const quoteOrder = listObjects.preOrder;
                // body.userId = body.userId; //parseInt(body.userId);
                const payResume = quoteOrder.payResume;
                console.log("PAYRESUME :::::::: ", payResume);
                const orderToReturn = {
                    productsList: [],
                    payResume: payResume
                };

                res.status(200).json(orderToReturn);

                const preOrder = {
                    ...body,
                    payResume: JSON.stringify({
                        payResume
                    })
                }; // utilizamos JSON.stringify() para convertir el objeto "payResume" en una cadena de texto JSON antes de guardarlo
                // al recuperar los datos de la base de datos, deberás utilizar JSON.parse() para convertir la cadena JSON nuevamente
                delete preOrder.productsList;

                const existPreOrder = await cartListpreOrder.findOne({
                    where: {
                        userId: body.userId
                    }
                });

                if (!existPreOrder) {
                    await cartListpreOrder.create(preOrder);
                } else {
                    await cartListpreOrder.update(preOrder, {
                        where: {
                            userId: body.userId
                        }
                    });
                }

                // const existProduct = body;
                // existProduct["productsList"] = [];
                // existProduct["payResume"] = payResume;
                // delete existProduct.userId;
                // delete existProduct.orderId;

                // res.status(200).json(existProduct);

            }
            // FIN DE (body.orderId.length === 0)
        } else if (body.orderId.length != 0) {

            const orderRequest: orderInterfaceData = body;
            const listObjects = await calcProducts(orderRequest);
            const quoteOrder = listObjects.preOrder;
            // body.userId = parseInt(body.userId);
            const payResume = quoteOrder.payResume;

            const productsCalculated = listObjects.productsCalculated;
            const existProduct: string[] = checkStock(productsCalculated);

            if (existProduct.length !== 0 || existProduct.length < 0) {

                const productsList: checkProductInterface[] = [];
                let OutStockList: any;

                await Promise.all(existProduct.map(async (productID) => {
                    const product = await cartListProducts.findByPk(parseInt(productID));
                    const outOfStockProduct: checkProductInterface = {
                        id: product?.dataValues.id,
                        name: product?.dataValues.name,
                        code: product?.dataValues.code,
                        unitQty: product?.dataValues.unitQty,
                        unitPerBox: product?.dataValues.unitPerBox,
                        isOffer: product?.dataValues.isOffer,
                        isFree: product?.dataValues.isFree,
                        isOutStock: product?.dataValues.isOutStock,
                        price: product?.dataValues.price,
                        requestedQty: product?.dataValues.requestedQty,
                        discount: product?.dataValues.discount,
                    };
                    productsList.push(outOfStockProduct);
                }));

                OutStockList = body; // Asignar valor a OutStockList
                OutStockList["productsList"] = productsList;
                OutStockList["payResume"] = payResume;
                delete OutStockList.userId;
                delete OutStockList.orderId;
                res.status(403).json(OutStockList);

            } else {

                const existOrder = await orderDetailConfirmedModel.findOne({
                    where: {
                        orderId: body.orderId
                    }
                });

                if (existOrder) {

                    const orderRequest: orderInterfaceData = body;
                    const listObjects = await calcProducts(orderRequest);
                    const quoteOrder = listObjects.preOrder;
                    const payResume = quoteOrder.payResume;

                    res.status(403).json({
                        productsList: [],
                        payResume: payResume
                    });

                } else if (!existOrder) {

                    const newQuantity: number[] = [];
                    const listProductId: number[] = [];

                    for (const product of body.productsList) {
                        const productId = product.productId;
                        const productToBuy = await orderProductsConfirmedModel.findByPk(productId);
                        let availableQty: number = productToBuy?.dataValues.unitQty - product.quantity;
                        listProductId.push(productId);
                        newQuantity.push(availableQty);
                    }

                    const updateStockQty: { id: number, unitQty: number }[] = [];
                    for (let i = 0; i < listProductId.length; i++) {
                        const productId = listProductId[i];
                        const availableQty = newQuantity[i];
                        updateStockQty.push({ id: productId, unitQty: availableQty });
                    }

                    // ACTUALIZA CANTIDADES EN INVENTARIO
                    for (const { id, unitQty } of updateStockQty) {
                        await orderProductsConfirmedModel.update({ unitQty }, { where: { id } });
                    }

                    const orderRequest: orderInterfaceData = body;
                    const listObjects = await calcProducts(orderRequest);
                    const quoteOrder = listObjects.preOrder;
                    // body.userId = parseInt(body.userId);
                    const payResume = quoteOrder.payResume
                    console.log("Quizás :::::::: payResume, body ", payResume, body);
                    // let currencyValue;
                    // if (body.currency === "bsd" ) {
                    //     currencyValue = 1;
                    //     console.log(body);
                    // } else {
                    //     currencyValue = 0;
                    //     console.log(body);
                    // }        
                    // body.currency = currencyValue;

                    const orderData = {
                        userId: body.userId, // Viene del cuerpo de la solicitud
                        productsList: JSON.stringify(body.productsList), // Viene del cuerpo de la solicitud, convierte el array a una cadena JSON
                        orderId: body.orderId, // Viene del cuerpo de la solicitud
                        isOrderConfirmed: body.isOrderConfirmed, // Viene del body cambia de valor en lastConfirmationOrder
                        payNumber: 0, // Número de pago (ingresar luego), vacío por defecto
                        isOrderPaid: false, // Estatus de pago, false por defecto
                        bank: '', // Vacío por defecto
                        shippingAddress: '', // Vacío por defecto
                        depositorName: '', // Vacío por defecto
                        depositorPhone: '', // Vacío por defecto
                        currency: body.currency,
                        subtotal: payResume.subtotal, // Viene de payResume
                        discount: payResume.discount, // Viene de payResume
                        ivaUsd: payResume.ivaUsd, // Viene de payResume
                        igtf: payResume.igtf, // Viene de payResume
                        totalBsd: payResume.totalBsd, // Viene de payResume
                        totalUsd: payResume.totalUsd, // Viene de payResume
                    };

                    await orderDetailConfirmedModel.create(orderData);

                    // res.status(201).end();

                    async function deletePreOrderByUserId(userId: number) {
                        const deletePreOrder = await cartListpreOrder.findOne({
                            where: {
                                userId: userId
                            }
                        });
                        return deletePreOrder
                    }
                    const userId = orderData.userId;
                    const deletePreOrder = await deletePreOrderByUserId(userId);
                    await deletePreOrder?.destroy({})

                    res.status(201).end();

                } else {
                    res.status(401);
                }

            }

        } // FIN DE ELSE IF (body.orderId.length != 0)
    } catch (error) {
        console.error("Error al guardar en la base de datos:", error);
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
}

export const getshippingAddress = async (req: Request, res: Response) => {
    const token = req.headers["x-access-token"];
    const userId = await userInfo(token);
    console.log("getShippingAddress PARAMS :::::::::: ", userId);

    try {
        if (userId) {
            const shippingAddress = await Clients.findByPk(userId);
            if (shippingAddress) {
                console.log(shippingAddress.dataValues.address);
                res.status(200).json({ "shippingAddress": shippingAddress.dataValues.address });
            } else {
                res.status(404).json({ msg: 'Dirección de envío no encontrada.' });
            }
        } else {
            res.status(403).json({ msg: 'No se encuentra información de usuario.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador.'
        });
    }
}

// export const getshippingAddress = async (req: Request, res: Response) => {
//     const token = req.headers["x-access-token"];
//     const userId = await userInfo(token);
//     console.log("getShippingAddress PARAMS ::::::::: ", userId);

//     try {
//         if (userId) {
//             const shippingAddress = await Clients.findByPk(userId);
//             console.log(shippingAddress?.dataValues.address);
//             res.status(201).json({ "shippingAddress": shippingAddress?.dataValues.address });
//         } else{
//             res.status(403).json({msg: 'No se encuentra información de usuario.'});
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             msg: 'Error interno contacte al administrador.'
//         });
//     }
// }


async function updateShippingAddress(clientID: string, orderID: string, newShippingAddress: string) {
    console.log("POR AQUI VA!!!!!!!!", clientID, orderID, newShippingAddress);
    const orderToUpdate = await orderDetailConfirmedModel.findOne({
        where: {
            userId: clientID,
            orderId: orderID
        }
    });

    if (!orderToUpdate) {
        return  false;
    }  else {
        const updatedOrder = await orderDetailConfirmedModel.update(
            { shippingAddress: newShippingAddress },
            {
                where: {
                    userId: clientID, //parseInt(clientID),
                    orderId: orderID
                }
            }
        );
        console.log("updatedOrder ::::::::: ", updatedOrder)
        return updatedOrder;
    }
}


export const putShippingAddress = async(req: Request, res: Response ) => {
    const params: urlParams = req.query;
    const token = req.headers["x-access-token"];
    const userId = await userInfo(token);
    const { body } = req;

    if (body !== undefined) {
        // const userId = body.id;
        const orderId = body.orderId;
        const newAddr = body.shippingAddress;

        try {
            await updateShippingAddress(userId, orderId, newAddr);
            return res.status(201).end();
        } catch (error) {
            return res.status(404).json({ error: 'Error, no existe Número de orden.' });
        }
    } else {
        return res.status(400).json({ error: 'Missing parameters' });
    }
}

// Función para obtener PayResume para  mostrar en la vista del pago
// por ahora solo el orderId, el userId debe venir desde el token
async function findPayResume( orderId: string ) { // userId: number, orderId: string) {
    const orderDetail = await cartListOrderDetailModel.findOne({
        where: {
            //userId: userId,
            orderId: orderId
        }
    });

    return orderDetail;
}

async function findProductsWishList(wishProductList: { productId: string, quantity: number }[]) {
    const productList: {
        id: string,
        imageUrl: string,
        name: string,
        code: string,
        price: number,
        quantity: number,
    }[] = [];

    for (const wishProduct of wishProductList) {
        const productId = parseInt(wishProduct.productId);
        // Aquí debes utilizar el método findByPk() para buscar el producto por su ID
        const product = await lastBuyListConfirmedModel.findByPk(productId);

        if (product) {
            const arrayTemporal = {
                id: product.dataValues.id,
                imageUrl: product.dataValues.imageUrl,
                name: product.dataValues.name,
                code: product.dataValues.code,
                price: product.dataValues.price,
                quantity: wishProduct.quantity
            };
            productList.push(arrayTemporal);
        }
    }
    // console.log(productList);
    return productList;

}


export const getFinishedOrder = async (req: Request, res: Response) => {
    const test: urlParams = req.query;
    const body = test.orderId; //req.body
// se va a recibir mediane parámetros urlParams así que arregla la vaina
// la vaina ya está arreglada solo falta tomar el userId desde el token

    if (body !== undefined) {
        try {
            // const clientID: number = body.userId;
            const orderId: string = body;
    
            const orderDetail = await findPayResume( orderId );// clientID, orderId);
            console.log("getFinishedOrder: orderDetail ::::::::: ", orderDetail?.dataValues)
            const payResume: lastConfirmOrderInterface = {
                currency: orderDetail?.dataValues.currency,
                subtotal: orderDetail?.dataValues.subtotal,
                discount: orderDetail?.dataValues.discount,
                ivaUsd: orderDetail?.dataValues.ivaUsd,
                igtf: orderDetail?.dataValues.igtf,
                totalBsd: orderDetail?.dataValues.totalBsd,
                totalUsd: orderDetail?.dataValues.totalUsd
            };

            let currencyValue;
            if (payResume.currency.toString() === '1' ) {
                currencyValue = 'bsd';
                console.log("Deberia ser BSD ::::::::::::::::::::::", payResume.currency);
            } else {
                currencyValue = 'usd';
                console.log("Deberia ser USD ::::::::::::::::::::::", payResume.currency);
            }        
            payResume.currency = currencyValue;
            console.log("<<<<<<<<<< PayResume >>>>>>>>>> ", payResume);

            const shippingAddress = orderDetail?.dataValues.shippingAddress

            const wishProductList = orderDetail?.dataValues.productsList

            const procesedProductList = await findProductsWishList(JSON.parse(wishProductList));
            const productList = procesedProductList

            // pdfConstruct();

            return res.status(200).json({payResume, shippingAddress, productList});
        } catch (error) {
            console.log("Error al obtener orderDetail");
            return res.status(400).json({ error: 'Error retrieving order detail' });
        }
    } else {
        console.log("Pay resume not found");
        return res.status(404).json({ error: 'Pay resume not found' });
    }
};
