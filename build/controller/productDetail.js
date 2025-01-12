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
exports.getProductDetail = void 0;
const productDetail_1 = require("../models/productDetail");
const home_1 = require("./home");
const home_2 = require("../models/home");
const getProductDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _q;
    const params = req.query;
    console.log(":::: GET PRODUCT DETAIL ::::");
    try {
        if (params != undefined) {
            if (params.hasOwnProperty('id') === true && params.hasOwnProperty('code') === true) {
                const productID = Number(params.id);
                const productCode = (_q = params.code) !== null && _q !== void 0 ? _q : '';
                res.json(yield getDetailByIDnCode(productID, productCode));
            }
            else {
                res.status(400).json({ error: 'Producto no encontrado' });
            }
            ;
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    ;
});
exports.getProductDetail = getProductDetail;
function getDetailByIDnCode(productID, productCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const pID = productID;
        const pCode = productCode;
        try {
            const pDetail = yield productDetail_1.productDetails.findOne({
                where: {
                    id: pID,
                    code: pCode
                }
            });
            const exchangeCurrency = yield (0, home_1.getExcValueCurrency)();
            if (pDetail !== null) {
                const productDetail = ({
                    id: pDetail.dataValues.id.toString(),
                    imageUrl: pDetail.dataValues.imageUrl,
                    name: pDetail.dataValues.name,
                    code: pDetail.dataValues.code,
                    description: pDetail.dataValues.description,
                    isOffer: pDetail.dataValues.isOffer,
                    isFree: pDetail.dataValues.isFree,
                    isOutStock: pDetail.dataValues.isOutStock,
                    categoryID: pDetail.dataValues.categoryID.toString(),
                    sectionID: pDetail.dataValues.sectionID.toString(),
                    price: parseFloat(pDetail.dataValues.price) / (exchangeCurrency === null || exchangeCurrency === void 0 ? void 0 : exchangeCurrency.dataValues.value)
                });
                const relatedSection = yield home_2.sectionsHome.findAll({
                    where: {
                        id: productDetail.sectionID
                    }
                });
                const sectionsToFront = relatedSection.map(section => {
                    const newSection = {
                        sectionId: section.dataValues.id.toString(),
                        sectionName: section.dataValues.name,
                        sectionImageUrl: section.dataValues.imageUrl,
                    };
                    return newSection;
                });
                const relatedProducts = yield home_2.productsHome.findAll({
                    where: {
                        sectionID: productDetail.sectionID
                    }
                });
                const productsList = relatedProducts.map(product => {
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
                        price: parseFloat(product.dataValues.price) / (exchangeCurrency === null || exchangeCurrency === void 0 ? void 0 : exchangeCurrency.dataValues.value)
                    };
                    return productsToFront;
                });
                const updatedSections = sectionsToFront.map(section => {
                    const matchingProducts = productsList.filter(product => product.sectionID === section.sectionId);
                    return Object.assign(Object.assign({}, section), { productList: matchingProducts });
                });
                return { product: productDetail, section: updatedSections[0] };
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
;
//# sourceMappingURL=productDetail.js.map