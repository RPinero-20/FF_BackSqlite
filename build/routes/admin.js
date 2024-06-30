"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connect_1 = require("../db/connect");
const admin_1 = require("../controller/admin");
const admin_2 = require("../controller/admin");
const admin_3 = require("../controller/admin");
const admindownloadInvoice_1 = require("../controller/admindownloadInvoice");
const adminRouter = (0, express_1.Router)();
const homeUrl = '/home';
const products = '/products';
const toCreate = '/product/newProduct';
const toSave = '/product';
const toEdit = '/product';
const toDetail = '/product';
const toDelete = '/product';
const categories = '/categories';
const sections = '/sections';
const users = '/users';
const toEditUser = '/user';
const editedUser = '/user';
const createUser = '/user';
const deleteUser = '/user';
const clients = '/clients';
const toEditClient = '/client';
const editedClient = '/client';
const createClient = '/client';
const delClient = '/client';
const orders = '/orders';
const toEditOrder = '/order';
const editedOrder = '/order';
const createOrder = '/order';
const delOrder = '/order';
const downloadInvoice = "/downloadInvoice";
const loginUser = '/login';
adminRouter.use((_req, _res, next) => {
    (0, connect_1.conectToDB)();
    next();
});
adminRouter.get(products, admin_1.getProducts);
adminRouter.get(toDetail, admin_1.getProductToEditDetail);
adminRouter.get(toCreate, admin_1.getToCreateProduct);
adminRouter.put(toEdit, admin_1.putProductEdited);
adminRouter.post(toSave, admin_1.postProduct);
adminRouter.delete(toDelete, admin_1.deleteProduct);
adminRouter.get(users, admin_3.getUsuarios);
adminRouter.get(toEditUser, admin_3.getUserToEdit);
adminRouter.put(editedUser, admin_1.putUsuario);
adminRouter.post(createUser, admin_3.postUsuario);
adminRouter.delete(deleteUser, admin_1.deleteUsuario);
adminRouter.get(sections, admin_1.getAdminSections);
adminRouter.get(categories, admin_2.getAdminCategories);
adminRouter.get(clients, admin_3.getClients);
adminRouter.get(toEditClient, admin_1.getClientToEdit);
adminRouter.put(editedClient, admin_1.putClient);
adminRouter.post(createClient, admin_1.postClient);
adminRouter.delete(delClient, admin_1.deleteClient);
adminRouter.get(orders, admin_1.getOrdersDetails);
adminRouter.get(toEditOrder, admin_1.getOrderDetailToEdit);
adminRouter.put(editedOrder, admin_1.putOrderEdited);
adminRouter.post(createOrder, admin_1.postOrderDetail);
adminRouter.delete(delOrder, admin_1.deleteOrder);
adminRouter.get(downloadInvoice, admindownloadInvoice_1.getInvoice);
adminRouter.post(loginUser, admin_3.postLogin);
exports.default = adminRouter;
//# sourceMappingURL=admin.js.map