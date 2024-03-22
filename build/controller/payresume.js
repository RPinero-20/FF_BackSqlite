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
exports.getFinishedOrder = exports.putShippingAddress = exports.getshippingAddress = exports.getPayResume = void 0;
const payResume_1 = require("../models/payResume");
const payResumeCalc_1 = require("./payResumeCalc");
const usuario_1 = require("../models/usuario");
const buyListConfirm_1 = require("../models/buyListConfirm");
const getPayResume = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    for (let key in body) {
        if (body[key] === null) {
            body[key] = 0;
        }
    }
    try {
        let currencyValue;
        if (body.currency === "bsd") {
            currencyValue = 1;
            console.log(body);
        }
        else {
            currencyValue = 0;
            console.log(body);
        }
        body.currency = currencyValue;
        console.log(body);
        if (body.orderId.length === 0) {
            const orderRequest = body;
            const listObjects = yield (0, payResumeCalc_1.calcProducts)(orderRequest);
            const quoteOrder = listObjects.preOrder;
            body.userId = parseInt(body.userId);
            const payResume = quoteOrder.payResume;
            const productsCalculated = listObjects.productsCalculated;
            const existProduct = (0, payResumeCalc_1.checkStock)(productsCalculated);
            if (existProduct.length !== 0 || existProduct.length < 0) {
                const productsList = [];
                let OutStockList;
                yield Promise.all(existProduct.map((productID) => __awaiter(void 0, void 0, void 0, function* () {
                    const product = yield payResume_1.cartListProducts.findByPk(parseInt(productID));
                    const outOfStockProduct = {
                        id: product === null || product === void 0 ? void 0 : product.dataValues.id,
                        name: product === null || product === void 0 ? void 0 : product.dataValues.name,
                        code: product === null || product === void 0 ? void 0 : product.dataValues.code,
                        unitQty: product === null || product === void 0 ? void 0 : product.dataValues.unitQty,
                        unitPerBox: product === null || product === void 0 ? void 0 : product.dataValues.unitPerBox,
                        isOffer: product === null || product === void 0 ? void 0 : product.dataValues.isOffer,
                        isFree: product === null || product === void 0 ? void 0 : product.dataValues.isFree,
                        isOutStock: product === null || product === void 0 ? void 0 : product.dataValues.isOutStock,
                        price: product === null || product === void 0 ? void 0 : product.dataValues.price,
                        requestedQty: product === null || product === void 0 ? void 0 : product.dataValues.requestedQty,
                        discount: product === null || product === void 0 ? void 0 : product.dataValues.discount,
                    };
                    productsList.push(outOfStockProduct);
                })));
                OutStockList = body;
                OutStockList["productsList"] = productsList;
                OutStockList["payResume"] = payResume;
                delete OutStockList.userId;
                delete OutStockList.orderId;
                res.status(403).json(OutStockList);
            }
            else {
                const orderRequest = body;
                const listObjects = yield (0, payResumeCalc_1.calcProducts)(orderRequest);
                const quoteOrder = listObjects.preOrder;
                body.userId = parseInt(body.userId);
                const payResume = quoteOrder.payResume;
                const orderToReturn = {
                    productsList: [],
                    payResume: payResume
                };
                res.status(200).json(orderToReturn);
                const preOrder = Object.assign(Object.assign({}, body), { payResume: JSON.stringify({
                        payResume
                    }) });
                delete preOrder.productsList;
                const existPreOrder = yield payResume_1.cartListpreOrder.findOne({
                    where: {
                        userId: body.userId
                    }
                });
                if (!existPreOrder) {
                    yield payResume_1.cartListpreOrder.create(preOrder);
                }
                else {
                    yield payResume_1.cartListpreOrder.update(preOrder, {
                        where: {
                            userId: body.userId
                        }
                    });
                }
            }
        }
        else if (body.orderId.length != 0) {
            const orderRequest = body;
            const listObjects = yield (0, payResumeCalc_1.calcProducts)(orderRequest);
            const quoteOrder = listObjects.preOrder;
            body.userId = parseInt(body.userId);
            const payResume = quoteOrder.payResume;
            const productsCalculated = listObjects.productsCalculated;
            const existProduct = (0, payResumeCalc_1.checkStock)(productsCalculated);
            if (existProduct.length !== 0 || existProduct.length < 0) {
                const productsList = [];
                let OutStockList;
                yield Promise.all(existProduct.map((productID) => __awaiter(void 0, void 0, void 0, function* () {
                    const product = yield payResume_1.cartListProducts.findByPk(parseInt(productID));
                    const outOfStockProduct = {
                        id: product === null || product === void 0 ? void 0 : product.dataValues.id,
                        name: product === null || product === void 0 ? void 0 : product.dataValues.name,
                        code: product === null || product === void 0 ? void 0 : product.dataValues.code,
                        unitQty: product === null || product === void 0 ? void 0 : product.dataValues.unitQty,
                        unitPerBox: product === null || product === void 0 ? void 0 : product.dataValues.unitPerBox,
                        isOffer: product === null || product === void 0 ? void 0 : product.dataValues.isOffer,
                        isFree: product === null || product === void 0 ? void 0 : product.dataValues.isFree,
                        isOutStock: product === null || product === void 0 ? void 0 : product.dataValues.isOutStock,
                        price: product === null || product === void 0 ? void 0 : product.dataValues.price,
                        requestedQty: product === null || product === void 0 ? void 0 : product.dataValues.requestedQty,
                        discount: product === null || product === void 0 ? void 0 : product.dataValues.discount,
                    };
                    productsList.push(outOfStockProduct);
                })));
                OutStockList = body;
                OutStockList["productsList"] = productsList;
                OutStockList["payResume"] = payResume;
                delete OutStockList.userId;
                delete OutStockList.orderId;
                res.status(403).json(OutStockList);
            }
            else {
                const existOrder = yield buyListConfirm_1.orderDetailConfirmedModel.findOne({
                    where: {
                        orderId: body.orderId
                    }
                });
                if (existOrder) {
                    const orderRequest = body;
                    const listObjects = yield (0, payResumeCalc_1.calcProducts)(orderRequest);
                    const quoteOrder = listObjects.preOrder;
                    const payResume = quoteOrder.payResume;
                    res.status(403).json({
                        productsList: [],
                        payResume: payResume
                    });
                }
                else if (!existOrder) {
                    const newQuantity = [];
                    const listProductId = [];
                    for (const product of body.productsList) {
                        const productId = product.productId;
                        const productToBuy = yield buyListConfirm_1.orderProductsConfirmedModel.findByPk(productId);
                        let availableQty = (productToBuy === null || productToBuy === void 0 ? void 0 : productToBuy.dataValues.unitQty) - product.quantity;
                        listProductId.push(productId);
                        newQuantity.push(availableQty);
                    }
                    const updateStockQty = [];
                    for (let i = 0; i < listProductId.length; i++) {
                        const productId = listProductId[i];
                        const availableQty = newQuantity[i];
                        updateStockQty.push({ id: productId, unitQty: availableQty });
                    }
                    for (const { id, unitQty } of updateStockQty) {
                        yield buyListConfirm_1.orderProductsConfirmedModel.update({ unitQty }, { where: { id } });
                    }
                    const orderRequest = body;
                    const listObjects = yield (0, payResumeCalc_1.calcProducts)(orderRequest);
                    const quoteOrder = listObjects.preOrder;
                    body.userId = parseInt(body.userId);
                    const payResume = quoteOrder.payResume;
                    let currencyValue;
                    if (body.currency === "bsd") {
                        currencyValue = 1;
                        console.log(body);
                    }
                    else {
                        currencyValue = 0;
                        console.log(body);
                    }
                    body.currency = currencyValue;
                    const orderData = {
                        userId: body.userId,
                        productsList: JSON.stringify(body.productsList),
                        orderId: body.orderId,
                        isOrderConfirmed: body.isOrderConfirmed,
                        payNumber: 0,
                        isOrderPaid: false,
                        bank: '',
                        shippingAddress: '',
                        depositorName: '',
                        depositorPhone: '',
                        currency: body.currency,
                        subtotal: payResume.subtotal,
                        discount: payResume.discount,
                        ivaUsd: payResume.ivaUsd,
                        igtf: payResume.igtf,
                        totalBsd: payResume.totalBsd,
                        totalUsd: payResume.totalUsd,
                    };
                    yield buyListConfirm_1.orderDetailConfirmedModel.create(orderData);
                    function deletePreOrderByUserId(userId) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const deletePreOrder = yield payResume_1.cartListpreOrder.findOne({
                                where: {
                                    userId: userId
                                }
                            });
                            return deletePreOrder;
                        });
                    }
                    const userId = orderData.userId;
                    const deletePreOrder = yield deletePreOrderByUserId(userId);
                    yield (deletePreOrder === null || deletePreOrder === void 0 ? void 0 : deletePreOrder.destroy({}));
                    res.status(201).end();
                }
                else {
                    res.status(401);
                }
            }
        }
    }
    catch (error) {
        console.error("Error al guardar en la base de datos:", error);
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
});
exports.getPayResume = getPayResume;
const getshippingAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    console.log(params.id);
    if (params !== undefined) {
        if (params.hasOwnProperty('id') === true) {
            try {
                const shippingAddress = yield usuario_1.Clients.findByPk(params.id);
                console.log(shippingAddress === null || shippingAddress === void 0 ? void 0 : shippingAddress.dataValues.address);
                res.json({ "shippingAddress": shippingAddress === null || shippingAddress === void 0 ? void 0 : shippingAddress.dataValues.address });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    msg: 'Error interno contacte al administrador.'
                });
            }
        }
    }
});
exports.getshippingAddress = getshippingAddress;
function updateShippingAddress(clientID, orderId, newShippingAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedOrder = yield buyListConfirm_1.orderDetailConfirmedModel.update({ shippingAddress: newShippingAddress }, {
            where: {
                userId: parseInt(clientID),
                orderId: orderId
            }
        });
        return updatedOrder;
    });
}
const putShippingAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    const { body } = req;
    if (body !== undefined) {
        const clientID = body.id;
        const orderId = body.orderId;
        const newAddr = body.shippingAddress;
        try {
            yield updateShippingAddress(clientID, orderId, newAddr);
            return res.status(201).end();
        }
        catch (error) {
            return res.status(404).json({ error: 'Error, no existe Número de orden.' });
        }
    }
    else {
        return res.status(400).json({ error: 'Missing parameters' });
    }
});
exports.putShippingAddress = putShippingAddress;
function findPayResume(clientID, orderId) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderDetail = yield payResume_1.cartListOrderDetailModel.findOne({
            where: {
                userId: clientID,
                orderId: orderId
            }
        });
        return orderDetail;
    });
}
function findProductsWishList(wishProductList) {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = [];
        for (const wishProduct of wishProductList) {
            const productId = parseInt(wishProduct.productId);
            const product = yield buyListConfirm_1.lastBuyListConfirmedModel.findByPk(productId);
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
        return productList;
    });
}
const getFinishedOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    if (body !== undefined) {
        const clientID = body.userId;
        const orderId = body.orderId;
        try {
            const orderDetail = yield findPayResume(clientID, orderId);
            const payResume = {
                currency: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.currency,
                subtotal: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.subTotal,
                discount: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.discount,
                ivaUsd: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.ivaUsd,
                igtf: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.igtf,
                totalBsd: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.totalBsd,
                totalUsd: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.totalUsd
            };
            const shippingAddress = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.shippingAddress;
            const wishProductList = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.productsList;
            const procesedProductList = yield findProductsWishList(JSON.parse(wishProductList));
            const productList = procesedProductList;
            return res.status(200).json({ payResume, shippingAddress, productList });
        }
        catch (error) {
            console.log("Error al obtener orderDetail");
            return res.status(400).json({ error: 'Error retrieving order detail' });
        }
    }
    else {
        console.log("Pay resume not found");
        return res.status(404).json({ error: 'Pay resume not found' });
    }
});
exports.getFinishedOrder = getFinishedOrder;
//# sourceMappingURL=payresume.js.map