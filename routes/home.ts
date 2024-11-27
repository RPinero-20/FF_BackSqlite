import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getProducts, getNotFound } from "../controller/home";
import { getProductDetail } from "../controller/productDetail";
import { getCategories } from "../controller/categories";
import { getFnToFind } from "../controller/productsList";
import { getPayResume, getshippingAddress, putShippingAddress, getFinishedOrder } from "../controller/payresume";
import { postBuyList, putOrderConfirmed, getPaymentDetail } from "../controller/buyListConfirm";
import { getUserListOrders } from "../controller/userListOrders";
import { clientSignIn, clientSignUp, userAuthGuest } from "../controller/clientAcces"; // getUserInfo,
import { conectToDB } from "../db/connect";
import { ClientURLS } from "../src/types";
import { getBanksListInformation } from "../controller/payConfirm";
import { getInvoice } from "../controller/downloadInvoice";
import { authJwtStore } from "../middlewares";
import { verifyTokenClient } from "../middlewares/authJwtStore";

const clientRouter = Router();

const homeUrl: ClientURLS = "/home";
const categories: ClientURLS = "/categories";
const productsList: ClientURLS = "/productsList";
const productDetail: ClientURLS = "/productDetail";
const payresume: ClientURLS = "/payresume";
// const buyListConfirm: ClientURLS = "/buyListConfirm";
const getAddress: ClientURLS = "/addressConfirmation";
const lastConfirmation: ClientURLS = "/lastConfirmationOrder";
const paymentDetail: ClientURLS = "/paymentDetail";
const paymentConfirmation: ClientURLS = "/paymentConfirmation";
// const userInfo: ClientURLS = "/userInfo";
const signUp: ClientURLS = "/signUp";
const signIn: ClientURLS = "/signIn";
const userAuthInfo: ClientURLS = "/userAuthInfo";
const userOrders: ClientURLS = "/userOrders";
const downloadInvoice: ClientURLS = "/downloadInvoice";


clientRouter.use(async (_req, _res, next) => {
    conectToDB();

    const publicUrl: ClientURLS[] = [homeUrl, userAuthInfo, categories, productsList, productDetail, payresume, signUp, signIn];
    const privateUrl:  ClientURLS[] = [getAddress, lastConfirmation, paymentDetail, userOrders, paymentConfirmation, downloadInvoice];

    // Obtener la URL de la solicitud
    const requestedUrl = _req.path as ClientURLS;
    console.log("    requestedUrl", requestedUrl);
    const token = _req.headers["x-access-token"];


    // Verificar si la URL solicitada está en la lista de URLs privadas
    if (privateUrl.includes(requestedUrl)) {
        switch(requestedUrl) {
            case getAddress:
                const validAccess = await authJwtStore.validToken(token);
                const validClient = await authJwtStore.validClient(validAccess?.uuid);
                console.log("    No hacer nada", validAccess, validClient);

                if (_req.method === 'GET') {
                    if (validAccess?.verified && validClient) {
                        console.log("    NEXT");
                        next(); // Si ambos son válidos, continuamos
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } else if (_req.method === 'PUT') {
                    // Lógica para manejar la petición PUT
                    if (validAccess?.verified && validClient) {
                        // Aquí puedes procesar el string modificado
                        console.log("    Procesando PUT");
                        next(); // Continuar con la lógica de PUT
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } else {
                    _res.status(405).json({ message: "Método no permitido." });
                }
                break;
            case lastConfirmation:
                const validA = await authJwtStore.validToken(token);
                const validC = await authJwtStore.validClient(validA?.uuid);

                console.log("    lastConfirmation", validA, validC);

                if (_req.method === 'GET') {
                    if (validA?.verified && validC) {
                        console.log("    NEXT");
                        next(); // Si ambos son válidos, continuamos
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } else if (_req.method === 'PUT') {
                    // Lógica para manejar la petición PUT
                    if (validA?.verified && validC) {
                        // Aquí puedes procesar el string modificado
                        console.log("    Procesando PUT");
                        next(); // Continuar con la lógica de PUT
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } else {
                    _res.status(405).json({ message: "Método no permitido." });
                }
                break;
            case paymentDetail:
                const verifyAccess = await authJwtStore.validToken(token);
                const verifyClient = await authJwtStore.validClient(verifyAccess?.uuid);

                console.log("    paymentDetail", verifyAccess, verifyClient);

                if (_req.method === 'GET') {
                    if (verifyAccess?.verified && verifyClient) {
                        console.log("    NEXT");
                        next(); // Si ambos son válidos, continuamos
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } else if (_req.method === 'PUT') {
                    // Lógica para manejar la petición PUT
                    if (verifyAccess?.verified && verifyClient) {
                        // Aquí puedes procesar el string modificado
                        console.log("    Procesando PUT");
                        next(); // Continuar con la lógica de PUT
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } else {
                    _res.status(405).json({ message: "Método no permitido." });
                }

                break;
            case userOrders:
                const verifyAcc = await authJwtStore.validToken(token);
                const verifyCli = await authJwtStore.validClient(verifyAcc?.uuid);

                console.log("    userOrders", verifyAcc, verifyCli);

                if (_req.method === 'GET') {
                    if (verifyAcc?.verified && verifyCli) {
                        console.log("    NEXT");
                        next(); // Si ambos son válidos, continuamos
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } 

                break;
            case paymentConfirmation:
                const verifyA = await authJwtStore.validToken(token);
                const verifyC = await authJwtStore.validClient(verifyA?.uuid);

                console.log("    paymentConfirmation", verifyA, verifyC);

                if (_req.method === 'GET') {
                    if (verifyA?.verified && verifyC) {
                        console.log("    NEXT");
                        next(); // Si ambos son válidos, continuamos
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } 

                break;
            case downloadInvoice:
                const verifyT = await authJwtStore.validToken(token);
                const verifC = await authJwtStore.validClient(verifyT?.uuid);

                console.log("    downloadInvoice", verifyT, verifC);

                if (_req.method === 'GET') {
                    if (verifyT?.verified && verifC) {
                        console.log("    NEXT");
                        next(); // Si ambos son válidos, continuamos
                    } else {
                        _res.status(403).json({ message: "Acceso denegado." });
                    }
                } 

                break;
            default:
                console.log("Estado desconocido");
        }
    } else {
        if (publicUrl.includes(requestedUrl)) {
            console.log("    URL pública", requestedUrl);
            next();
        } else {
            _res.status(404).json({ message: "Ruta no encontrada." });
        }
    }

    // armar el switch con las rutas públicas y las privadas
    // colocar los middleware acá
    // return true/false y quitar los next() que estan en las funciones authJwtStore
    // si ambos son true pasa a la app
    // hay que retornar un valor en verifyToken para condicionar el next()
    // [authJwtStore.verifyTokenClient, authJwtStore.IsClient]
    // condicionar el next()
    // usar .then
    // verifyToken(req, res)
    //      .then( (value) => value ? verifyisClient (req, res) : error(404) )
    //      .then( (value)=> value ? next() : error(404))
    //      .catch(ejecutar funcion si alguna de las 2 promesas no se cumple)

    // next();
});


// home page
clientRouter.get(homeUrl, getProducts); //, [authJwtStore.verifyToken, authJwtStore.IsGuest]
clientRouter.get(userAuthInfo, userAuthGuest);
clientRouter.post(signUp, clientSignUp); //, [authJwtStore.verifyToken, authJwtStore.IsGuest]
clientRouter.post(signIn, clientSignIn);


// product detail page
clientRouter.get(categories, getCategories); //, [authJwtStore.verifyToken, authJwtStore.IsGuest]
clientRouter.get(productsList, getFnToFind); //, [authJwtStore.verifyToken, authJwtStore.IsGuest]
clientRouter.get(productDetail, getProductDetail); //, [authJwtStore.verifyToken, authJwtStore.IsGuest]


// Cart List Path
clientRouter.post(payresume, getPayResume); //, [authJwtStore.verifyToken, authJwtStore.IsGuest]
clientRouter.put(payresume, getPayResume); //, [authJwtStore.verifyToken, authJwtStore.IsGuest]
clientRouter.get(getAddress, getshippingAddress);
clientRouter.put(getAddress, putShippingAddress);
clientRouter.put(lastConfirmation, putOrderConfirmed);
clientRouter.get(lastConfirmation, getFinishedOrder);
clientRouter.get(paymentDetail, getPaymentDetail);



// Wish List Confirm
clientRouter.get(userOrders, getUserListOrders);
clientRouter.get(paymentConfirmation, getBanksListInformation)
clientRouter.get(downloadInvoice, getInvoice);

export default clientRouter;

