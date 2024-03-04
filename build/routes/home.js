"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const home_1 = require("../controller/home");
const productDetail_1 = require("../controller/productDetail");
const categories_1 = require("../controller/categories");
const productsList_1 = require("../controller/productsList");
const payresume_1 = require("../controller/payresume");
const buyListConfirm_1 = require("../controller/buyListConfirm");
const clientAcces_1 = require("../controller/clientAcces");
const connect_1 = require("../db/connect");
const clientRouter = (0, express_1.Router)();
const homeUrl = "/home";
const categories = "/categories";
const productsList = "/productsList";
const productDetail = "/productDetail";
const payresume = "/payresume";
const buyListConfirm = "/buyListConfirm";
const getAddress = "/addressConfirmation";
const userInfo = "/userInfo";
const userAuthInfo = "/userAuthInfo";
clientRouter.use((_req, _res, next) => {
    (0, connect_1.conectToDB)();
    next();
});
clientRouter.get(userAuthInfo, (_req, res) => {
    try {
        const payload = {
            userType: "guest",
        };
        const secretKey = "la_clave_secreta";
        const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: "1h" });
        res.setHeader("Authorization", `Bearer ${token}`);
        res.json({ message: "Token de invitado generado y enviado en el encabezado" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al generar el token de invitado" });
    }
});
clientRouter.get(homeUrl, home_1.getProducts);
clientRouter.get(userInfo, clientAcces_1.getUserInfo);
clientRouter.get(categories, categories_1.getCategories);
clientRouter.get(productsList, productsList_1.getFnToFind);
clientRouter.get(productDetail, productDetail_1.getProductDetail);
clientRouter.post(payresume, payresume_1.getPayResume);
clientRouter.put(payresume, payresume_1.getPayResume);
clientRouter.get(getAddress, payresume_1.getAddressArrival);
clientRouter.post(buyListConfirm, buyListConfirm_1.postBuyList);
exports.default = clientRouter;
//# sourceMappingURL=home.js.map