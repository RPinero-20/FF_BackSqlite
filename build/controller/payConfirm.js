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
exports.putPayConfirmation = exports.getBanksListInformation = void 0;
const buyListConfirm_1 = require("../models/buyListConfirm");
const authJwtStore_1 = require("../middlewares/authJwtStore");
const getBanksListInformation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["x-access-token"];
    let userId = "";
    if (token) {
        userId = yield (0, authJwtStore_1.userInfo)(token);
    }
    try {
        const banksList = yield buyListConfirm_1.paymentDetailsModel.findAll({ attributes: { exclude: ['id'] } });
        res.status(200).json({ banksList });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getBanksListInformation = getBanksListInformation;
const putPayConfirmation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.query.orderId;
    const { body } = req;
    const token = req.headers["x-access-token"];
    let userId = "";
    if (token) {
        userId = yield (0, authJwtStore_1.userInfo)(token);
    }
    try {
        const orderIdDetails = yield buyListConfirm_1.orderDetailConfirmedModel.findOne({
            where: {
                userId: userId,
                orderId: orderId
            }
        });
        if (orderIdDetails) {
            const updatedOrderDetails = Object.assign(Object.assign({}, orderIdDetails.dataValues), { bank: body.bank, payNumber: body.voucheNumber, depositorName: body.userName, depositorPhone: body.phoneNumber });
            const orderUpdated = yield buyListConfirm_1.orderDetailConfirmedModel.update(updatedOrderDetails, { where: {
                    orderId: orderIdDetails.dataValues.orderId,
                    userId: orderIdDetails.dataValues.userId
                }
            });
            console.log("orderIdDetails:::: ", orderIdDetails);
            res.status(201).end();
        }
        else {
            res.status(403).json({
                Msg: "Error de lectura"
            });
        }
    }
    catch (error) {
        res.status(500).json({
            Msg: "Internal server error."
        });
    }
});
exports.putPayConfirmation = putPayConfirmation;
//# sourceMappingURL=payConfirm.js.map