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
exports.checkStock = exports.calcularDescuentoGlobal = exports.calcularDescuentoProducto = exports.calcProducts = void 0;
const payResume_1 = require("../models/payResume");
function calcProducts(orderRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = orderRequest;
        const productID = body.productsList.map((strID) => strID.productId);
        const productQty = body.productsList.map((prodQty) => prodQty.quantity);
        const productByIdPromises = productID.map((id) => __awaiter(this, void 0, void 0, function* () {
            const product = yield payResume_1.cartListProducts.findByPk(id);
            return product;
        }));
        const products = yield Promise.all(productByIdPromises);
        const productsWithQty = products.map((product, index) => {
            const isFree = (product === null || product === void 0 ? void 0 : product.dataValues.isFree) === true;
            const price = isFree ? 0 : parseFloat(product === null || product === void 0 ? void 0 : product.dataValues.price);
            const priceDiscount = calcularDescuentoProducto(price, product === null || product === void 0 ? void 0 : product.dataValues.isOffer);
            const productDiscount = calcularDescuentoGlobal(price, product === null || product === void 0 ? void 0 : product.dataValues.isOffer);
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
        const dolarToday = 47.31;
        const subTotalBsd = subtotal * dolarToday;
        const iva = subTotalBsd * (ivaUsd / 100);
        const totalBsd = subTotalBsd + iva;
        const igtf = subtotal * (3 / 100);
        const totalImpuesto = igtf * 0.16;
        const totalUsd = subtotal + totalImpuesto;
        const payResume = {
            subtotal: parseFloat(subtotal.toFixed(2)),
            discount: totalDescuentoPorProducto,
            ivaUsd: 16,
            igtf: 3,
            totalBsd: parseFloat(totalBsd.toFixed(2)),
            totalUsd: parseFloat(totalUsd.toFixed(2))
        };
        for (let key in payResume) {
            if (payResume[key] === null) {
                payResume[key] = 0;
            }
            ;
            for (let key in payResume) {
                if (isNaN(payResume[key])) {
                    payResume[key] = 0;
                }
            }
            ;
        }
        ;
        const preOrder = Object.assign(Object.assign({}, body), { payResume: payResume });
        const listObjects = { preOrder, productsCalculated };
        return listObjects;
    });
}
exports.calcProducts = calcProducts;
function calcularDescuentoProducto(precio, porcentajeDescuento) {
    const descuento = precio * (porcentajeDescuento / 100);
    const precioConDescuento = precio - descuento;
    return precioConDescuento.toFixed(2);
}
exports.calcularDescuentoProducto = calcularDescuentoProducto;
;
function calcularDescuentoGlobal(price, isOffer) {
    let totalDescuento = 0;
    if (isOffer != 0) {
        const precioConDescuento = calcularDescuentoProducto(price, isOffer);
        const descuentoAplicado = price - parseFloat(precioConDescuento);
        totalDescuento += descuentoAplicado;
    }
    return parseFloat(totalDescuento.toFixed(2));
}
exports.calcularDescuentoGlobal = calcularDescuentoGlobal;
;
function checkStock(products) {
    let outOfStock = [];
    const outOfStockProduct = [];
    products.forEach((product) => {
        const remainingQty = product.unitQty - product.requestedQty;
        if (remainingQty <= 0) {
            outOfStockProduct.push(product.id.toString());
            outOfStock = outOfStockProduct;
        }
        else {
            product.isConfirmed = true;
        }
    });
    return outOfStock;
}
exports.checkStock = checkStock;
//# sourceMappingURL=payResumeCalc.js.map