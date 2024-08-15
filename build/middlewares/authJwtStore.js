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
exports.IsClient = exports.IsGuest = exports.verifyTokenClient = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const admin_1 = require("../models/admin");
const role_1 = __importDefault(require("../models/role"));
const uuid_1 = require("uuid");
const clientSession_1 = require("../models/clientSession");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let clientUid = (0, uuid_1.v4)();
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            const payload = { id: 3, };
            const token = jsonwebtoken_1.default.sign(payload, config_1.default.SECRET, { expiresIn: "3h" });
            console.log("L17 New TOKEN:::: ", token);
            yield clientSession_1.guestSession.create({ uuid: clientUid, validToken: token, isLogged: false });
            res.status(200).json({ "token": token, "isLogged": false });
        }
        else {
            const foundToken = yield clientSession_1.guestSession.findOne({
                where: {
                    validToken: token
                }
            });
            if (!foundToken) {
                res.json({ Message: "Not a valid token found." });
            }
            console.log("  FOUND TOKEN ", foundToken);
            const decoded = jsonwebtoken_1.default.verify(foundToken, config_1.default.SECRET);
            req.id = decoded.id;
            const userClient = yield admin_1.adminClients.findOne({
                where: {
                    uuid: decoded.id
                }
            });
            if (userClient) {
                res.status(201).json({ "userName": userClient.dataValues.name, "token": token, "isLogged": true });
            }
            else {
                res.status(201).json({ "token": token, "isLogged": false });
            }
        }
    }
    catch (error) {
        return res.status(401).json({ Message: 'Not a valid token' });
    }
});
exports.verifyToken = verifyToken;
const verifyTokenClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["x-access-token"];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
        req.id = decoded.id;
        const userClient = yield admin_1.adminClients.findOne({
            where: {
                uuid: decoded.id
            }
        });
        res.status(201).json({ "userName": userClient.dataValues.name, "token": token, "isLogged": true });
        next();
    }
    catch (error) {
        res.status(401).json({
            Message: "Su sesión ha vencido, haga login de nuevo."
        });
    }
});
exports.verifyTokenClient = verifyTokenClient;
const IsGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("GUEST::: ", req.id);
    try {
        const roleValue = req.id;
        const roles = yield role_1.default.findOne({
            where: {
                value: roleValue
            },
            attributes: ['name', 'value']
        });
        if (roles.dataValues.value === req.id) {
            next();
        }
        else {
            res.status(401).json({ Message: 'Unauthorized' });
        }
    }
    catch (error) {
        res.status(500).json({ Message: "Internal Error Server. Guest" });
    }
});
exports.IsGuest = IsGuest;
const IsClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield admin_1.adminClients.findOne({
            where: {
                uuid: req.id
            },
            attributes: ['email', 'roles']
        });
        const roles = yield role_1.default.findOne({
            where: {
                value: user.dataValues.roles
            },
            attributes: ['name', 'value']
        });
        console.log("isClient ROLES::: ", roles);
        if (roles.dataValues.value === 2) {
            next();
        }
        else {
            res.status(403).json({ Message: "Moderator attributes required." });
        }
    }
    catch (error) {
        res.status(500).json({ Message: "Internal Server Error. Client" });
    }
});
exports.IsClient = IsClient;
//# sourceMappingURL=authJwtStore.js.map