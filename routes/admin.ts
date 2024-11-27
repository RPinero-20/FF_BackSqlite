import { Router } from "express";
import { conectToDB } from "../db/connect";
import { AdminURLS } from "../src/types";
import { getToCreateProduct, postProduct, getProducts, putProductEdited, getProductToEditDetail,
                deleteProduct, getAdminSections, putUsuario, deleteUsuario, 
                getClientToEdit,
                putClient,
                postClient,
                deleteClient,
                getOrdersDetails,
                getOrderDetailToEdit,
                putOrderEdited,
                postOrderDetail,
                deleteOrder,
                deleteCategory,
                putCategory} from "../controller/admin";
import { getAdminCategories, postCategory } from "../controller/admin";
import { getUsuarios, getUserToEdit, postUsuario, getClients, postLogin } from "../controller/admin";
import { getInvoice } from "../controller/admindownloadInvoice";
import { authJwt } from '../middlewares';

const adminRouter = Router();

const homeUrl: AdminURLS = '/home';
const products: AdminURLS = '/products';
const toCreate: AdminURLS = '/product/newProduct';
const toSave: AdminURLS = '/product';
const toEdit: AdminURLS = '/product';
const toDetail: AdminURLS = '/product';
const toDelete: AdminURLS = '/product';
const categories: AdminURLS = '/categories';
const createCategory: AdminURLS = '/category';
const editedCategory: AdminURLS = '/category';
const delCategory: AdminURLS = '/category';
const sections: AdminURLS = '/sections';
const users: AdminURLS = '/users';
const toEditUser: AdminURLS = '/user';
const editedUser: AdminURLS = '/user';
const createUser: AdminURLS = '/user';
const deleteUser: AdminURLS = '/user';
const clients: AdminURLS = '/clients';
const toEditClient: AdminURLS = '/client';
const editedClient: AdminURLS = '/client';
const createClient: AdminURLS = '/client';
const delClient: AdminURLS = '/client';
const orders: AdminURLS = '/orders';
const toEditOrder: AdminURLS = '/order';
const editedOrder: AdminURLS = '/order';
const createOrder: AdminURLS = '/order';
const delOrder: AdminURLS = '/order';
const downloadInvoice: AdminURLS = "/downloadInvoice";
const loginUser: AdminURLS = '/login';


adminRouter.use((_req, _res, next) => {
    conectToDB();
    next();
});


// Mantenimiento Administrador
adminRouter.get(products, [authJwt.verifyToken, authJwt.IsModerator], getProducts);
adminRouter.get(toDetail, [authJwt.verifyToken, authJwt.IsModerator], getProductToEditDetail);
adminRouter.get(toCreate, [authJwt.verifyToken, authJwt.IsModerator], getToCreateProduct);
adminRouter.put(toEdit, [authJwt.verifyToken, authJwt.IsModerator], putProductEdited);
adminRouter.post(toSave, [authJwt.verifyToken, authJwt.IsModerator], postProduct);
adminRouter.delete(toDelete, [authJwt.verifyToken, authJwt.IsModerator], deleteProduct);

adminRouter.get(users, [authJwt.verifyToken, authJwt.IsModerator], getUsuarios);
adminRouter.get(toEditUser, [authJwt.verifyToken, authJwt.IsModerator], getUserToEdit);
adminRouter.put(editedUser, [authJwt.verifyToken, authJwt.IsModerator], putUsuario);
adminRouter.post(createUser, postUsuario); // [authJwt.verifyToken, authJwt.IsModerator], 
adminRouter.delete(deleteUser, [authJwt.verifyToken, authJwt.IsModerator], deleteUsuario);


adminRouter.get(sections, [authJwt.verifyToken, authJwt.IsModerator], getAdminSections);


adminRouter.get(categories, [authJwt.verifyToken, authJwt.IsModerator], getAdminCategories);
adminRouter.post(createCategory, [authJwt.verifyToken, authJwt.IsModerator], postCategory);
adminRouter.put(editedCategory, [authJwt.verifyToken, authJwt.IsModerator], putCategory);
adminRouter.delete(delCategory, [authJwt.verifyToken, authJwt.IsModerator], deleteCategory);

adminRouter.get(clients, [authJwt.verifyToken, authJwt.IsModerator], getClients);
adminRouter.get(toEditClient, [authJwt.verifyToken, authJwt.IsModerator], getClientToEdit);
adminRouter.put(editedClient, [authJwt.verifyToken, authJwt.IsModerator], putClient);
adminRouter.post(createClient, [authJwt.verifyToken, authJwt.IsModerator], postClient);
adminRouter.delete(delClient, [authJwt.verifyToken, authJwt.IsModerator], deleteClient);

adminRouter.get(orders, [authJwt.verifyToken, authJwt.IsModerator], getOrdersDetails);
adminRouter.get(toEditOrder, [authJwt.verifyToken, authJwt.IsModerator], getOrderDetailToEdit);
adminRouter.put(editedOrder, [authJwt.verifyToken, authJwt.IsModerator], putOrderEdited);
adminRouter.post(createOrder, [authJwt.verifyToken, authJwt.IsModerator], postOrderDetail);
adminRouter.delete(delOrder, [authJwt.verifyToken, authJwt.IsModerator], deleteOrder);

adminRouter.get(downloadInvoice, [authJwt.verifyToken, authJwt.IsModerator], getInvoice);
adminRouter.post(loginUser, postLogin);

export default adminRouter;
