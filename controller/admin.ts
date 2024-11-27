import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid';
import {
    adminCategory, adminSections, adminProducts, adminSalesUnits, adminJobsModel,
    adminDepartmentsModel, adminClients, adminStatusModel,
    adminOrdersModel,
    adminOrderStatusModel,
    adminStatusIdentifiers,
    encryptPassword,
    comparePassword
} from "../models/admin";
import { adminUsers } from '../models/admin';
import { json } from "sequelize";
import jwt from 'jsonwebtoken';
import {
    adminLoginUserInterfaceModel, adminProductsInterfaceModel, adminUsersInterfaceModel,
    dataConfig, dataConfigurationWorkspaceInterface, jobsDeptsInterface, clientUsersInterfaceModel,
    orderDetailsInterface,
    orderStatusesInterface,
    statusIdentifiersInterface,
    adminCategorySection
} from "../src/types";
import fileUpload from "../services/storage_c";
import multer from "multer";
import path from 'path';
import fs from 'fs';
import { lastBuyListConfirmedModel } from "../models/buyListConfirm";
import { getInvoice } from "./downloadInvoice";
import config from "../config";

// ************** //
// ADMIN CATEGORIAS //
// ************** //


export const getAdminCategories = async (_req: Request, res: Response) => {
    try {
        const categoryList = await adminCategory.findAll({attributes:['id', 'sectionID'], order: [['id', 'ASC']]});
        const catSecID: Array<adminCategorySection> = categoryList.map((items) => ({
            categoryId: items.dataValues.id.toString(),
            sectionId: items.dataValues.sectionID.toString()
        }));
        res.json(catSecID);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
}

export const postCategory = async (req: Request, res: Response) => {
    const body = req.body;
    const { name, sectionId } = req.body;
    console.log(":.......... ", body);
    try {
        if(body !== undefined){
            if (!name || !sectionId) {
                res.status(400).json({ error: 'Todos los campos son requeridos.' });
                return;
            } else {
                const newCategory = {
                    name: body.name,
                    sectionID: body.sectionId
                }
                await adminCategory.create(newCategory);
                res.json(newCategory);
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador'
        });
    }
}


export const putCategory = async (req: Request, res: Response) => {
    const body = req.body;
    const categoryId = req.query.id;
    const { name, sectionId } = req.body;
    console.log("::::::::::: ", body, name, sectionId);
    try {
        if(body !== undefined && categoryId !== undefined){
            if (!name || !sectionId) {
                res.status(400).json({ error: 'Todos los campos son requeridos.' });
                return;
            } else {
                const categoryToEdit = await adminCategory.findOne({
                    where: {
                        id: categoryId
                    }
                });
                if (!categoryToEdit){
                    res.status(403).json({ msg: 'No existe categoría: ' + body.name });
                    return
                } else {
                    await categoryToEdit.update(body, {
                        where: {
                            name: body.name,
                            sectionId: body.sectionId
                        }
                    });
                    res.status(201).end();
                    return
                }
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Comuníquese con el administrador.' });
    }
}


export const deleteCategory = async (req: Request, res: Response) => {
    const categoryId: number = req.query.id as unknown as number;
    try{
        if (categoryId !== undefined ){
            const categoryToDelete = await adminCategory.findByPk(categoryId);
            console.log("DELETE CATEGORY", categoryToDelete);
            const productFound = await adminProducts.findOne({
                where: {
                    categoryID: categoryId
                }
            })
            if (!productFound){
                categoryToDelete?.destroy();
                res.status(201).end();
            } else{
                res.status(403).json({msg: "No es posible eliminar, existen productos asociados."})
            }
        } else {
            res.status(404).json({msg: "No se puede procesar la petición."})
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
}

// ************** //
// ADMIN SECCIONES //
// ************** //


export const getAdminSections = async (_req: Request, res: Response) => {
    try {
        const sectionList = await adminSections.findAll();
        res.json(sectionList);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
}


// ************** //
// ADMIN PRODUCTS //
// ************** //


export const getToCreateProduct = async (req: Request, res: Response) => {
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
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: ' Internal Server Error'
            });
        }

    } else {
        res.status(400).json({
            error: 'Bad Request'
        });
        return;
    }
}


export const getProducts = async (_req: Request, res: Response) => {
    try {
        const productList = await adminProducts.findAll();
        const productsAll: Array<adminProductsInterfaceModel> = productList.map((product) => ({            
            // id: product.dataValues.id.toString(),
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
            isOutStock: product.dataValues.unitQty !== 0 ? 0 : product.dataValues.isOutStock, // product.dataValues.isOutStock,
            discount: product.dataValues.discount,
            categoryID: product.dataValues.categoryID,
            sectionID: product.dataValues.sectionID,
            price: product.dataValues.price,
        }));
        console.log("PRODUCTS ALL :::::: ", productsAll);
        res.json(productsAll);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
};


export const getProductToEditDetail = async (req: Request, res: Response) => {
    const code = req.query.code as string;
    try {
        const productToEdit = await adminProducts.findOne({
            where: {
                code: code
            }
        });

        if (productToEdit) {
            const { id, ...productDetail } = productToEdit.dataValues;
            res.json(productDetail);
        } else {
            res.status(404).json({
                msg: `Producto no encontrado: ${code}`,
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            Error: 'Internal Server Error'
        });
    }
};


async function getProductByCode(productCode: string) {
    const productToEdit = await adminProducts.findOne({
        where: {
            code: productCode
        }
    });
    return productToEdit
}


export const putProductEdited = async (req: Request, res: Response) => {
    try {
        // Capturar la imagen utilizando multer
        const image = fileUpload(req, res, async (err) => { //fileUpload
            if (err) {
                console.error(err);
                res.status(500).json({
                    msg: 'Error al cargar la imagen'
                });
            }

            // Extraer los datos del formulario
            const { body, file } = req;

            let imageUrl: string = '';
            let newName: string = '';
            if (file !== undefined) {
                const originalName = file?.originalname;
                newName = Date.now() + '-' + body.code + file.originalname;
                const newPath = file?.path.replace(originalName, newName);
                fs.renameSync(file?.path, newPath);
                imageUrl = newPath;
            }

            const productToEdit = await getProductByCode(body.code);
            if (!productToEdit) {
                res.status(404).json({
                    Error: 'No existe Producto con Código: ' + body.code
                }); return
            }

            body.imageUrl = `${req.protocol}://${req.hostname}:${process.env.PORT || '8000'}/assets/images/productsThumbnails/${newName}`; //imageUrl;
            await productToEdit.update(body, {
                where: {
                    code: body.code
                }
            });
            res.json(productToEdit);

        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador'
        });
    }
};


// export const putProductEdited = async (req: Request, res: Response) => {
//     const code = req.query.code as string;
//     const { body } = req;
//     console.log('Producto editado: ', body);
//     try {
//         const productToEdit = await getProductByCode(code);
//         if (!productToEdit) {
//             res.status(404).json({
//                 Error: 'No existe Producto con Código: ' + code
//             }); return
//         }

//         await productToEdit.update(body, {
//             where: {
//                 code: code
//             }
//         });
//         res.json(productToEdit);

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             error: 'Internal Server Error.'
//         });
//     }
// }


export const postProduct = async (req: Request, res: Response) => {
    try {
        // Capturar la imagen utilizando multer
        const image = fileUpload(req, res, async (err) => { //fileUpload
            if (err) {
                console.error(err);
                res.status(500).json({
                    msg: 'Error al cargar la imagen'
                });
            }

            // Extraer los datos del formulario
            const { body, file } = req;

            let imageUrl: string = '';
            let newName: string = '';
            if (file !== undefined) {
                const originalName = file?.originalname;
                newName = Date.now() + '-' + body.code + file.originalname;
                const newPath = file?.path.replace(originalName, newName);
                fs.renameSync(file?.path, newPath);
                imageUrl = newPath;
            }

            console.log("imageUrl::::: ", imageUrl);
            console.log("HOSTNAME::::: ", req.hostname);
            console.log("DIR NAME::::: ", __dirname);
            const existCode = await adminProducts.findOne({
                where: {
                    code: body.code
                }
            });

            if (existCode) {
                res.status(403).json({
                    msg: 'Código de producto ya existe. ' + body.code
                }); return
            }

            body.imageUrl = `${req.protocol}://${req.hostname}:${process.env.PORT || '8000'}/assets/images/productsThumbnails/${newName}`; //imageUrl;
            const productData = await adminProducts.create(body);
            res.json(productData);
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno, contacte al administrador'
        });
    }
};


export const deleteProduct = async (req: Request, res: Response) => {
    const code = req.query.code as string;
    try {
        const existProduct = await adminProducts.findOne({
            where: {
                code: code
            }
        });
        if (!existProduct) {
            res.status(403).json({ msg: 'No se encuentra el producto indicado: ' + code });
        } else {
            await existProduct.destroy();
            console.log(`Registro eliminado: ${code} `);
            res.status(201).json({ Message: 'Registro eliminado.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
}


// ************** //
// ADMIN USUARIOS //
// ************** //


export const getUsuarios = async (_req: Request, res: Response) => {
    try {
        const usuarios = await adminUsers.findAll({ order: [['status', 'DESC']]});
        if (!usuarios) {
            res.status(404).json({ msg: 'No se encontraron usuarios.' });
        } else {
            const usuariosActualizados = usuarios
                // .filter((usuario) => usuario.dataValues.status) // Filtrar solo los usuarios con estado "true"
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
};


export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await adminUsers.findByPk(id);
    try {
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el id: ${id}`,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
}


export const getUserToEdit = async (req: Request, res: Response) => {
    const userId = req.query.id;
    const userName = req.query.name;
    const idNumber = req.query.idNumber;
    try {
        const findUserToEdit = await adminUsers.findOne({
            where: {
                id: userId,
                name: userName,
                idNumber: idNumber
            }
        });
        if (!findUserToEdit) {
            res.status(404).json({ msg: 'No se encontró el usuario para editar.' })
        } else {
            const userToEdit: adminUsersInterfaceModel = {
                id: findUserToEdit?.dataValues.id.toString(),
                uuid: findUserToEdit?.dataValues.uuid,
                name: findUserToEdit?.dataValues.name || '',
                idNumber: findUserToEdit?.dataValues.idNumber,
                email: findUserToEdit?.dataValues.email || '',
                password: findUserToEdit?.dataValues.password || '',
                phone: findUserToEdit?.dataValues.phone,
                status: findUserToEdit?.dataValues.status,
                job: findUserToEdit?.dataValues.job || '',
                department: findUserToEdit?.dataValues.department || '',
                address: findUserToEdit?.dataValues.address || ''
            }
            res.status(200).json(userToEdit);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador' });
    }
}


export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    console.log("Post Usuario", body);
    try {
// GENERAR UUID Y PONER CAMPO ROLES EN LA TABLA
        const existEmail = await adminUsers.findOne({
            where: {
                email: body.email
            }
        });

        if (existEmail) {
            res.status(400).json({
                msg: 'Email de usuario ya existe. ' + body.email
            }); return
        } else {
            const usuario = {
                uuid: uuidv4(), //body.id,
                name: body.name,
                idNumber: body.idNumber,
                email: body.email,
                password: await encryptPassword(body.password.toString()),
                phone: body.phone,
                status: body.status,
                job: body.job,
                department: body.department,
                address: body.address
            }

            await adminUsers.create(usuario);
            res.status(201).end();
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Comuníquese con el administrador.' });
    }
}


export const putUsuario = async (req: Request, res: Response) => {
    const id = req.query.id;
    const { body } = req;
    console.log("putUsuario::::: ", body)
    try {
        if (id !== undefined) {
            const usuario = await adminUsers.findOne({
                where: {
                    id: id
                }
            });
            if (!usuario) {
                res.status(403).json({ msg: 'No existe usuario: ' + body.name });
                return
            } else {
                await usuario.update(body);
                res.status(201).end();
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Comuníquese con el administrador.' });
    }
}


export const deleteUsuario = async (req: Request, res: Response) => {
    // Se realiza una eliminación lógica en lugar de física para evitar registros huerfanos
    const { id } = req.params;
    const usuario = await adminUsers.findByPk(id);
    try {
        if (!usuario) {
            res.status(403).json({
                msg: 'No se encuentra el usuario con indicado'
            });
        } else {
            await usuario.update({ status: false });
        }
        res.json(usuario)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
}


export const getClients = async (_req: Request, res: Response) => {
    try {
        const clients = await adminClients.findAll({
            order: [['status', 'DESC']]
            });
        const clientsUpdated = clients
            // .filter((client) => client.dataValues.status) // Filtrar solo los clientes con estado "true"
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
                    password: client?.dataValues.password || '',
                };
            });
        res.json(clientsUpdated);
    } catch (error) {
        res.status(500).json({});
    }
};


export const getClientToEdit = async (req: Request, res: Response) => {
    const { id } = req.query;
    console.log("::::: id ", id);
    try {
        const findClient = await adminClients.findOne({
            where: {
                uuid: id
            }
        });
        if (!findClient) {
            res.status(404).json({ Message: 'No se encuentra el cliente solicitado.' });
        } else {
            const clientToEdit: clientUsersInterfaceModel = {
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
            console.log("client to edit: ", clientToEdit)
            res.json(clientToEdit);
        }
    } catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' })
    }
}


export const postClient = async (req: Request, res: Response) => {
    const { body } = req;
    const email = body.email;
    console.log("?????? BODY:", body);
    try {
        const findClient = await adminClients.findOne({
            where: {
                email: email
            }
        });
        if (!findClient) {
            console.log("POR AQUI:::::")
            let clientUid = uuidv4();
            const client = {
                uuid: clientUid,//body.id,
                rif: body.rif,
                name: body.name,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2 || '',
                address: body.address || '',
                represent: body.represent || '',
                codeId: clientUid, //body.id,
                password: await encryptPassword(body.password),//body.password || '',
                status: body.status ? 1 : 0,
                rol: 2
            }
            console.log(">>>>>>>> CLIENT: ", client);
            await adminClients.create(client);
            res.status(201).json({ Message: 'Cliente creado.' });
        } else {
            res.status(400).json({ Message: 'El correo ya se encuentra registrado.' });
        }
    } catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' })
    }
}


async function getClientById(id: string) {
    const clientToEdit = await adminClients.findOne({
        where: {
            uuid: id
        }
    });
    return clientToEdit
}


export const putClient = async (req: Request, res: Response) => {
    const id: string = req.query.id as string;
    const { body } = req;
    try {
        const clientToEdit = await getClientById(id);
        if (!clientToEdit) {
            res.status(404).json({ Error: 'Algo ha fallado al editar a: ' + body.name });
            return
        } else {
            const editedClient = {
                rif: body.rif,
                name: body.name,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2,
                address: body.address,
                represent: body.represent || '',
                status: body.status,
            }
            await adminClients.update(editedClient, {
                where: {
                    uuid: id
                }
            });
            res.status(201).end();
        }
    } catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' })
    }
}


export const deleteClient = async (req: Request, res: Response) => {
    const id: string = req.query.id as string;
    try {
        const client = await adminClients.findOne({
            where: {
                uuid: id
            }
        });
        if (!client) {
            res.status(403).json({ Message: 'No se encuentra el usuario con indicado' });
        } else {
            await client.update({ status: false });
        }
        res.status(201).json({ Message: 'Cliente desactivado con éxito.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Comuníquese con el administrador.' });
    }
}


export const getOrdersDetails = async (_req: Request, res: Response) => {
    try{

        const orders = await adminOrdersModel.findAll();
        if(!orders){
            res.status(403).json({Message: 'No se encontraron pedidos.'});
        } else {
            const statusIdentifier = await adminStatusIdentifiers.findAll({attributes:['name', 'code'], order: [['code', 'ASC']]});
            const parsedListOrders = orders.map(order => {
                order.dataValues.productsList = JSON.parse(order.dataValues.productsList);
                return order;
            });
            const transformedUserListOrders = await Promise.all(parsedListOrders.map(async (order) => {
                const client = await adminClients.findOne({
                    where: { uuid: order.dataValues.userId },
                    attributes: ['rif', 'name', 'email', 'phone', 'address']
                });
                let checkOrderStatus: string = "" ;
                if (order.dataValues.isOrderConfirmed == 0 && order.dataValues.isOrderPaid == 0 ) {
                    checkOrderStatus = 'PTE';
                } else if (order.dataValues.isOrderConfirmed == 1 && order.dataValues.shippingAddress !== 0 && order.dataValues.isOrderPaid == 0) {
                    checkOrderStatus = 'CONF';
                } else if ( order.dataValues.isOrderConfirmed == 1 && order.dataValues.shippingAddress !== 0 && order.dataValues.isOrderPaid == 1) {
                    checkOrderStatus = 'ENPROC';
                // } else if (orderDetail.dataValues.isConfirmed == 1 && orderDetail.dataValues.isOrderPaid !== 0 && orderDetail.dataValues.shippingAddress !== 0 && orderDetail.dataValues.payNumber !== 0) {
                //     checkOrderStatus = 'TRANSP';
                } else {
                    res.status(500).json({Message: "Comuníquese con el administrador."});
                }

                const currency = order.dataValues.currency === 0 ? 'Usd' : 'Bsd';
                const totalPay = order.dataValues.currency === 0 ? order.dataValues.totalUsd : order.dataValues.totalBsd;
                // const status = order.dataValues.isOrderPaid === 0 ? 'PTE' : 'CONF';
                const updatedProductsList = await findProductsListsOrders(order.dataValues.productsList);
                let colorIdentifier = '';
                let statusName = '';
                if(checkOrderStatus === 'PTE'){
                    colorIdentifier = statusIdentifier[3].dataValues.code;
                    statusName = statusIdentifier[3].dataValues.name
                };
                if(checkOrderStatus === 'CONF' || checkOrderStatus === 'ENPROC' || checkOrderStatus === 'TRANSP'){
                    colorIdentifier = statusIdentifier[1].dataValues.code;
                    statusName = statusIdentifier[1].dataValues.name
                };
                if(checkOrderStatus === 'ENT'){
                    colorIdentifier = statusIdentifier[2].dataValues.code;
                    statusName = statusIdentifier[2].dataValues.name
                };
                if(checkOrderStatus === 'CANCEL' || checkOrderStatus === 'DEV'){
                    colorIdentifier = statusIdentifier[0].dataValues.code;
                    statusName = statusIdentifier[0].dataValues.name
                };

                return {
                    orderId: order.dataValues.orderId,
                    rif: client?.dataValues.rif,
                    name: client?.dataValues.name,
                    email: client?.dataValues.email,
                    phone: client?.dataValues.phone.toString(),
                    shippingAddress: order?.dataValues.shippingAddress,
                    totalPay: totalPay,
                    currency: currency,
                    status: {
                        code: checkOrderStatus,
                        color: statusName,
                    },
                    lastUpdateDate: '',
                    productsList: updatedProductsList
                };
            }));
            res.status(200).json(transformedUserListOrders);
        }
        } catch{
        res.status(500).json({Message: 'Error al obtener los pedidos.'});
    }
}


export const getOrderDetailToEdit = async (req: Request, res: Response) => {
    const orderId: string = req.query.orderId as string;

    try {
        const orderDetail = await adminOrdersModel.findOne({
            where: {
                orderId: orderId
            }
        });
        console.log(":::::::::::::::::: ", orderDetail)
        if(!orderDetail){
            res.status(404).json({Message: 'No se encontró el pedido.'});
        } else {
                const statusIdentifier = await adminStatusIdentifiers.findAll({attributes:['name', 'code'], order: [['code', 'ASC']]});
                let checkOrderStatus: string = "" ;
                if (orderDetail.dataValues.isOrderConfirmed == 0 && orderDetail.dataValues.isOrderPaid == 0 ) {
                    checkOrderStatus = 'PTE';
                } else if (orderDetail.dataValues.isOrderConfirmed == 1 && orderDetail.dataValues.shippingAddress !== 0 && orderDetail.dataValues.isOrderPaid == 0) {
                    checkOrderStatus = 'CONF';
                } else if ( orderDetail.dataValues.isOrderConfirmed == 1 && orderDetail.dataValues.shippingAddress !== 0 && orderDetail.dataValues.isOrderPaid == 1) {
                    checkOrderStatus = 'ENPROC';
                // } else if (orderDetail.dataValues.isConfirmed == 1 && orderDetail.dataValues.isOrderPaid !== 0 && orderDetail.dataValues.shippingAddress !== 0 && orderDetail.dataValues.payNumber !== 0) {
                //     checkOrderStatus = 'TRANSP';
                } else {
                    res.status(500).json({Message: "Comuníquese con el administrador."});
                }
                orderDetail.dataValues.productsList = JSON.parse(orderDetail.dataValues.productsList);
                const currency = orderDetail.dataValues.currency === 0 ? 'Usd' : 'Bsd';
                const totalPay = orderDetail.dataValues.currency === 0 ? orderDetail.dataValues.totalUsd : orderDetail.dataValues.totalBsd;
                // const status = orderDetail.dataValues.isOrderPaid === 0 ? 'PTE' : 'CONF';
                const updatedProductsList = await findProductsListsOrders(orderDetail.dataValues.productsList);

                let colorIdentifier = '';
                let statusName = '';
                if(checkOrderStatus === 'PTE'){
                    colorIdentifier = statusIdentifier[3].dataValues.code;
                    statusName = statusIdentifier[3].dataValues.name;
                };
                if(checkOrderStatus === 'CONF' || checkOrderStatus === 'ENPROC' || checkOrderStatus === 'TRANSP'){
                    colorIdentifier = statusIdentifier[1].dataValues.code;
                    statusName = statusIdentifier[1].dataValues.name;

                };
                if(checkOrderStatus === 'ENT'){
                    colorIdentifier = statusIdentifier[2].dataValues.code;
                    statusName = statusIdentifier[2].dataValues.name;

                };
                if(checkOrderStatus === 'CANCEL' || checkOrderStatus === 'DEV'){
                    colorIdentifier = statusIdentifier[0].dataValues.code;
                    statusName = statusIdentifier[0].dataValues.name;

                };


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
    } catch {
        res.status(500).json({ Message: 'Error al obtener el pedido.' });
    }
}


export const postOrderDetail = async (req: Request, res: Response) => {
    const body: orderDetailsInterface = req.body;
    console.log("POST ORDER: ", body);
    res.status(200);
}


export const putOrderEdited = async (req: Request, res: Response) => {
    const orderId = req.query.orderId;
    const userRif: string = req.body.rif;
    const status: string = req.body.status;

    try{
        if (orderId !==  undefined && status !== undefined) {
            console.log("PRIMERA SENTENCIA");
            const userKeyData = await adminClients.findOne({where: {rif: userRif}});
            const orderStatus = await adminOrderStatusModel.findAll();
            const orderDetail = await adminOrdersModel.findOne({where: {orderId: orderId}});
            if (orderDetail !== null) {
                console.log("SEGUNDA SENTENCIA");
                if (userKeyData?.dataValues.uuid === orderDetail.dataValues.userId) {
                    console.log("TERCERA SENTENCIA");
                    let userId: string = orderDetail.dataValues.userId;
                    let currentStatus: number = orderDetail.dataValues.status;
                    let orderConfirmed: number = orderDetail.dataValues.isOrderConfirmed;
                    let orderPaid: number = orderDetail.dataValues.isOrderPaid;
                    let paynumber: string = orderDetail.dataValues.payNumber.toString();
                    if (currentStatus !== 0 && currentStatus !== 1 && orderPaid !== 0 && orderConfirmed !== 0 && paynumber.length !== 1 ) { // (status !== 'CONF' && status !== "PTE")
                        console.log("CUARTA SENTENCIA");
                        let statusValue: number | undefined;
                        orderStatus.forEach(statusCode => {
                            if (statusCode.dataValues.code === status) {
                                statusValue = statusCode.dataValues.id;
                            };
                        });
                        if (statusValue !== undefined) {
                            await adminOrdersModel.update({ orderStatusId: statusValue }, {
                                where: {
                                    orderId: orderId,
                                    userId: userId
                                }
                            });
                            res.status(201).end();
                        } else {
                            res.status(403).json({Message: "No es posible cambiar el estado porque falta un requisito."})
                        }
                    } else {
                        res.status(403).json({Message: "No es posible cambiar el estado porque falta un requisito."})
                    }
                } else {
                    res.status(404).json({Message: "Existe error en la relación de los datos. "})
                }
            }
        }
    }catch {
        res.status(500).json({ Message: 'Error al obtener el pedido.' });
    }
}


export const deleteOrder = async (req: Request, res: Response) => {
    const orderId: string = req.query.orderId as string;
    console.log("DELETE ORDER: ", orderId);
    res.status(200);
}


export const postLogin = async (req: Request, res: Response) => {

    try {
        const body: adminLoginUserInterfaceModel = req.body;
        console.log("Login admin: ", body);
        const { userName, password } = body;
    
        const userFound = await adminUsers.findOne({
            where: {
                email: userName,
            },
        });

        const email = userFound?.dataValues.email;
        let savedPassword = userFound?.dataValues.password;
        let receivedPassword = password;
        const pass = await comparePassword(receivedPassword, savedPassword);

        if(!pass){
            res.status(401).json({token: null, Message: 'Invalid password or user.'})
            return
        }

        if (userFound !== undefined && userFound !== null) { // && password === pass) {

            const token = jwt.sign({id: userFound.dataValues.uuid}, config.SECRET, {
                expiresIn: 86400 // 24 hours
            }); // asigna el token
            console.log("TOKEN::::::::: ", token);

            const dataCategories = await adminCategory.findAll();
            const categoriesAll: Array<dataConfig> = dataCategories.map((categories) => ({
                id: categories.dataValues.id.toString(),
                name: categories.dataValues.name
            }));

            const dataSections = await adminSections.findAll();
            const sectionsAll: Array<dataConfig> = dataSections.map((sections) => ({
                id: sections.dataValues.id.toString(),
                name: sections.dataValues.name,
            }));

            const dataSalesUnits = await adminSalesUnits.findAll({
                order: [['id', 'ASC']]
            });

            const salesUnitsAll: Array<dataConfig> = dataSalesUnits.map((salesUnits) => ({
                id: salesUnits.dataValues.id.toString(),
                name: salesUnits.dataValues.name
            }));

            const dataJobs = await adminJobsModel.findAll();
            const jobsAll: Array<jobsDeptsInterface> = dataJobs.map((jobs) => ({
                id: jobs.dataValues.id.toString(),
                name: jobs.dataValues.name,
                code: jobs.dataValues.code,
                description: jobs.dataValues.description || ''
            }));

            const dataDepts = await adminDepartmentsModel.findAll();
            const deptsAll: Array<jobsDeptsInterface> = dataDepts.map((depts) => ({
                id: depts.dataValues.id.toString(),
                name: depts.dataValues.name,
                code: depts.dataValues.code,
                description: depts.dataValues.description || ''
            }));

            const dataStatus = await adminStatusModel.findAll();
            const statusAll: Array<dataConfig> = dataStatus.map((status) => ({
                id: status.dataValues.id.toString(),
                name: status.dataValues.name
            }));

            const dataOrderStatus = await adminOrderStatusModel.findAll();
            const orderStatusAll: Array<orderStatusesInterface> = dataOrderStatus.map((orderStatus) => ({
                id: orderStatus.dataValues.id.toString(),
                name: orderStatus.dataValues.name,
                code: orderStatus.dataValues.code
            }));

            const dataStatusIdentifiers = await adminStatusIdentifiers.findAll();
            const statusIdentifiersAll: Array<statusIdentifiersInterface> = dataStatusIdentifiers.map((identifiers) => ({
                id: identifiers.dataValues.id.toString(),
                name: identifiers.dataValues.name,
                code: identifiers.dataValues.code,
                description: identifiers.dataValues.description
            }));

            const userName = await adminUsers.findOne({
                where: {
                    email: email,
                    status: true
                },
                attributes: ['id', 'uuid', 'name', 'status']
            });
            console.log("User Name::: ", userName);

            const dataWorkspace: dataConfigurationWorkspaceInterface = {
                token: token,
                userName: userName?.dataValues.name,
                message: 'Usuario autenticado',
                isLogged: userName?.dataValues.status,
                categories: categoriesAll,
                sections: sectionsAll,
                salesUnits: salesUnitsAll,
                jobs: jobsAll,
                departments: deptsAll,
                status: statusAll,
                statusIdentifiers: statusIdentifiersAll,
                orderStatus: orderStatusAll

            }

            // res.cookie('ff_cookie', token, {
            //     httpOnly: true,
            //     maxAge: 86400, // tiempo de vida de la cookie en milisegundos
            //     secure: false, // establece si la cookie solo se envía a través de HTTPS
            //     sameSite: 'lax', // controla cómo se envía la cookie en las solicitudes de terceros
            //     path: '/' // establece la ruta en la que la cookie es válida
            // });

            res.status(200).json(dataWorkspace);
            // res.status(200).cookie('nombre_cookie', token).json(dataWorkspace);
            // res.send('Cookie enviada');

        } else {
            res.status(403).json({
                msg: 'Usuario o contraseña incorrectos'
            });

        };
    } catch (error) {
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
}


async function findProductsListsOrders(wishProductList: { productId: string, quantity: number }[]) {
    const productList: {
        id: string,
        imageUrl: string,
        name: string,
        code: string,
        price: number,
        quantity: number,
    }[] = [];

    for (const wishProduct of wishProductList) {
        const productId = parseInt(wishProduct.productId);
        // Aquí debes utilizar el método findByPk() para buscar el producto por su ID
        const product = await lastBuyListConfirmedModel.findByPk(productId);

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
    // console.log(productList);
    return productList;

}

