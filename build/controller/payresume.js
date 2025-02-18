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
const home_1 = require("./home");
const buyListConfirm_1 = require("../models/buyListConfirm");
const authJwtStore_1 = require("../middlewares/authJwtStore");
const getPayResume = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const token = req.headers["x-access-token"];
    if (token) {
        body.userId = yield (0, authJwtStore_1.userInfo)(token);
    }
    for (let key in body) {
        if (body[key] === null) {
            body[key] = 0;
        }
    }
    try {
        const exchangeCurrency = yield (0, home_1.getExcValueCurrency)();
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
        console.log("getPayResume body::::::::::: ", body);
        let userUid = body.userId;
        if (body.orderId.length === 0) {
            const orderRequest = body;
            const listObjects = yield (0, payResumeCalc_1.calcProducts)(orderRequest);
            const quoteOrder = listObjects.preOrder;
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
                        price: (product === null || product === void 0 ? void 0 : product.dataValues.price) / (exchangeCurrency === null || exchangeCurrency === void 0 ? void 0 : exchangeCurrency.dataValues.value),
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
                const payResume = quoteOrder.payResume;
                console.log("PAYRESUME :::::::: ", payResume);
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
                        price: (product === null || product === void 0 ? void 0 : product.dataValues.price) / (exchangeCurrency === null || exchangeCurrency === void 0 ? void 0 : exchangeCurrency.dataValues.value),
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
                    const payResume = quoteOrder.payResume;
                    console.log("Quizás :::::::: payResume, body ", payResume, body);
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
    const token = req.headers["x-access-token"];
    const userId = yield (0, authJwtStore_1.userInfo)(token);
    console.log("getShippingAddress PARAMS :::::::::: ", userId);
    try {
        if (userId) {
            const shippingAddress = yield usuario_1.Clients.findByPk(userId);
            if (shippingAddress) {
                console.log(shippingAddress.dataValues.address);
                res.status(200).json({ "shippingAddress": shippingAddress.dataValues.address });
            }
            else {
                res.status(404).json({ msg: 'Dirección de envío no encontrada.' });
            }
        }
        else {
            res.status(403).json({ msg: 'No se encuentra información de usuario.' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador.'
        });
    }
});
exports.getshippingAddress = getshippingAddress;
function updateShippingAddress(clientID, orderID, newShippingAddress, deliverySelected) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Con delivery: ", clientID, orderID, newShippingAddress, deliverySelected);
        const orderToUpdate = yield buyListConfirm_1.orderDetailConfirmedModel.findOne({
            where: {
                userId: clientID,
                orderId: orderID
            }
        });
        if (!orderToUpdate) {
            return false;
        }
        else {
            const updatedOrder = yield buyListConfirm_1.orderDetailConfirmedModel.update({ shippingAddress: newShippingAddress, isDelivery: deliverySelected }, {
                where: {
                    userId: clientID,
                    orderId: orderID
                }
            });
            console.log("updatedOrder ::::::::: ", updatedOrder);
            return updatedOrder;
        }
    });
}
const putShippingAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    const token = req.headers["x-access-token"];
    const userId = yield (0, authJwtStore_1.userInfo)(token);
    const { body } = req;
    console.log("  PARAMS  ", params, "   USERID   ", userId, "  BODY  ", body);
    if (body !== undefined) {
        const orderId = body.orderId;
        const newAddr = body.shippingAddress;
        const isDelivery = body.isDelivery;
        try {
            yield updateShippingAddress(userId, orderId, newAddr, isDelivery);
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
function findPayResume(orderId) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderDetail = yield payResume_1.cartListOrderDetailModel.findOne({
            where: {
                orderId: orderId
            }
        });
        return orderDetail;
    });
}
function findProductsWishList(wishProductList) {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = [];
        const exchangeCurrency = yield (0, home_1.getExcValueCurrency)();
        for (const wishProduct of wishProductList) {
            const productId = parseInt(wishProduct.productId);
            const product = yield buyListConfirm_1.lastBuyListConfirmedModel.findByPk(productId);
            if (product) {
                const arrayTemporal = {
                    id: product.dataValues.id,
                    imageUrl: product.dataValues.imageUrl,
                    name: product.dataValues.name,
                    code: product.dataValues.code,
                    price: product.dataValues.price / (exchangeCurrency === null || exchangeCurrency === void 0 ? void 0 : exchangeCurrency.dataValues.value),
                    quantity: wishProduct.quantity
                };
                productList.push(arrayTemporal);
            }
        }
        return productList;
    });
}
const getFinishedOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const test = req.query;
    const body = test.orderId;
    if (body !== undefined) {
        try {
            const orderId = body;
            const orderDetail = yield findPayResume(orderId);
            console.log("getFinishedOrder: orderDetail ::::::::: ", orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues);
            const payResume = {
                currency: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.currency,
                subtotal: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.subtotal,
                discount: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.discount,
                ivaUsd: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.ivaUsd,
                igtf: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.igtf,
                totalBsd: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.totalBsd,
                totalUsd: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.dataValues.totalUsd
            };
            let currencyValue;
            if (payResume.currency.toString() === '1') {
                currencyValue = 'bsd';
                console.log("Deberia ser BSD ::::::::::::::::::::::", payResume.currency);
            }
            else {
                currencyValue = 'usd';
                console.log("Deberia ser USD ::::::::::::::::::::::", payResume.currency);
            }
            payResume.currency = currencyValue;
            console.log("<<<<<<<<<< PayResume >>>>>>>>>> ", payResume);
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