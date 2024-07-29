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
const userAuthGuest = (req, res) => {
    try {
        const receivedToken = req.headers["x-access-token"];
        if (receivedToken === undefined || receivedToken === '') {
            const payload = {
                id: 3,
            };
            const token = jsonwebtoken_1.default.sign(payload, config_1.default.SECRET, { expiresIn: "1h" });
            clientSession_1.guestSession.create({ validToken: token });
            console.log("New TOKEN:::: ", token);
            res.json({ token: token, isLogged: false });
        }
        else {
            const token = clientSession_1.guestSession.findOne({
                where: {
                    validToken: receivedToken
                }
            });
            console.log("verify TOKEN:::: ", token);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error al generar el token de invitado" });
    }
};
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
            console.log("POR AQUI::::: UUID", clientUid);
            const client = {
                uuid: clientUid,
                rif: body.rif,
                name: body.name,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2 || '',
                address: body.address || '',
                represent: body.represent || '',
                codeId: clientUid,
                password: yield (0, admin_1.encryptPassword)(body.password.toString()),
                status: body.status ? 1 : 0,
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
        const body = req.body;
        const { userName, password } = body;
        console.log("BODY ::::: ", userName, password);
        const userFound = yield admin_1.adminClients.findOne({
            where: {
                email: userName,
            },
        });
        const email = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.email;
        let savedPassword = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.password;
        let receivedPassword = password;
        const pass = yield (0, admin_1.comparePassword)(receivedPassword, savedPassword);
        if (!pass) {
            res.status(401).json({ token: null, Message: 'Invalid password or user.' });
            return;
        }
        if (userFound !== undefined && userFound !== null) {
            const token = jsonwebtoken_1.default.sign({ id: userFound.dataValues.uuid }, config_1.default.SECRET, {
                expiresIn: 86400
            });
            console.log("TOKEN::::::::: ", token);
            res.status(200).json({ "token": token, "isLogged": true });
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