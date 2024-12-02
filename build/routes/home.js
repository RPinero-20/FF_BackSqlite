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
const express_1 = require("express");
const home_1 = require("../controller/home");
const productDetail_1 = require("../controller/productDetail");
const categories_1 = require("../controller/categories");
const productsList_1 = require("../controller/productsList");
const payresume_1 = require("../controller/payresume");
const buyListConfirm_1 = require("../controller/buyListConfirm");
const userListOrders_1 = require("../controller/userListOrders");
const clientAcces_1 = require("../controller/clientAcces");
const connect_1 = require("../db/connect");
const payConfirm_1 = require("../controller/payConfirm");
const downloadInvoice_1 = require("../controller/downloadInvoice");
const middlewares_1 = require("../middlewares");
const userProfileController_1 = require("../controller/userProfileController");
const clientRouter = (0, express_1.Router)();
const homeUrl = "/home";
const categories = "/categories";
const productsList = "/productsList";
const productDetail = "/productDetail";
const payresume = "/payresume";
const getAddress = "/addressConfirmation";
const lastConfirmation = "/lastConfirmationOrder";
const paymentDetail = "/paymentDetail";
const paymentConfirmation = "/paymentConfirmation";
const signUp = "/signUp";
const signIn = "/signIn";
const logoutUser = "/logout";
const userAuthInfo = "/userAuthInfo";
const userOrders = "/userOrders";
const userProfile = "/userProfile";
const downloadInvoice = "/downloadInvoice";
const userAgreement = "/userAgreement";
clientRouter.use((_req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, connect_1.conectToDB)();
    const publicUrl = [homeUrl, userAuthInfo, categories, productsList, productDetail, payresume, signUp, signIn, logoutUser, userAgreement];
    const privateUrl = [getAddress, lastConfirmation, paymentDetail, userOrders, userProfile, paymentConfirmation, downloadInvoice];
    const requestedUrl = _req.path;
    console.log("    requestedUrl", requestedUrl);
    const token = _req.headers["x-access-token"];
    if (privateUrl.includes(requestedUrl)) {
        switch (requestedUrl) {
            case getAddress:
                const validAccess = yield middlewares_1.authJwtStore.validToken(token);
                const validClient = yield middlewares_1.authJwtStore.validClient(validAccess === null || validAccess === void 0 ? void 0 : validAccess.uuid);
                console.log("    No hacer nada", validAccess, validClient);
                if (_req.method === 'GET') {
                    if ((validAccess === null || validAccess === void 0 ? void 0 : validAccess.verified) && validClient) {
                        console.log("    NEXT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                else if (_req.method === 'PUT') {
                    if ((validAccess === null || validAccess === void 0 ? void 0 : validAccess.verified) && validClient) {
                        console.log("    Procesando PUT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                else {
                    _res.status(405).json({ message: "Método no permitido." });
                }
                break;
            case lastConfirmation:
                const validA = yield middlewares_1.authJwtStore.validToken(token);
                const validC = yield middlewares_1.authJwtStore.validClient(validA === null || validA === void 0 ? void 0 : validA.uuid);
                console.log("    lastConfirmation", validA, validC);
                if (_req.method === 'GET') {
                    if ((validA === null || validA === void 0 ? void 0 : validA.verified) && validC) {
                        console.log("    NEXT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                else if (_req.method === 'PUT') {
                    if ((validA === null || validA === void 0 ? void 0 : validA.verified) && validC) {
                        console.log("    Procesando PUT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                else {
                    _res.status(405).json({ message: "Método no permitido." });
                }
                break;
            case paymentDetail:
                const verifyAccess = yield middlewares_1.authJwtStore.validToken(token);
                const verifyClient = yield middlewares_1.authJwtStore.validClient(verifyAccess === null || verifyAccess === void 0 ? void 0 : verifyAccess.uuid);
                console.log("    paymentDetail", verifyAccess, verifyClient);
                if (_req.method === 'GET') {
                    if ((verifyAccess === null || verifyAccess === void 0 ? void 0 : verifyAccess.verified) && verifyClient) {
                        console.log("    NEXT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                else if (_req.method === 'PUT') {
                    if ((verifyAccess === null || verifyAccess === void 0 ? void 0 : verifyAccess.verified) && verifyClient) {
                        console.log("    Procesando PUT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                else {
                    _res.status(405).json({ message: "Método no permitido." });
                }
                break;
            case userOrders:
                const verifyAcc = yield middlewares_1.authJwtStore.validToken(token);
                const verifyCli = yield middlewares_1.authJwtStore.validClient(verifyAcc === null || verifyAcc === void 0 ? void 0 : verifyAcc.uuid);
                console.log("    userOrders", verifyAcc, verifyCli);
                if (_req.method === 'GET') {
                    if ((verifyAcc === null || verifyAcc === void 0 ? void 0 : verifyAcc.verified) && verifyCli) {
                        console.log("    NEXT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                break;
            case userProfile:
                const veriAcc = yield middlewares_1.authJwtStore.validToken(token);
                const veriCli = yield middlewares_1.authJwtStore.validClient(veriAcc === null || veriAcc === void 0 ? void 0 : veriAcc.uuid);
                console.log("    userProfile", veriAcc, veriCli);
                if (_req.method === 'GET') {
                    if ((veriAcc === null || veriAcc === void 0 ? void 0 : veriAcc.verified) && veriCli) {
                        console.log("    NEXT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                break;
            case paymentConfirmation:
                const verifyA = yield middlewares_1.authJwtStore.validToken(token);
                const verifyC = yield middlewares_1.authJwtStore.validClient(verifyA === null || verifyA === void 0 ? void 0 : verifyA.uuid);
                if (_req.method === 'GET') {
                    if ((verifyA === null || verifyA === void 0 ? void 0 : verifyA.verified) && verifyC) {
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                else if (_req.method === 'POST') {
                    if ((verifyA === null || verifyA === void 0 ? void 0 : verifyA.verified) && verifyC) {
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                break;
            case downloadInvoice:
                const verifyT = yield middlewares_1.authJwtStore.validToken(token);
                const verifC = yield middlewares_1.authJwtStore.validClient(verifyT === null || verifyT === void 0 ? void 0 : verifyT.uuid);
                console.log("    downloadInvoice", verifyT, verifC);
                if (_req.method === 'GET') {
                    if ((verifyT === null || verifyT === void 0 ? void 0 : verifyT.verified) && verifC) {
                        console.log("    NEXT");
                        next();
                    }
                    else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                }
                break;
            default:
                console.log("Estado desconocido");
        }
    }
    else {
        if (publicUrl.includes(requestedUrl)) {
            console.log("    URL pública", requestedUrl);
            next();
        }
        else {
            _res.status(404).json({ message: "Ruta no encontrada." });
        }
    }
}));
clientRouter.get(homeUrl, home_1.getProducts);
clientRouter.get(userAuthInfo, clientAcces_1.userAuthGuest);
clientRouter.post(signUp, clientAcces_1.clientSignUp);
clientRouter.post(signIn, clientAcces_1.clientSignIn);
clientRouter.get(logoutUser, clientAcces_1.clientLogout);
clientRouter.get(userAgreement, downloadInvoice_1.downloadUserAgreement);
clientRouter.get(categories, categories_1.getCategories);
clientRouter.get(productsList, productsList_1.getFnToFind);
clientRouter.get(productDetail, productDetail_1.getProductDetail);
clientRouter.get(userProfile, userProfileController_1.getUserInformation);
clientRouter.post(payresume, payresume_1.getPayResume);
clientRouter.put(payresume, payresume_1.getPayResume);
clientRouter.get(getAddress, payresume_1.getshippingAddress);
clientRouter.put(getAddress, payresume_1.putShippingAddress);
clientRouter.put(lastConfirmation, buyListConfirm_1.putOrderConfirmed);
clientRouter.get(lastConfirmation, payresume_1.getFinishedOrder);
clientRouter.get(paymentDetail, buyListConfirm_1.getPaymentDetail);
clientRouter.get(userOrders, userListOrders_1.getUserListOrders);
clientRouter.get(paymentConfirmation, payConfirm_1.getBanksListInformation);
clientRouter.post(paymentConfirmation, payConfirm_1.putPayConfirmation);
clientRouter.get(downloadInvoice, downloadInvoice_1.getInvoice);
exports.default = clientRouter;
//# sourceMappingURL=home.js.map