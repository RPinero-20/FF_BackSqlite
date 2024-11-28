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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientSignIn = exports.clientLogout = exports.clientSignUp = exports.userAuthGuest = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const clientSession_1 = require("../models/clientSession");
const usuario_1 = __importDefault(require("../models/usuario"));
const admin_1 = require("../models/admin");
const uuid_1 = require("uuid");
const authJwtStore_1 = require("../middlewares/authJwtStore");
const userAuthGuest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedToken = req.headers["x-access-token"];
        console.log('receivedToken::: ', receivedToken);
        if (!receivedToken) {
            (0, authJwtStore_1.verifyTokenClient)(req, res);
        }
        else {
            (0, authJwtStore_1.verifyTokenClient)(req, res);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error al generar el token de invitado" });
    }
});
exports.userAuthGuest = userAuthGuest;
const clientSignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const email = body.email;
    console.log("?????? BODY:", body);
    try {
        const findClient = yield usuario_1.default.findOne({
            where: {
                email: email
            }
        });
        if (!findClient) {
            let clientUid = (0, uuid_1.v4)();
            console.log("CREANDO CLIENTE::::: UUID", clientUid);
            const client = {
                uuid: clientUid,
                rif: body.rif,
                name: `${body.firstName} ${body.lastName}`,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2 || '',
                address: body.address || '',
                represent: body.company || '',
                codeId: clientUid,
                password: yield (0, admin_1.encryptPassword)(body.password.toString()),
                status: 1,
            };
            console.log(">>>>>>>> CLIENT: ", client);
            yield usuario_1.default.create(client);
            res.status(201).json({ Message: 'Cliente creado.' });
        }
        else {
            res.status(400).json({ Message: 'El correo ya se encuentra registrado.' });
        }
    }
    catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
});
exports.clientSignUp = clientSignUp;
const clientLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedToken = req.headers["x-access-token"];
        console.log("receivedToken::::: ", receivedToken);
        if (!receivedToken) {
            return res.status(401).json({ token: null, message: 'Invalid transaction.' });
        }
        const result = yield clientSession_1.guestSession.findOne({
            where: {
                validToken: receivedToken
            }
        });
        if (!result) {
            return res.status(404).json({ message: 'No sessions found for the provided token.' });
        }
        else {
            console.log("Result::: ", result.dataValues);
            const session = result.dataValues.uuid;
            yield clientSession_1.guestSession.destroy({
                where: {
                    uuid: session
                },
                force: true
            });
            return res.status(200).json({ message: 'Logout successful. Sessions deleted.' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while logging out.' });
    }
});
exports.clientLogout = clientLogout;
const clientSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODY ::::: ", req.body);
        const body = req.body;
        const { user, password } = body;
        const userFound = yield admin_1.adminClients.findOne({
            where: {
                email: user,
            },
        });
        if (!userFound) {
            res.status(401).json({ token: null, Message: 'Invalid password or user.' });
            return;
        }
        console.log("User Found SIGNIN:::: ", userFound.dataValues);
        const userName = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.name;
        let savedPassword = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.password;
        let receivedPassword = password;
        const pass = yield (0, admin_1.comparePassword)(receivedPassword, savedPassword);
        if (!pass) {
            res.status(401).json({ token: null, Message: 'Invalid password or user.' });
            return;
        }
        if (userFound) {
            if (userFound.dataValues.status !== false) {
                const token = jsonwebtoken_1.default.sign({ id: userFound.dataValues.uuid }, config_1.default.SECRET, {
                    expiresIn: 86400
                });
                console.log("TOKEN::::::::: ", token);
                yield clientSession_1.guestSession.create({ uuid: userFound.dataValues.uuid, validToken: token, isLogged: true });
                console.log({ userName: userName, token: token, isLogged: true });
                res.status(201).json({ userName: userName, token: token, isLogged: true });
            }
        }
        else {
            res.status(403).json({
                msg: 'Usuario o contraseña incorrectos'
            });
        }
        ;
    }
    catch (error) {
        res.status(500).json({
            msg: 'Login error, code: unknown.'
        });
    }
});
exports.clientSignIn = clientSignIn;
//# sourceMappingURL=clientAcces.js.map