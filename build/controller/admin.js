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
exports.postLogin = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = exports.deleteProducts = exports.postProduct = exports.putProductToEdit = exports.getProductById = exports.getProducts = exports.getAdminSections = exports.getAdminCategories = void 0;
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
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productList = yield admin_1.adminProducts.findAll();
        res.json(productList);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const productDetail = yield admin_1.adminProducts.findByPk(id);
        if (productDetail) {
            res.json(productDetail);
        }
        else {
            res.status(404).json({
                msg: `Producto no encontrado: ${id} `,
            });
        }
    }
    catch (_q) {
        res.status(500).json({
            Error: 'Internal Server Error'
        });
        return;
    }
});
exports.getProductById = getProductById;
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
const putProductToEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.params;
    const { body } = req;
    try {
        const productToEdit = yield getProductByCode(code);
        console.error(productToEdit);
        if (!productToEdit) {
            res.status(404).json({
                Error: 'No existe Producto con Código: ' + code
            });
            return;
        }
        yield productToEdit.update(body);
        res.json(productToEdit);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error.'
        });
    }
});
exports.putProductToEdit = putProductToEdit;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existCode = yield admin_1.adminProducts.findOne({
            where: {
                code: body.code
            }
        });
        if (existCode) {
            res.status(400).json({
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
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteProduct = yield admin_1.adminProducts.findByPk(id);
    if (!deleteProduct) {
        res.status(404).json({
            msg: 'No se encuentra el producto indicado: ' + id
        });
    }
    else {
        yield deleteProduct.destroy({});
        res.status(200).json({
            Message: 'Registro eliminado.'
        });
    }
});
exports.deleteProducts = deleteProducts;
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
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield admin_2.adminUsers.findByPk(id);
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
            res.status(200).json({
                token: 'aafd0270-8358-4467-98da-d8c1df931d35',
                userName: 'Jinx Fouler',
                message: 'Usuario autenticado',
            });
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