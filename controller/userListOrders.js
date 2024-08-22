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
exports.getUserListOrders = void 0;
const userListOrders_1 = require("../models/userListOrders");
const buyListConfirm_1 = require("../models/buyListConfirm");
function findProductsListsOrders(wishProductList) {
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
const getUserListOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.query;
    console.log(userId);
    if (userId !== undefined) {
        try {
            const userListOrders = yield userListOrders_1.userListOrdersModel.findAll({
                where: {
                    userId: userId
                },
                attributes: ['orderId', 'totalBsd', 'totalUsd', 'currency', 'isOrderPaid', 'productsList']
            });
            const parsedUserListOrders = userListOrders.map(order => {
                order.dataValues.productsList = JSON.parse(order.dataValues.productsList);
                return order;
            });
            console.log("::: getUserListOrders ::: ");
            const transformedUserListOrders = yield Promise.all(userListOrders.map((order) => __awaiter(void 0, void 0, void 0, function* () {
                const currency = order.dataValues.currency === 0 ? 'Usd' : 'Bsd';
                const totalPay = order.dataValues.currency === 0 ? order.dataValues.totalUsd : order.dataValues.totalBsd;
                const isOrderPaid = order.dataValues.isOrderPaid === 0 ? 'Pendiente' : 'Pagado';
                const updatedProductsList = yield findProductsListsOrders(order.dataValues.productsList);
                return {
                    orderId: order.dataValues.orderId,
                    totalPay: totalPay,
                    currency: currency,
                    isOrderPaid: isOrderPaid,
                    lastUpdateDate: '',
                    productsList: updatedProductsList
                };
            })));
            res.status(200).json(transformedUserListOrders);
        }
        catch (error) {
            console.log("Error al obtener Lista de pedidos.");
            res.status(500).json({
                msg: "Error al obtener Lista de pedidos."
            });
        }
    }
    else {
        console.log("Page not found");
        res.status(404).json({ error: 'Page not found' });
    }
});
exports.getUserListOrders = getUserListOrders;
//# sourceMappingURL=userListOrders.js.map