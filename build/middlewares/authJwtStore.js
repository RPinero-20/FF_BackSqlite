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
exports.IsClient = exports.verifyTokenClient = exports.verifyToken = exports.validClient = exports.validToken = exports.userInfo = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const admin_1 = require("../models/admin");
const role_1 = __importDefault(require("../models/role"));
const uuid_1 = require("uuid");
const clientSession_1 = require("../models/clientSession");
function userInfo(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        const decoded = jsonwebtoken_1.default.verify(userData, config_1.default.SECRET);
        return decoded.id;
    });
}
exports.userInfo = userInfo;
function validToken(receivedToken) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("receivedToken ::: ", receivedToken);
        try {
            const decoded = jsonwebtoken_1.default.verify(receivedToken, config_1.default.SECRET);
            return { "verified": true, "uuid": decoded.id };
        }
        catch (error) {
            res.status(401).json({ Message: "Su sesión ha vencido, haga login de nuevo." });
        }
    });
}
exports.validToken = validToken;
function validClient(clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("client ID:   ", clientId);
        try {
            const user = yield admin_1.adminClients.findOne({
                where: {
                    uuid: clientId
                },
                attributes: ['email', 'roles']
            });
            const roles = yield role_1.default.findOne({
                where: {
                    value: user.dataValues.roles
                },
                attributes: ['name', 'value']
            });
            if (roles.dataValues.value === 2 && user.dataValues.email) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            res.status(500).json({ Message: "Not a valid Client." });
        }
    });
}
exports.validClient = validClient;
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["x-access-token"];
        console.log("   Token recibido:::: ", token);
        if (!token) {
            res.status(201).json({ "userName": "", "token": "", "isLogged": false });
        }
        else {
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
            req.id = decoded.id;
            const userName = yield admin_1.adminClients.findOne({
                where: {
                    uuid: decoded.id
                }
            });
            if (userName) {
                res.status(201).json({ "userName": userName.dataValues.name, "token": token, "isLogged": true });
            }
        }
    }
    catch (error) {
        return res.status(201).json({ "userName": "", "token": "", "isLogged": false });
    }
});
exports.verifyToken = verifyToken;
const verifyTokenClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["x-access-token"];
    try {
        if (!token) {
            res.status(201).json({ "userName": "", "token": "", "isLogged": false });
        }
        else {
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
    }
    catch (error) {
        res.status(401).json({
            Message: "Su sesión ha vencido, haga login de nuevo."
        });
    }
});
exports.verifyTokenClient = verifyTokenClient;
const IsClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("CLIENT! p0woq'0pew3", req);
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
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        res.status(500).json({ Message: "Internal Server Error. Client" });
    }
});
exports.IsClient = IsClient;
//# sourceMappingURL=authJwtStore.js.map