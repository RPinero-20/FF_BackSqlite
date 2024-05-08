"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connect_1 = require("../db/connect");
const admin_1 = require("../controller/admin");
const admin_2 = require("../controller/admin");
const admin_3 = require("../controller/admin");
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
const editUser = '/users/:id';
const deleteUser = '/users/:id';
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
adminRouter.put(editUser, admin_1.putUsuario);
adminRouter.post(users, admin_3.postUsuario);
adminRouter.delete(deleteUser, admin_1.deleteUsuario);
adminRouter.get(sections, admin_1.getAdminSections);
adminRouter.get(categories, admin_2.getAdminCategories);
adminRouter.post(loginUser, admin_3.postLogin);
exports.default = adminRouter;
//# sourceMappingURL=admin.js.map