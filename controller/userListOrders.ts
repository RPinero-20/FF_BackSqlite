import { Request, Response } from "express";
import { userListOrdersModel } from "../models/userListOrders";
import { userOrdersInterface, urlParams, productListInterfaceData } from "../src/types";
import { lastBuyListConfirmedModel } from "../models/buyListConfirm";
import { userInfo } from "../middlewares/authJwtStore";


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


export const getUserListOrders = async (req: Request, res: Response) => {
    // const { userId }: urlParams = req.query;
    const token = req.headers["x-access-token"];
    let userId: string = "";
    if(token){
        userId = await userInfo(token);
    }
    console.log("    getUserListOrders: ", userId)

    if (userId !== undefined) {
        try {
            const userListOrders = await userListOrdersModel.findAll({
                where: {
                    userId: userId
                },
                attributes: ['orderId', 'totalBsd', 'totalUsd', 'currency', 'isOrderPaid', 'productsList']
            });

            const parsedUserListOrders = userListOrders.map(order => {
                order.dataValues.productsList = JSON.parse(order.dataValues.productsList);
                return order;
            });
            console.log("::: getUserListOrders ::: ");

            const transformedUserListOrders = await Promise.all(userListOrders.map(async (order) => {
                const currency = order.dataValues.currency === 0 ? 'Usd' : 'Bsd';
                const totalPay = order.dataValues.currency === 0 ? order.dataValues.totalUsd : order.dataValues.totalBsd;
                const isOrderPaid = order.dataValues.isOrderPaid === 0 ? 'Pendiente' : 'Pagado';
                const updatedProductsList = await findProductsListsOrders(order.dataValues.productsList);
                
                return {
                    orderId: order.dataValues.orderId,
                    totalPay: totalPay,
                    currency: currency,
                    isOrderPaid: isOrderPaid,
                    lastUpdateDate: '',
                    productsList: updatedProductsList
                };
            }));
            
            res.status(200).json(transformedUserListOrders); //userListOrders);

        } catch (error) {
            console.log("Error al obtener Lista de pedidos.");
            res.status(500).json({
                msg: "Error al obtener Lista de pedidos."
            });
        }
    } else {
        console.log("Page not found")
        res.status(404).json({ error: 'Page not found' });
    }
};