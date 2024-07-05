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
exports.getInvoice = void 0;
const payResume_1 = require("../models/payResume");
const productDetail_1 = require("../models/productDetail");
const services_1 = require("../services");
const admin_1 = require("../models/admin");
const getInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const temp_Id = req.query.id;
    const orderId = req.query.orderId;
    const dominio = req.get('host');
    const pattern = new RegExp('^[jv]-\\d{8,10}$');
    try {
        if (typeof temp_Id === 'string' && pattern.test(temp_Id)) {
            let userId = '';
            if (pattern.test(temp_Id)) {
                const clientFound = yield admin_1.adminClients.findOne({
                    where: {
                        rif: temp_Id
                    }
                });
                userId = clientFound === null || clientFound === void 0 ? void 0 : clientFound.dataValues.uuid;
                console.log(":::::::::: ", userId);
                if (userId !== undefined && orderId !== undefined) {
                    const orderInformation = yield payResume_1.cartListOrderDetailModel.findOne({
                        where: {
                            userId: userId,
                            orderId: orderId
                        }
                    });
                    const productsList = JSON.parse(orderInformation === null || orderInformation === void 0 ? void 0 : orderInformation.dataValues.productsList);
                    const productIdArray = productsList.map((product) => parseInt(product.productId));
                    const productQtyArray = productsList.map((product) => product.quantity);
                    console.log(productQtyArray);
                    let listPrices = [];
                    let listCode = [];
                    let listName = [];
                    for (let id in productIdArray) {
                        let productListPrice = yield productDetail_1.productPriceCode.findOne({
                            where: {
                                id: productIdArray[id]
                            },
                            attributes: ['price', 'code', 'name']
                        });
                        listPrices.push(productListPrice === null || productListPrice === void 0 ? void 0 : productListPrice.dataValues.price);
                        listCode.push(productListPrice === null || productListPrice === void 0 ? void 0 : productListPrice.dataValues.code);
                        listName.push(productListPrice === null || productListPrice === void 0 ? void 0 : productListPrice.dataValues.name);
                    }
                    let codes = listCode;
                    let prices = listPrices;
                    let names = listName;
                    let amounts = productQtyArray.map((qty, index) => qty * parseFloat(listPrices[index]));
                    let totalPay = (orderInformation === null || orderInformation === void 0 ? void 0 : orderInformation.dataValues.currency) === 0 ? orderInformation.dataValues.totalUsd : orderInformation === null || orderInformation === void 0 ? void 0 : orderInformation.dataValues.totalBsd;
                    let currency = (orderInformation === null || orderInformation === void 0 ? void 0 : orderInformation.dataValues.currency) === 0 ? 'usd' : 'bsd';
                    let subtotal = (orderInformation === null || orderInformation === void 0 ? void 0 : orderInformation.dataValues.currency) === 0 ? orderInformation.dataValues.subtotal : (orderInformation === null || orderInformation === void 0 ? void 0 : orderInformation.dataValues.subtotal) * 40.08;
                    const infoOrderDetail = {
                        orderId: orderInformation === null || orderInformation === void 0 ? void 0 : orderInformation.dataValues.orderId,
                        updatedAt: "",
                        codes: codes,
                        name: names,
                        quantity: productQtyArray,
                        prices: prices,
                        amounts: amounts,
                        currency: currency,
                        subtotal: subtotal,
                        totalPay: totalPay,
                    };
                    const downloadPath = yield (0, services_1.exportToFile)(infoOrderDetail);
                    res.status(201).download(downloadPath);
                }
            }
            else {
                console.log(":::::::::: ");
            }
        }
        else {
            let userId = temp_Id;
            console.log(":::::::::: ", userId);
            res.status(403).json({
                msg: 'No se encuentra lo solicitado o los datos no son correctos.'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
});
exports.getInvoice = getInvoice;
//# sourceMappingURL=admindownloadInvoice.js.map