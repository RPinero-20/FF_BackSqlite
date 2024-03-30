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
exports.postBuyList = exports.getPaymentDetail = exports.putOrderConfirmed = void 0;
const buyListConfirm_1 = require("../models/buyListConfirm");
const putOrderConfirmed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const findOrderId = body.orderId;
    if (body != undefined) {
        try {
            const existOrder = yield buyListConfirm_1.isOrderConfirmedModel.findOne({
                where: {
                    orderId: findOrderId
                }
            });
            if (!existOrder) {
                res.status(404).json({
                    msg: 'No se encuentra la orden de compra. Contacte con el proveedor. '
                });
                return;
            }
            else {
                let isConfirmed = 0;
                if (existOrder.dataValues.isOrderConfirmed == 0) {
                    isConfirmed = 1;
                }
                const orderConfirmed = {
                    orderId: existOrder.dataValues.orderId,
                    isOrderConfirmed: isConfirmed
                };
                yield buyListConfirm_1.isOrderConfirmedModel.update(orderConfirmed, { where: {
                        orderId: findOrderId
                    } });
                res.status(201).json({ msg: "OK" });
            }
        }
        catch (error) {
            res.status(500).json({
                msg: 'Error interno contacte al administrador.'
            });
        }
    }
});
exports.putOrderConfirmed = putOrderConfirmed;
const getPaymentDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.query;
    console.log(orderId);
    try {
        if (orderId != undefined) {
            const paymentData = yield buyListConfirm_1.orderPayModel.findOne({
                where: {
                    orderId: orderId.orderId
                }
            });
            let totalPay = (paymentData === null || paymentData === void 0 ? void 0 : paymentData.dataValues.currency) === 1 ? paymentData === null || paymentData === void 0 ? void 0 : paymentData.dataValues.totalUsd : paymentData === null || paymentData === void 0 ? void 0 : paymentData.dataValues.totalBsd;
            const companyDetails = yield buyListConfirm_1.companyDetailsModel.findAll();
            const bankList = yield buyListConfirm_1.paymentDetailsModel.findAll();
            const paymentDetails = {
                orderId: paymentData === null || paymentData === void 0 ? void 0 : paymentData.dataValues.orderId,
                totalPay: totalPay,
                companyName: companyDetails[0].dataValues.name,
                companyRif: companyDetails[0].dataValues.rif,
                bankList: bankList.map((bank) => ({
                    bankName: bank.dataValues.bankName,
                    bankAccount: bank.dataValues.bankAccount
                }))
            };
            res.json(paymentDetails);
        }
    }
    catch (error) {
        console.log("ERROR en paymentDetail: ", error);
        res.status(500).json({
            error: ' internal Server Error'
        });
    }
});
exports.getPaymentDetail = getPaymentDetail;
const postBuyList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    try {
        const productID = body.productsList.map((strID) => strID.productId);
        const productQty = body.productsList.map((prodQty) => prodQty.quantity);
        const productByIdPromises = productID.map((id) => __awaiter(void 0, void 0, void 0, function* () {
            const product = yield buyListConfirm_1.buyListConfirm.findByPk(id);
            return product;
        }));
        const products = yield Promise.all(productByIdPromises);
        console.log(products);
        res.json({ msg: "OK" });
    }
    catch (_a) {
    }
});
exports.postBuyList = postBuyList;
//# sourceMappingURL=buyListConfirm.js.map