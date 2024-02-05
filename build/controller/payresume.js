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
exports.getAddressArrival = exports.getPayResume = void 0;
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
                        orderNumber: body.orderId
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
                    const orderData = {
                        userId: body.userId,
                        productsList: JSON.stringify(body.productsList),
                        orderNumber: body.orderId,
                        payNumber: 0,
                        isOrderPaid: false,
                        bank: '',
                        addressArrival: '',
                        depositorName: '',
                        depositorPhone: '',
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
const getAddressArrival = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const addressArrival = yield usuario_1.Clients.findByPk(id);
        res.json({ "Address": addressArrival === null || addressArrival === void 0 ? void 0 : addressArrival.dataValues.address });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
});
exports.getAddressArrival = getAddressArrival;
//# sourceMappingURL=payresume.js.map