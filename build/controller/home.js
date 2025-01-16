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
exports.getProductList = exports.getProducts = exports.getExcValueCurrency = exports.getCurrencyRate = exports.getNotFound = void 0;
const home_1 = require("../models/home");
const currency_1 = require("../models/currency");
const getNotFound = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(404);
});
exports.getNotFound = getNotFound;
const getCurrencyRate = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currencyToday = yield currency_1.excCurrenciesModel.findOne({
        where: {
            code: 'USD'
        }
    });
    const currencyToReturn = {
        code: currencyToday === null || currencyToday === void 0 ? void 0 : currencyToday.dataValues.code,
        name: currencyToday === null || currencyToday === void 0 ? void 0 : currencyToday.dataValues.name,
        value: currencyToday === null || currencyToday === void 0 ? void 0 : currencyToday.dataValues.value
    };
    res.json(currencyToReturn);
});
exports.getCurrencyRate = getCurrencyRate;
function getHomeSections() {
    return __awaiter(this, void 0, void 0, function* () {
        const sectionsFromDB = yield home_1.sectionsHome.findAll();
        return sectionsFromDB;
    });
}
function getHomeProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield home_1.productsHome.findAll();
        return productList;
    });
}
function getExcValueCurrency() {
    return __awaiter(this, void 0, void 0, function* () {
        const currencyValue = yield currency_1.excCurrenciesModel.findOne({
            where: {
                code: 'USD'
            }
        });
        return currencyValue;
    });
}
exports.getExcValueCurrency = getExcValueCurrency;
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sections = yield getHomeSections();
        const products = yield getHomeProducts();
        const exchangeCurrency = yield getExcValueCurrency();
        const sectionsToFront = sections.map(section => {
            const newSection = {
                sectionId: section.dataValues.id.toString(),
                sectionName: section.dataValues.name,
                sectionImageUrl: section.dataValues.imageUrl,
            };
            return newSection;
        });
        const productsList = products.map(product => {
            const isFree = product.dataValues.isFree === true;
            const price = isFree ? 0 : parseFloat(product.dataValues.price);
            const calculatedPrice = price / (exchangeCurrency === null || exchangeCurrency === void 0 ? void 0 : exchangeCurrency.dataValues.value);
            const productsToFront = {
                id: product.dataValues.id.toString(),
                imageUrl: product.dataValues.imageUrl,
                name: product.dataValues.name,
                code: product.dataValues.code,
                description: product.dataValues.description,
                isOffer: product.dataValues.isOffer,
                isFree: product.dataValues.isFree,
                isOutStock: product.dataValues.isOutStock,
                categoryID: product.dataValues.categoryID.toString(),
                sectionID: product.dataValues.sectionID.toString(),
                price: calculatedPrice
            };
            return productsToFront;
        });
        const updatedSections = sectionsToFront.map(section => {
            const matchingProducts = productsList.filter(product => product.sectionID === section.sectionId);
            return Object.assign(Object.assign({}, section), { productList: matchingProducts });
        });
        res.json(updatedSections);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getProducts = getProducts;
const getProductList = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productsFromDb = yield getHomeProducts();
        const exchangeCurrency = yield getExcValueCurrency();
        const productsList = productsFromDb.map((product) => ({
            id: product.dataValues.id.toString(),
            imageUrl: product.dataValues.imageUrl,
            name: product.dataValues.name,
            code: product.dataValues.code,
            description: product.dataValues.description,
            isOffer: product.dataValues.isOffer,
            isFree: product.dataValues.isFree,
            isOutStock: product.dataValues.isOutStock,
            categoryID: product.dataValues.categoryID.toString(),
            sectionID: product.dataValues.sectionID.toString(),
            price: parseFloat(product.dataValues.price) / (exchangeCurrency === null || exchangeCurrency === void 0 ? void 0 : exchangeCurrency.dataValues.value)
        }));
        console.log("PRODUCT LIST BY CATEGORY::::: ", productsList);
        res.json(productsList);
    }
    catch (_q) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.getProductList = getProductList;
//# sourceMappingURL=home.js.map