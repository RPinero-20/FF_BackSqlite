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
exports.signOut = exports.signIn = exports.signUp = void 0;
const admin_1 = require("../models/admin");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const role_1 = __importDefault(require("../models/role"));
const usuario_1 = __importDefault(require("../models/usuario"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body !== undefined && req.body !== null) {
            const { body } = req.body;
            let roles = body.rol;
            console.log("BODY:::::::::::. ", body);
            const userFound = yield usuario_1.default.findOne({
                where: {
                    email: body.email
                }
            });
            console.log(userFound);
            if (!userFound) {
                const newUser = {
                    uuid: body.uuid,
                    rif: body.rif,
                    name: body.name,
                    email: body.email,
                    phone: body.phone,
                    phone2: body.phone2,
                    address: body.address,
                    represent: body.represent,
                    password: yield (0, admin_1.encryptPassword)(body.password),
                    status: body.status ? 1 : 0,
                    codeId: body.uuid,
                    roles: body.rol
                };
                console.log(newUser);
                if (roles) {
                    const foundRole = yield role_1.default.findOne({
                        where: {
                            name: roles
                        }
                    });
                    console.log(":::::::::::: ", foundRole);
                    newUser.roles = foundRole === null || foundRole === void 0 ? void 0 : foundRole.dataValues.id.toString();
                }
                else {
                    const role = yield role_1.default.findOne({
                        where: {
                            value: 3
                        }
                    });
                    newUser.roles = role === null || role === void 0 ? void 0 : role.dataValues.id.toString();
                }
                const savedUser = yield usuario_1.default.create(newUser);
                console.log(savedUser);
                const token = jsonwebtoken_1.default.sign({ id: savedUser.dataValues.id }, config_1.default.SECRET, {
                    expiresIn: 86400
                });
                res.cookie('nombre_cookie', token, {
                    httpOnly: true,
                    maxAge: 86400,
                    secure: false,
                    sameSite: 'lax',
                    path: '/'
                });
                res.send('Cookie enviada');
            }
            else {
                res.status(403).json({ msg: "Usuario ya existe" });
            }
        }
    }
    catch (error) {
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield admin_1.adminUsers.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!userFound) {
        res.status(400).json({ Message: "User not found." });
        return;
    }
    console.log(userFound);
    const matchPassword = yield (0, admin_1.comparePassword)(req.body.password, userFound.dataValues.password);
    if (!matchPassword) {
        res.status(401).json({ token: null, Message: 'Invalid password or user.' });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ id: userFound.dataValues.id }, config_1.default.SECRET, {
        expiresIn: 86400
    });
    res.cookie('nombre_cookie', token, {
        httpOnly: true,
        maxAge: 86400,
        secure: false,
        sameSite: 'lax',
        path: '/'
    });
    res.send('Cookie enviada');
});
exports.signIn = signIn;
const signOut = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.signOut = signOut;
//# sourceMappingURL=auth.controller.js.map