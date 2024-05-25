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
exports.postLogin = exports.deleteClient = exports.putClient = exports.postClient = exports.getClientToEdit = exports.getClients = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUserToEdit = exports.getUsuario = exports.getUsuarios = exports.deleteProduct = exports.postProduct = exports.putProductEdited = exports.getProductToEditDetail = exports.getProducts = exports.getToCreateProduct = exports.getAdminSections = exports.getAdminCategories = void 0;
const admin_1 = require("../models/admin");
const admin_2 = require("../models/admin");
const storage_c_1 = __importDefault(require("../services/storage_c"));
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
            imageUrl: product.dataValues.imageUrl || '',
            name: product.dataValues.name || '',
            code: product.dataValues.code || '',
            type: product.dataValues.type || '',
            byWeight: product.dataValues.byWeight,
            weightPerUnit: product.dataValues.weightPerUnit,
            weightPerBox: product.dataValues.weightPerBox,
            byUnit: product.dataValues.byUnit,
            unitQty: product.dataValues.unitQty,
            saleUnitID: product.dataValues.saleUnitID,
            unitPerBox: product.dataValues.unitPerBox,
            description: product.dataValues.description || '',
            isOffer: product.dataValues.isOffer,
            isFree: product.dataValues.isFree,
            isOutStock: product.dataValues.isOutStock,
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
    const code = req.query.code;
    const { body } = req;
    console.log('Producto editado: ', body);
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
    try {
        (0, storage_c_1.default)(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                res.status(500).json({
                    msg: 'Error al cargar la imagen'
                });
            }
            const { body, file } = req;
            console.log('Producto nuevo: ', body);
            console.log('Imagen: ', file);
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
        const usuarios = yield admin_2.adminUsers.findAll();
        if (!usuarios) {
            res.status(404).json({ msg: 'No se encontraron usuarios.' });
        }
        else {
            const usuariosActualizados = usuarios
                .filter((usuario) => usuario.dataValues.status)
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
                uuid: body.id,
                name: body.name,
                idNumber: body.idNumber,
                email: body.email,
                password: (body === null || body === void 0 ? void 0 : body.password) || '',
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
    const { id } = req.params;
    const usuario = yield admin_2.adminUsers.findByPk(id);
    try {
        if (!usuario) {
            res.status(403).json({
                msg: 'No se encuentra el usuario con indicado'
            });
        }
        else {
            yield usuario.update({ status: false });
        }
        res.json(usuario);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const getClients = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield admin_1.adminClients.findAll();
        const clientsUpdated = clients
            .filter((client) => client.dataValues.status)
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
        res.json(clientsUpdated);
    }
    catch (error) {
        res.status(500).json({});
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
            const client = {
                uuid: body.id,
                rif: body.rif,
                name: body.name,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2 || '',
                address: body.address || '',
                represent: body.represent || '',
                password: body.password || '',
                status: body.status ? 1 : 0,
            };
            console.log(">>>>>>>> CLIENT: ", client);
            yield admin_1.adminClients.create(client);
            res.status(201).json({ Message: 'Cliente creado.' });
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
            const dataJobs = yield admin_1.adminJobsModel.findAll();
            const jobsAll = dataJobs.map((jobs) => ({
                id: jobs.dataValues.id.toString(),
                name: jobs.dataValues.name,
                code: jobs.dataValues.code,
                description: jobs.dataValues.description
            }));
            const dataDepts = yield admin_1.adminDepartmentsModel.findAll();
            console.log('::::::::dataDepts ', dataDepts);
            const deptsAll = dataDepts.map((depts) => ({
                id: depts.dataValues.id.toString(),
                name: depts.dataValues.name,
                code: depts.dataValues.code,
                description: depts.dataValues.description
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
                isLogged: userName === null || userName === void 0 ? void 0 : userName.dataValues.status,
                categories: categoriesAll,
                sections: sectionsAll,
                salesUnits: salesUnitsAll,
                jobs: jobsAll,
                departments: deptsAll
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
//# sourceMappingURL=admin.js.map