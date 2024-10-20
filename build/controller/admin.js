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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.deleteOrder = exports.putOrderEdited = exports.postOrderDetail = exports.getOrderDetailToEdit = exports.getOrdersDetails = exports.deleteClient = exports.putClient = exports.postClient = exports.getClientToEdit = exports.getClients = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUserToEdit = exports.getUsuario = exports.getUsuarios = exports.deleteProduct = exports.postProduct = exports.putProductEdited = exports.getProductToEditDetail = exports.getProducts = exports.getToCreateProduct = exports.getAdminSections = exports.deleteCategory = exports.putCategory = exports.postCategory = exports.getAdminCategories = void 0;
const uuid_1 = require("uuid");
const admin_1 = require("../models/admin");
const admin_2 = require("../models/admin");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const storage_c_1 = __importDefault(require("../services/storage_c"));
const fs_1 = __importDefault(require("fs"));
const buyListConfirm_1 = require("../models/buyListConfirm");
const config_1 = __importDefault(require("../config"));
const getAdminCategories = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryList = yield admin_1.adminCategory.findAll({ attributes: ['id', 'sectionID'], order: [['id', 'ASC']] });
        const catSecID = categoryList.map((items) => ({
            categoryId: items.dataValues.id.toString(),
            sectionId: items.dataValues.sectionID.toString()
        }));
        res.json(catSecID);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
});
exports.getAdminCategories = getAdminCategories;
const postCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { name, sectionId } = req.body;
    console.log(":.......... ", body);
    try {
        if (body !== undefined) {
            if (!name || !sectionId) {
                res.status(400).json({ error: 'Todos los campos son requeridos.' });
                return;
            }
            else {
                const newCategory = {
                    name: body.name,
                    sectionID: body.sectionId
                };
                yield admin_1.adminCategory.create(newCategory);
                res.json(newCategory);
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador'
        });
    }
});
exports.postCategory = postCategory;
const putCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const categoryId = req.query.id;
    const { name, sectionId } = req.body;
    console.log("::::::::::: ", body, name, sectionId);
    try {
        if (body !== undefined && categoryId !== undefined) {
            if (!name || !sectionId) {
                res.status(400).json({ error: 'Todos los campos son requeridos.' });
                return;
            }
            else {
                const categoryToEdit = yield admin_1.adminCategory.findOne({
                    where: {
                        id: categoryId
                    }
                });
                if (!categoryToEdit) {
                    res.status(403).json({ msg: 'No existe categoría: ' + body.name });
                    return;
                }
                else {
                    yield categoryToEdit.update(body, {
                        where: {
                            name: body.name,
                            sectionId: body.sectionId
                        }
                    });
                    res.status(201).end();
                    return;
                }
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Comuníquese con el administrador.' });
    }
});
exports.putCategory = putCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.query.id;
    try {
        if (categoryId !== undefined) {
            const categoryToDelete = yield admin_1.adminCategory.findByPk(categoryId);
            console.log("DELETE CATEGORY", categoryToDelete);
            const productFound = yield admin_1.adminProducts.findOne({
                where: {
                    categoryID: categoryId
                }
            });
            if (!productFound) {
                categoryToDelete === null || categoryToDelete === void 0 ? void 0 : categoryToDelete.destroy();
                res.status(201).end();
            }
            else {
                res.status(403).json({ msg: "No es posible eliminar, existen productos asociados." });
            }
        }
        else {
            res.status(404).json({ msg: "No se puede procesar la petición." });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
});
exports.deleteCategory = deleteCategory;
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
            imageUrl: product.dataValues.imageUrl || '',
            name: product.dataValues.name || '',
            code: product.dataValues.code || '',
            type: product.dataValues.type || '',
            byWeight: product.dataValues.byWeight,
            weightPerUnit: product.dataValues.weightPerUnit,
            weightPerBox: product.dataValues.weightPerBox,
            byUnit: product.dataValues.byUnit,
            unitQty: product.dataValues.unitQty,
            saleUnitID: product.dataValues.saleUnitID.toString(),
            unitPerBox: product.dataValues.unitPerBox,
            description: product.dataValues.description || '',
            isOffer: product.dataValues.isOffer,
            isFree: product.dataValues.isFree,
            isOutStock: product.dataValues.unitQty !== 0 ? 0 : product.dataValues.isOutStock,
            discount: product.dataValues.discount,
            categoryID: product.dataValues.categoryID,
            sectionID: product.dataValues.sectionID,
            price: product.dataValues.price,
        }));
        console.log("PRODUCTS ALL :::::: ", productsAll);
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
    try {
        const image = (0, storage_c_1.default)(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                res.status(500).json({
                    msg: 'Error al cargar la imagen'
                });
            }
            const { body, file } = req;
            let imageUrl = '';
            let newName = '';
            if (file !== undefined) {
                const originalName = file === null || file === void 0 ? void 0 : file.originalname;
                newName = Date.now() + '-' + body.code + file.originalname;
                const newPath = file === null || file === void 0 ? void 0 : file.path.replace(originalName, newName);
                fs_1.default.renameSync(file === null || file === void 0 ? void 0 : file.path, newPath);
                imageUrl = newPath;
            }
            const productToEdit = yield getProductByCode(body.code);
            if (!productToEdit) {
                res.status(404).json({
                    Error: 'No existe Producto con Código: ' + body.code
                });
                return;
            }
            body.imageUrl = `${req.protocol}://${req.hostname}:${process.env.PORT || '8000'}/assets/images/productsThumbnails/${newName}`;
            yield productToEdit.update(body, {
                where: {
                    code: body.code
                }
            });
            res.json(productToEdit);
        }));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador'
        });
    }
});
exports.putProductEdited = putProductEdited;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = (0, storage_c_1.default)(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                res.status(500).json({
                    msg: 'Error al cargar la imagen'
                });
            }
            const { body, file } = req;
            let imageUrl = '';
            let newName = '';
            if (file !== undefined) {
                const originalName = file === null || file === void 0 ? void 0 : file.originalname;
                newName = Date.now() + '-' + body.code + file.originalname;
                const newPath = file === null || file === void 0 ? void 0 : file.path.replace(originalName, newName);
                fs_1.default.renameSync(file === null || file === void 0 ? void 0 : file.path, newPath);
                imageUrl = newPath;
            }
            console.log("imageUrl::::: ", imageUrl);
            console.log("HOSTNAME::::: ", req.hostname);
            console.log("DIR NAME::::: ", __dirname);
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
            body.imageUrl = `${req.protocol}://${req.hostname}:${process.env.PORT || '8000'}/assets/images/productsThumbnails/${newName}`;
            const productData = yield admin_1.adminProducts.create(body);
            res.json(productData);
        }));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador'
        });
    }
});
exports.postProduct = postProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.query.code;
    try {
        const existProduct = yield admin_1.adminProducts.findOne({
            where: {
                code: code
            }
        });
        if (!existProduct) {
            res.status(403).json({ msg: 'No se encuentra el producto indicado: ' + code });
        }
        else {
            yield existProduct.destroy();
            console.log(`Registro eliminado: ${code} `);
            res.status(201).json({ Message: 'Registro eliminado.' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
});
exports.deleteProduct = deleteProduct;
const getUsuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield admin_2.adminUsers.findAll({ order: [['status', 'DESC']] });
        if (!usuarios) {
            res.status(404).json({ msg: 'No se encontraron usuarios.' });
        }
        else {
            const usuariosActualizados = usuarios
                .map((usuario) => {
                return {
                    id: usuario.dataValues.id,
                    name: usuario.dataValues.name || '',
                    idNumber: usuario.dataValues.idNumber,
                    email: usuario.dataValues.email || '',
                    phone: usuario.dataValues.phone,
                    status: usuario.dataValues.status,
                    job: usuario.dataValues.job || '',
                    department: usuario.dataValues.department || '',
                    address: usuario.dataValues.address || ''
                };
            });
            res.json(usuariosActualizados);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield admin_2.adminUsers.findByPk(id);
    try {
        if (usuario) {
            res.json(usuario);
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el id: ${id}`,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
});
exports.getUsuario = getUsuario;
const getUserToEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.id;
    const userName = req.query.name;
    const idNumber = req.query.idNumber;
    try {
        const findUserToEdit = yield admin_2.adminUsers.findOne({
            where: {
                id: userId,
                name: userName,
                idNumber: idNumber
            }
        });
        if (!findUserToEdit) {
            res.status(404).json({ msg: 'No se encontró el usuario para editar.' });
        }
        else {
            const userToEdit = {
                id: findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.id.toString(),
                uuid: findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.uuid,
                name: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.name) || '',
                idNumber: findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.idNumber,
                email: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.email) || '',
                password: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.password) || '',
                phone: findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.phone,
                status: findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.status,
                job: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.job) || '',
                department: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.department) || '',
                address: (findUserToEdit === null || findUserToEdit === void 0 ? void 0 : findUserToEdit.dataValues.address) || ''
            };
            res.status(200).json(userToEdit);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
});
exports.getUserToEdit = getUserToEdit;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log("Post Usuario", body);
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
        else {
            const usuario = {
                uuid: (0, uuid_1.v4)(),
                name: body.name,
                idNumber: body.idNumber,
                email: body.email,
                password: body.password === null ? null : yield (0, admin_1.encryptPassword)("tempPassword"),
                phone: body.phone,
                status: body.status,
                job: body.job,
                department: body.department,
                address: body.address
            };
            yield admin_2.adminUsers.create(usuario);
            res.status(201).end();
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Comuníquese con el administrador.' });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const { body } = req;
    console.log("putUsuario::::: ", body);
    try {
        if (id !== undefined) {
            const usuario = yield admin_2.adminUsers.findOne({
                where: {
                    id: id
                }
            });
            if (!usuario) {
                res.status(403).json({ msg: 'No existe usuario: ' + body.name });
                return;
            }
            else {
                yield usuario.update(body);
                res.status(201).end();
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Comuníquese con el administrador.' });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.id;
    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        return res.status(400).json({ msg: 'ID de usuario inválido' });
    }
    try {
        const usuario = yield admin_2.adminUsers.findByPk(parsedUserId);
        if (!usuario) {
            return res.status(403).json({
                msg: 'No se encuentra el usuario indicado'
            });
        }
        else {
            const userUpdated = yield usuario.update({ status: false });
            if (userUpdated) {
                return res.status(200).json({ msg: 'Usuario eliminado correctamente' });
            }
            else {
                return res.status(404).json({ Message: "No handled Error." });
            }
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const getClients = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield admin_1.adminClients.findAll({
            order: [['status', 'DESC']]
        });
        console.log("   :::   ", clients);
        const clientsUpdated = clients
            .map((client) => {
            return {
                id: client.dataValues.uuid,
                rif: client.dataValues.rif,
                name: client.dataValues.name,
                email: client.dataValues.email,
                phone: client.dataValues.phone,
                phone2: client.dataValues.phone2 || '',
                address: client.dataValues.address || '',
                represent: client.dataValues.represent || '',
                status: client.dataValues.status ? true : false,
                password: (client === null || client === void 0 ? void 0 : client.dataValues.password) || '',
            };
        });
        res.status(201).json(clientsUpdated);
    }
    catch (error) {
        console.error("Error fetching clients:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getClients = getClients;
const getClientToEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    console.log("::::: id ", id);
    try {
        const findClient = yield admin_1.adminClients.findOne({
            where: {
                uuid: id
            }
        });
        if (!findClient) {
            res.status(404).json({ Message: 'No se encuentra el cliente solicitado.' });
        }
        else {
            const clientToEdit = {
                uuid: findClient.dataValues.uuid || '',
                rif: findClient.dataValues.rif || '',
                name: findClient.dataValues.name || '',
                email: findClient.dataValues.email || '',
                phone: findClient.dataValues.phone,
                phone2: findClient.dataValues.phone2,
                address: findClient.dataValues.address || '',
                represent: findClient.dataValues.represent || '',
                status: findClient.dataValues.status || '',
                codeId: findClient.dataValues.codeId,
            };
            console.log("client to edit: ", clientToEdit);
            res.json(clientToEdit);
        }
    }
    catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
});
exports.getClientToEdit = getClientToEdit;
const postClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const email = body.email;
    console.log("?????? BODY:", body);
    try {
        const findClient = yield admin_1.adminClients.findOne({
            where: {
                email: email
            }
        });
        if (!findClient) {
            console.log("POR AQUI:::::");
            let clientUid = (0, uuid_1.v4)();
            const client = {
                uuid: clientUid,
                rif: body.rif,
                name: body.name,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2 || '',
                address: body.address || '',
                represent: body.represent || '',
                codeId: clientUid,
                password: body.password === null ? null : yield (0, admin_1.encryptPassword)(body.password.toString()),
                status: body.status ? 1 : 0,
                rol: 2
            };
            console.log(">>>>>>>> CLIENT: ", client);
            const createdUser = yield admin_1.adminClients.create(client);
            if (createdUser) {
                res.status(201).json({ Message: 'Cliente creado.' });
            }
        }
        else {
            res.status(400).json({ Message: 'El correo ya se encuentra registrado.' });
        }
    }
    catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
});
exports.postClient = postClient;
function getClientById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const clientToEdit = yield admin_1.adminClients.findOne({
            where: {
                uuid: id
            }
        });
        return clientToEdit;
    });
}
const putClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const { body } = req;
    try {
        const clientToEdit = yield getClientById(id);
        if (!clientToEdit) {
            res.status(404).json({ Error: 'Algo ha fallado al editar a: ' + body.name });
            return;
        }
        else {
            const editedClient = {
                rif: body.rif,
                name: body.name,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2,
                address: body.address,
                represent: body.represent || '',
                status: body.status,
            };
            yield admin_1.adminClients.update(editedClient, {
                where: {
                    uuid: id
                }
            });
            res.status(201).end();
        }
    }
    catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
});
exports.putClient = putClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    try {
        const client = yield admin_1.adminClients.findOne({
            where: {
                uuid: id
            }
        });
        if (!client) {
            res.status(403).json({ Message: 'No se encuentra el usuario con indicado' });
        }
        else {
            yield client.update({ status: false });
        }
        res.status(201).json({ Message: 'Cliente desactivado con éxito.' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
});
exports.deleteClient = deleteClient;
const getOrdersDetails = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield admin_1.adminOrdersModel.findAll();
        if (!orders) {
            res.status(403).json({ Message: 'No se encontraron pedidos.' });
        }
        else {
            const statusIdentifier = yield admin_1.adminStatusIdentifiers.findAll({ attributes: ['name', 'code'], order: [['code', 'ASC']] });
            const parsedListOrders = orders.map(order => {
                order.dataValues.productsList = JSON.parse(order.dataValues.productsList);
                return order;
            });
            const transformedUserListOrders = yield Promise.all(parsedListOrders.map((order) => __awaiter(void 0, void 0, void 0, function* () {
                const client = yield admin_1.adminClients.findOne({
                    where: { uuid: order.dataValues.userId },
                    attributes: ['rif', 'name', 'email', 'phone', 'address']
                });
                let checkOrderStatus = "";
                if (order.dataValues.isOrderConfirmed == 0 && order.dataValues.isOrderPaid == 0) {
                    checkOrderStatus = 'PTE';
                }
                else if (order.dataValues.isOrderConfirmed == 1 && order.dataValues.shippingAddress !== 0 && order.dataValues.isOrderPaid == 0) {
                    checkOrderStatus = 'CONF';
                }
                else if (order.dataValues.isOrderConfirmed == 1 && order.dataValues.shippingAddress !== 0 && order.dataValues.isOrderPaid == 1) {
                    checkOrderStatus = 'ENPROC';
                }
                else {
                    res.status(500).json({ Message: "Comuníquese con el administrador." });
                }
                const currency = order.dataValues.currency === 0 ? 'Usd' : 'Bsd';
                const totalPay = order.dataValues.currency === 0 ? order.dataValues.totalUsd : order.dataValues.totalBsd;
                const updatedProductsList = yield findProductsListsOrders(order.dataValues.productsList);
                let colorIdentifier = '';
                let statusName = '';
                if (checkOrderStatus === 'PTE') {
                    colorIdentifier = statusIdentifier[3].dataValues.code;
                    statusName = statusIdentifier[3].dataValues.name;
                }
                ;
                if (checkOrderStatus === 'CONF' || checkOrderStatus === 'ENPROC' || checkOrderStatus === 'TRANSP') {
                    colorIdentifier = statusIdentifier[1].dataValues.code;
                    statusName = statusIdentifier[1].dataValues.name;
                }
                ;
                if (checkOrderStatus === 'ENT') {
                    colorIdentifier = statusIdentifier[2].dataValues.code;
                    statusName = statusIdentifier[2].dataValues.name;
                }
                ;
                if (checkOrderStatus === 'CANCEL' || checkOrderStatus === 'DEV') {
                    colorIdentifier = statusIdentifier[0].dataValues.code;
                    statusName = statusIdentifier[0].dataValues.name;
                }
                ;
                return {
                    orderId: order.dataValues.orderId,
                    rif: client === null || client === void 0 ? void 0 : client.dataValues.rif,
                    name: client === null || client === void 0 ? void 0 : client.dataValues.name,
                    email: client === null || client === void 0 ? void 0 : client.dataValues.email,
                    phone: client === null || client === void 0 ? void 0 : client.dataValues.phone.toString(),
                    shippingAddress: order === null || order === void 0 ? void 0 : order.dataValues.shippingAddress,
                    totalPay: totalPay,
                    currency: currency,
                    status: {
                        code: checkOrderStatus,
                        color: statusName,
                    },
                    lastUpdateDate: '',
                    productsList: updatedProductsList
                };
            })));
            res.status(200).json(transformedUserListOrders);
        }
    }
    catch (_5) {
        res.status(500).json({ Message: 'Error al obtener los pedidos.' });
    }
});
exports.getOrdersDetails = getOrdersDetails;
const getOrderDetailToEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.query.orderId;
    try {
        const orderDetail = yield admin_1.adminOrdersModel.findOne({
            where: {
                orderId: orderId
            }
        });
        console.log(":::::::::::::::::: ", orderDetail);
        if (!orderDetail) {
            res.status(404).json({ Message: 'No se encontró el pedido.' });
        }
        else {
            const statusIdentifier = yield admin_1.adminStatusIdentifiers.findAll({ attributes: ['name', 'code'], order: [['code', 'ASC']] });
            let checkOrderStatus = "";
            if (orderDetail.dataValues.isOrderConfirmed == 0 && orderDetail.dataValues.isOrderPaid == 0) {
                checkOrderStatus = 'PTE';
            }
            else if (orderDetail.dataValues.isOrderConfirmed == 1 && orderDetail.dataValues.shippingAddress !== 0 && orderDetail.dataValues.isOrderPaid == 0) {
                checkOrderStatus = 'CONF';
            }
            else if (orderDetail.dataValues.isOrderConfirmed == 1 && orderDetail.dataValues.shippingAddress !== 0 && orderDetail.dataValues.isOrderPaid == 1) {
                checkOrderStatus = 'ENPROC';
            }
            else {
                res.status(500).json({ Message: "Comuníquese con el administrador." });
            }
            orderDetail.dataValues.productsList = JSON.parse(orderDetail.dataValues.productsList);
            const currency = orderDetail.dataValues.currency === 0 ? 'Usd' : 'Bsd';
            const totalPay = orderDetail.dataValues.currency === 0 ? orderDetail.dataValues.totalUsd : orderDetail.dataValues.totalBsd;
            const updatedProductsList = yield findProductsListsOrders(orderDetail.dataValues.productsList);
            let colorIdentifier = '';
            let statusName = '';
            if (checkOrderStatus === 'PTE') {
                colorIdentifier = statusIdentifier[3].dataValues.code;
                statusName = statusIdentifier[3].dataValues.name;
            }
            ;
            if (checkOrderStatus === 'CONF' || checkOrderStatus === 'ENPROC' || checkOrderStatus === 'TRANSP') {
                colorIdentifier = statusIdentifier[1].dataValues.code;
                statusName = statusIdentifier[1].dataValues.name;
            }
            ;
            if (checkOrderStatus === 'ENT') {
                colorIdentifier = statusIdentifier[2].dataValues.code;
                statusName = statusIdentifier[2].dataValues.name;
            }
            ;
            if (checkOrderStatus === 'CANCEL' || checkOrderStatus === 'DEV') {
                colorIdentifier = statusIdentifier[0].dataValues.code;
                statusName = statusIdentifier[0].dataValues.name;
            }
            ;
            const newOrderDetail = {
                orderId: orderDetail.dataValues.orderId,
                userId: orderDetail.dataValues.userId,
                totalPay: totalPay,
                currency: currency,
                status: {
                    code: checkOrderStatus,
                    color: statusName
                },
                lastUpdateDate: '',
                productsList: updatedProductsList
            };
            res.status(201).json(newOrderDetail);
        }
    }
    catch (_6) {
        res.status(500).json({ Message: 'Error al obtener el pedido.' });
    }
});
exports.getOrderDetailToEdit = getOrderDetailToEdit;
const postOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log("POST ORDER: ", body);
    res.status(200);
});
exports.postOrderDetail = postOrderDetail;
const putOrderEdited = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = parseInt(req.query.orderId, 10);
    const userRif = req.body.rif;
    const status = req.body.status;
    try {
        if (orderId !== undefined && status !== undefined) {
            console.log("PRIMERA SENTENCIA");
            const userKeyData = yield admin_1.adminClients.findOne({ where: { rif: userRif } });
            const orderStatus = yield admin_1.adminOrderStatusModel.findAll();
            const orderDetail = yield admin_1.adminOrdersModel.findOne({ where: { orderId: orderId } });
            if (orderDetail !== null) {
                console.log("SEGUNDA SENTENCIA");
                if ((userKeyData === null || userKeyData === void 0 ? void 0 : userKeyData.dataValues.uuid) === orderDetail.dataValues.userId) {
                    console.log("TERCERA SENTENCIA");
                    let userId = orderDetail.dataValues.userId;
                    let currentStatus = orderDetail.dataValues.status;
                    let orderConfirmed = orderDetail.dataValues.isOrderConfirmed;
                    let orderPaid = orderDetail.dataValues.isOrderPaid;
                    let paynumber = orderDetail.dataValues.payNumber.toString();
                    if (currentStatus !== 0 && currentStatus !== 1 && orderPaid !== 0 && orderConfirmed !== 0 && paynumber.length !== 1) {
                        console.log("CUARTA SENTENCIA");
                        let statusValue;
                        orderStatus.forEach(statusCode => {
                            if (statusCode.dataValues.code === status) {
                                statusValue = statusCode.dataValues.id;
                            }
                        });
                        if (statusValue !== undefined) {
                            yield admin_1.adminOrdersModel.update({ orderStatusId: statusValue }, {
                                where: {
                                    orderId: orderId,
                                    userId: userId
                                }
                            });
                            res.status(200).json({ msg: 'Estado de la orden actualizado correctamente.' });
                        }
                        else {
                            res.status(403).json({ Message: "No es posible cambiar el estado porque falta un requisito." });
                        }
                    }
                    else {
                        res.status(403).json({ Message: "No es posible cambiar el estado porque falta un requisito." });
                    }
                }
                else {
                    res.status(404).json({ Message: "Existe error en la relación de los datos." });
                }
            }
            else {
                res.status(404).json({ Message: "Orden no encontrada." });
            }
        }
        else {
            res.status(400).json({ Message: "ID de orden o estado no proporcionados." });
        }
    }
    catch (error) {
        console.error("Error al obtener el pedido:", error);
        res.status(500).json({ Message: 'Error al obtener el pedido.' });
    }
});
exports.putOrderEdited = putOrderEdited;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.query.orderId;
    console.log("DELETE ORDER: ", orderId);
    res.status(200);
});
exports.deleteOrder = deleteOrder;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { userName, password } = body;
        if (password === 'tempPassword') {
            res.status(401).json({ token: null, Message: "Debe cambiar su password para iniciar sesión por primera vez." });
            return;
        }
        const userFound = yield admin_2.adminUsers.findOne({
            where: {
                email: userName,
            },
        });
        const email = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.email;
        let savedPassword = userFound === null || userFound === void 0 ? void 0 : userFound.dataValues.password;
        let receivedPassword = password;
        const pass = yield (0, admin_1.comparePassword)(receivedPassword, savedPassword);
        if (!pass) {
            res.status(401).json({ token: null, Message: 'Invalid password or user.' });
            return;
        }
        if (userFound !== undefined && userFound !== null) {
            const token = jsonwebtoken_1.default.sign({ id: userFound.dataValues.uuid }, config_1.default.SECRET, {
                expiresIn: 86400
            });
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
                name: salesUnits.dataValues.name
            }));
            const dataJobs = yield admin_1.adminJobsModel.findAll();
            const jobsAll = dataJobs.map((jobs) => ({
                id: jobs.dataValues.id.toString(),
                name: jobs.dataValues.name,
                code: jobs.dataValues.code,
                description: jobs.dataValues.description || ''
            }));
            const dataDepts = yield admin_1.adminDepartmentsModel.findAll();
            const deptsAll = dataDepts.map((depts) => ({
                id: depts.dataValues.id.toString(),
                name: depts.dataValues.name,
                code: depts.dataValues.code,
                description: depts.dataValues.description || ''
            }));
            const dataStatus = yield admin_1.adminStatusModel.findAll();
            const statusAll = dataStatus.map((status) => ({
                id: status.dataValues.id.toString(),
                name: status.dataValues.name
            }));
            const dataOrderStatus = yield admin_1.adminOrderStatusModel.findAll();
            const orderStatusAll = dataOrderStatus.map((orderStatus) => ({
                id: orderStatus.dataValues.id.toString(),
                name: orderStatus.dataValues.name,
                code: orderStatus.dataValues.code
            }));
            const dataStatusIdentifiers = yield admin_1.adminStatusIdentifiers.findAll();
            const statusIdentifiersAll = dataStatusIdentifiers.map((identifiers) => ({
                id: identifiers.dataValues.id.toString(),
                name: identifiers.dataValues.name,
                code: identifiers.dataValues.code,
                description: identifiers.dataValues.description
            }));
            const userName = yield admin_2.adminUsers.findOne({
                where: {
                    email: email,
                    status: true
                },
                attributes: ['id', 'uuid', 'name', 'status']
            });
            console.log("User Name::: ", userName);
            const dataWorkspace = {
                token: token,
                userName: userName === null || userName === void 0 ? void 0 : userName.dataValues.name,
                message: 'Usuario autenticado',
                isLogged: userName === null || userName === void 0 ? void 0 : userName.dataValues.status,
                categories: categoriesAll,
                sections: sectionsAll,
                salesUnits: salesUnitsAll,
                jobs: jobsAll,
                departments: deptsAll,
                status: statusAll,
                statusIdentifiers: statusIdentifiersAll,
                orderStatus: orderStatusAll
            };
            res.status(200).json(dataWorkspace);
        }
        else {
            res.status(403).json({
                msg: 'Usuario o contraseña incorrectos'
            });
        }
        ;
    }
    catch (error) {
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.postLogin = postLogin;
function findProductsListsOrders(wishProductList) {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = [];
        for (const wishProduct of wishProductList) {
            const productId = parseInt(wishProduct.productId);
            const product = yield buyListConfirm_1.lastBuyListConfirmedModel.findByPk(productId);
            if (product) {
                const arrayTemporal = {
                    id: product.dataValues.id,
                    imageUrl: product.dataValues.imageUrl,
                    name: product.dataValues.name,
                    code: product.dataValues.code,
                    price: product.dataValues.price,
                    quantity: wishProduct.quantity
                };
                productList.push(arrayTemporal);
            }
        }
        return productList;
    });
}
//# sourceMappingURL=admin.js.map