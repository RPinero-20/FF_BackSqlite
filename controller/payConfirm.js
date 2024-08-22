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
exports.getBanksListInformation = void 0;
const buyListConfirm_1 = require("../models/buyListConfirm");
const getBanksListInformation = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const banksList = yield buyListConfirm_1.paymentDetailsModel.findAll({ attributes: { exclude: ['id'] } });
        res.status(200).json({ banksList });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getBanksListInformation = getBanksListInformation;
//# sourceMappingURL=payConfirm.js.map