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
const authJwtStore_1 = require("../middlewares/authJwtStore");
const getInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mordida = req.query.id;
    const token = req.headers["x-access-token"];
    const userId = yield (0, authJwtStore_1.userInfo)(token);
    const orderId = req.query.orderId;
    const dominio = req.get('host');
    try {
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
    catch (error) {
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
});
exports.getInvoice = getInvoice;
//# sourceMappingURL=downloadInvoice.js.map