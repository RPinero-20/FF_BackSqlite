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
exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = exports.getUserInformation = void 0;
const userProfileModel_1 = require("../models/userProfileModel");
const getUserInformation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedToken = req.headers["x-access-token"];
        const activeClient = yield userProfileModel_1.clientSession.findOne({
            where: {
                validToken: receivedToken
            }
        });
        const userProfile = yield userProfileModel_1.clientsUsers.findOne({
            where: {
                uuid: activeClient === null || activeClient === void 0 ? void 0 : activeClient.dataValues.uuid
            }
        });
        const profileInfo = ({
            uuid: "",
            rif: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.rif,
            name: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.name,
            email: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.email,
            phone: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.phone,
            phone2: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.phone2,
            address: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.address,
            represent: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.represent,
            password: "",
            status: userProfile === null || userProfile === void 0 ? void 0 : userProfile.dataValues.status,
            codeId: "",
            roles: ""
        });
        res.status(201).json(profileInfo);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.getUserInformation = getUserInformation;
const getUsuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield userProfileModel_1.clientsUsers.findAll();
    res.json(usuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield userProfileModel_1.clientsUsers.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`,
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existEmail = yield userProfileModel_1.clientsUsers.findOne({
            where: {
                email: body.email
            }
        });
        if (existEmail) {
            res.status(400).json({
                msg: 'Email de usuario ya existe. ' + body.email
            });
            return;
        }
        const usuario = yield userProfileModel_1.clientsUsers.create(body);
        res.json(usuario);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield userProfileModel_1.clientsUsers.findByPk(id);
        if (!usuario) {
            res.status(404).json({
                msg: 'No existe usuario con ID: ' + id
            });
            return;
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.putUsuario = putUsuario;
//# sourceMappingURL=userProfileController.js.map