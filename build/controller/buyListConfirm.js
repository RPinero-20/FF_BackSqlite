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
exports.postBuyList = void 0;
const buyListConfirm_1 = require("../models/buyListConfirm");
const payResumeCalc_1 = require("./payResumeCalc");
const postBuyList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const productID = body.productList.map((strID) => strID.productId);
        const productQty = body.productList.map((prodQty) => prodQty.quantity);
        const productByIdPromises = productID.map((id) => __awaiter(void 0, void 0, void 0, function* () {
            const product = yield buyListConfirm_1.buyListConfirm.findByPk(id);
            return product;
        }));
        const products = yield Promise.all(productByIdPromises);
        const productsWithQty = products.map((product, index) => {
            const priceDiscount = (0, payResumeCalc_1.calcularDescuentoProducto)(product === null || product === void 0 ? void 0 : product.dataValues.price, product === null || product === void 0 ? void 0 : product.dataValues.isOffer);
            const productDiscount = (0, payResumeCalc_1.calcularDescuentoGlobal)(product === null || product === void 0 ? void 0 : product.dataValues.price, product === null || product === void 0 ? void 0 : product.dataValues.isOffer);
            return Object.assign(Object.assign({ userId: parseInt(body.userId) }, product === null || product === void 0 ? void 0 : product.dataValues), { price: priceDiscount, requestedQty: productQty[index], discount: productDiscount });
        });
        const productsCalculated = productsWithQty.map((product) => {
            return Object.assign(Object.assign({}, product), { price: product.price * product.requestedQty });
        });
        const subtotal = productsCalculated.reduce((total, product) => {
            return total + product.price;
        }, 0);
        const totalDescuentoPorProducto = productsCalculated.reduce((total, product) => {
            const descuentoPorProducto = (product === null || product === void 0 ? void 0 : product.requestedQty) * (product === null || product === void 0 ? void 0 : product.discount);
            return total + descuentoPorProducto;
        }, 0);
        const ivaUsd = 16;
        const dolarToday = 36.11;
        const subTotalBsd = subtotal * dolarToday;
        const iva = subTotalBsd * (ivaUsd / 100);
        const totalBsd = subTotalBsd + iva;
        const igtf = subtotal * (3 / 100);
        const totalImpuesto = igtf * 0.16;
        const totalUsd = subtotal + totalImpuesto;
        const returnObject = {
            subtotal: subtotal,
            discount: totalDescuentoPorProducto,
            ivaUsd: 16,
            igtf: 3,
            totalBsd: parseFloat(totalBsd.toFixed(2)),
            totalUsd: parseFloat(totalUsd.toFixed(2))
        };
        for (let key in returnObject) {
            if (returnObject[key] === null) {
                console.log(key);
                returnObject[key] = 0;
            }
            for (let key in returnObject) {
                if (isNaN(returnObject[key])) {
                    returnObject[key] = 0;
                }
            }
        }
        res.json(returnObject);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
});
exports.postBuyList = postBuyList;
//# sourceMappingURL=buyListConfirm.js.map