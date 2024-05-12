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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUserToEdit = exports.getUsuario = exports.getUsuarios = exports.deleteProduct = exports.postProduct = exports.putProductEdited = exports.getProductToEditDetail = exports.getProducts = exports.getToCreateProduct = exports.getAdminSections = exports.getAdminCategories = void 0;
const admin_1 = require("../models/admin");
const admin_2 = require("../models/admin");
const getAdminCategories = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryList = yield admin_1.adminCategory.findAll();
        res.json(categoryList);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
});
exports.getAdminCategories = getAdminCategories;
const getAdminSections = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sectionList = yield admin_1.adminSections.findAll();
        res.json(sectionList);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
});
exports.getAdminSections = getAdminSections;
const getToCreateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req.body;
    if (body === undefined) {
        try {
            res.json({
                imageUrl: "",
                name: "",
                code: "",
                type: "",
                byWeight: "",
                weightPerUnit: "",
                weightPerBox: "",
                byUnit: "",
                unitQty: "",
                unitPerBox: "",
                description: "",
                isOffer: "",
                isFree: "",
                isOutStock: "",
                discount: "",
                categoryID: "",
                sectionID: "",
                price: "",
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                error: ' Internal Server Error'
            });
        }
    }
    else {
        res.status(400).json({
            error: 'Bad Request'
        });
        return;
    }
});
exports.getToCreateProduct = getToCreateProduct;
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productList = yield admin_1.adminProducts.findAll();
        const productsAll = productList.map((product) => ({
            imageUrl: product.dataValues.imageUrl,
            name: product.dataValues.name,
            code: product.dataValues.code,
            type: product.dataValues.type,
            byWeight: product.dataValues.byWeight,
            weightPerUnit: product.dataValues.weightPerUnit,
            weightPerBox: product.dataValues.weightPerBox,
            byUnit: product.dataValues.byUnit,
            unitQty: product.dataValues.unitQty,
            unitPerBox: product.dataValues.unitPerBox,
            description: product.dataValues.description,
            isOffer: product.dataValues.isOffer,
            isFree: product.dataValues.isFree,
            isOutStock: product.dataValues.isOutStock,
            discount: product.dataValues.discount,
            categoryID: product.dataValues.categoryID,
            sectionID: product.dataValues.sectionID,
            price: product.dataValues.price
        }));
        res.json(productsAll);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
});
exports.getProducts = getProducts;
const getProductToEditDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.query.code;
    try {
        const productToEdit = yield admin_1.adminProducts.findOne({
            where: {
                code: code
            }
        });
        if (productToEdit) {
            const _q = productToEdit.dataValues, { id } = _q, productDetail = __rest(_q, ["id"]);
            res.json(productDetail);
        }
        else {
            res.status(404).json({
                msg: `Producto no encontrado: ${code}`,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            Error: 'Internal Server Error'
        });
    }
});
exports.getProductToEditDetail = getProductToEditDetail;
function getProductByCode(productCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const productToEdit = yield admin_1.adminProducts.findOne({
            where: {
                code: productCode
            }
        });
        return productToEdit;
    });
}
const putProductEdited = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.query.code;
    const { body } = req;
    try {
        const productToEdit = yield getProductByCode(code);
        if (!productToEdit) {
            res.status(404).json({
                Error: 'No existe Producto con Código: ' + code
            });
            return;
        }
        yield productToEdit.update(body, {
            where: {
                code: code
            }
        });
        res.json(productToEdit);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error.'
        });
    }
});
exports.putProductEdited = putProductEdited;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existCode = yield admin_1.adminProducts.findOne({
            where: {
                code: body.code
            }
        });
        if (existCode) {
            res.status(403).json({
                msg: 'Código de producto ya existe. ' + body.code
            });
            return;
        }
        const productData = yield admin_1.adminProducts.create(body);
        res.json(productData);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
});
exports.postProduct = postProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.query.code;
    const existProduct = yield admin_1.adminProducts.findOne({
        where: {
            code: code
        }
    });
    if (!existProduct) {
        res.status(404).json({
            msg: 'No se encuentra el producto indicado: ' + id
        });
    }
    else {
        yield existProduct.destroy({});
        res.status(200).json({
            Message: 'Registro eliminado.'
        });
    }
});
exports.deleteProduct = deleteProduct;
const getUsuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield admin_2.adminUsers.findAll();
    const usuariosActualizados = usuarios.map((usuario) => {
        return {
            id: usuario.dataValues.id,
            name: usuario.dataValues.name || '',
            idNumber: usuario.dataValues.idNumber || '',
            email: usuario.dataValues.email || '',
            phone: usuario.dataValues.phone || '',
            status: usuario.dataValues.status,
            job: usuario.dataValues.job || '',
            department: usuario.dataValues.department || '',
            address: usuario.dataValues.address || ''
        };
    });
    res.json(usuariosActualizados);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield admin_2.adminUsers.findByPk(id);
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
const getUserToEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.id;
    const userName = req.query.name;
    const idNumber = req.query.idNumber;
    const findUserToEdit = yield admin_2.adminUsers.findOne({
        where: {
            id: userId,
            name: userName,
            idNumber: idNumber
        }
    });
    const userToEdit = {
        id: findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.id.toString(),
        name: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.name) || '',
        idNumber: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.idNumber) || '',
        email: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.email) || '',
        password: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.password) || '',
        phone: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.phone) || '',
        status: findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.status,
        job: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.job) || '',
        department: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.department) || '',
        address: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.address) || ''
    };
    res.status(200).json(userToEdit);
});
exports.getUserToEdit = getUserToEdit;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existEmail = yield admin_2.adminUsers.findOne({
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
        const usuario = yield admin_2.adminUsers.create(body);
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
    const id = req.query.id;
    const { body } = req;
    try {
        if (id !== undefined) {
            const usuario = yield admin_2.adminUsers.findOne({
                where: {
                    id: id
                }
            });
            if (!usuario) {
                res.status(404).json({
                    msg: 'No existe usuario con ID: ' + id
                });
                return;
            }
            yield usuario.update(body);
            res.status(201).end();
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield admin_2.adminUsers.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: 'No se encuentra el usuario con indicado' + id
        });
    }
    else {
        yield usuario.update({ status: false });
    }
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const { userName, password } = body;
    const email = 'arcaneJinx@correo.com';
    const pass = '123456';
    try {
        if (userName === email && password === pass) {
            const dataCategories = yield admin_1.adminCategory.findAll();
            const categoriesAll = dataCategories.map((categories) => ({
                id: categories.dataValues.id.toString(),
                name: categories.dataValues.name
            }));
            const dataSections = yield admin_1.adminSections.findAll();
            const sectionsAll = dataSections.map((sections) => ({
                id: sections.dataValues.id.toString(),
                name: sections.dataValues.name,
            }));
            const dataSalesUnits = yield admin_1.adminSalesUnits.findAll({
                order: [['id', 'ASC']]
            });
            const salesUnitsAll = dataSalesUnits.map((salesUnits) => ({
                id: salesUnits.dataValues.id.toString(),
                name: salesUnits.dataValues.name,
            }));
            const userName = yield admin_2.adminUsers.findOne({
                where: {
                    email: email,
                    status: true
                },
                attributes: ['id', 'name', 'status']
            });
            console.log(userName);
            const dataWorkspace = {
                token: 'aafd0270-8358-4467-98da-d8c1df931d35',
                userName: userName === null || userName === void 0 ? void 0 : userName.dataValues.name,
                message: 'Usuario autenticado',
                isLogged: true,
                categories: categoriesAll,
                sections: sectionsAll,
                salesUnits: salesUnitsAll
            };
            res.status(200).json(dataWorkspace);
        }
        else {
            res.status(403).json({
                msg: 'Usuario o contraseña incorrectos'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.postLogin = postLogin;
//# sourceMappingURL=admin.js.map