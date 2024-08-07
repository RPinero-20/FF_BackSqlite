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
exports.clientSignIn = exports.clientSignUp = exports.userAuthGuest = void 0;
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
            const payload = { id: 3, };
            let clientUid = (0, uuid_1.v4)();
            const token = jsonwebtoken_1.default.sign(payload, config_1.default.SECRET, { expiresIn: "1h" });
            yield clientSession_1.guestSession.create({ uuid: clientUid, validToken: token, isLogged: false });
            console.log("L23 New TOKEN:::: ", token);
            res.status(201).json({ "token": token, "isLogged": false }).end();
        }
        else {
            (0, authJwtStore_1.verifyToken)();
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
        console.log("User Found SIGNIN:::: ", userFound);
        const userName = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.name;
        let savedPassword = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.password;
        let receivedPassword = password;
        const pass = yield (0, admin_1.comparePassword)(receivedPassword, savedPassword);
        if (!pass) {
            res.status(401).json({ token: null, Message: 'Invalid password or user.' });
            return;
        }
        if (userFound) {
            const token = jsonwebtoken_1.default.sign({ id: userFound.dataValues.uuid }, config_1.default.SECRET, {
                expiresIn: 86400
            });
            console.log("TOKEN::::::::: ", token);
            res.status(201).json({ "userName": userName, "token": token, "isLogged": true });
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
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.clientSignIn = clientSignIn;
//# sourceMappingURL=clientAcces.js.map