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