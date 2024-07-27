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
exports.IsClient = exports.IsGuest = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const admin_1 = require("../models/admin");
const role_1 = __importDefault(require("../models/role"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["x-access-token"];
        console.log(token);
        if (!token) {
            res.status(403).json({ Message: "No token provided." });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
        req.id = decoded.id;
        console.log("decoded in jwtStore :::::::::: ", decoded);
        const user = yield admin_1.adminClients.findOne({
            where: {
                uuid: decoded.id
            }
        });
        console.log("CLIENT in jwtStore ::::::::::: ", user);
        if (!user) {
            res.status(400).json({ Message: 'User not found' });
            return;
        }
        next();
    }
    catch (error) {
        res.status(401).json({ Message: 'Unauthorized' });
    }
});
exports.verifyToken = verifyToken;
const IsGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("GUEST");
});
exports.IsGuest = IsGuest;
const IsClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    console.log("USER ROLES::: ", roles);
    if (roles.dataValues.value === 2) {
        next();
    }
    else {
        res.status(403).json({ Message: "Moderator attributes required" });
    }
});
exports.IsClient = IsClient;
//# sourceMappingURL=authJwtStore.js.map