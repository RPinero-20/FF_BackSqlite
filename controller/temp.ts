// export const getPayResume = async (req: Request, res: Response) => {
//     const { body } = req;
//     for (let key in body) {
//         if (body[key] === null) {
//             body[key] = 0;
//         }
//     }

//     try {

//         if (body.orderId.length === 0) {

//             // COTIZACIÓN \\
//             // COTIZACIÓN \\
//             // COTIZACIÓN \\

//             const orderRequest: orderInterfaceData = body;
//             const listObjects = await calcProducts(orderRequest);
//             const quoteOrder = listObjects.preOrder;
//             body.userId = parseInt(body.userId);
//             const payResume = quoteOrder.payResume;

//             const orderToReturn = {
//                 productsList: [],
//                 payResume: payResume
//             };

//             res.status(200).json(orderToReturn);

//             const preOrder = {
//                 ...body,
//                 payResume: JSON.stringify({
//                     payResume
//                 })
//             }; // utilizamos JSON.stringify() para convertir el objeto "payResume" en una cadena de texto JSON antes de guardarlo
//             // al recuperar los datos de la base de datos, deberás utilizar JSON.parse() para convertir la cadena JSON nuevamente
//             delete preOrder.productsList;

//             const existPreOrder = await cartListpreOrder.findOne({
//                 where: {
//                     userId: body.userId
//                 }
//             });

//             if (!existPreOrder) {
//                 await cartListpreOrder.create(preOrder);
//             } else {
//                 await cartListpreOrder.update(preOrder, {
//                     where: {
//                         userId: body.userId
//                     }
//                 });
//             }

//         } else if (body.orderId.length != 0) {
//             const existOrder = await orderDetailConfirmedModel.findOne({
//                 where: {
//                     orderNumber: body.orderId
//                 }
//             });

//             if (existOrder) {

//                 const orderRequest: orderInterfaceData = body;
//                 const listObjects = await calcProducts(orderRequest);
//                 const quoteOrder = listObjects.preOrder;
//                 const payResume = quoteOrder.payResume;

//                 res.status(403).json({
//                     // ...body,
//                     productsList: [],
//                     payResume: payResume
//                 });
//             } else {

//                 const newQuantity: number[] = [];
//                 const listProductId: number[] = [];

//                 for (const product of body.productsList) {
//                     const productId = product.productId;
//                     const productToBuy = await orderProductsConfirmedModel.findByPk(productId);
//                     let availableQty: number = productToBuy?.dataValues.unitQty - product.quantity;
//                     listProductId.push(productId);
//                     newQuantity.push(availableQty);
//                 }

//                 const updateStockQty: { id: number, unitQty: number }[] = [];
//                 for (let i = 0; i < listProductId.length; i++) {
//                     const productId = listProductId[i];
//                     const availableQty = newQuantity[i];
//                     updateStockQty.push({ id: productId, unitQty: availableQty });
//                 }


//                 // ACTUALIZA CANTIDADES EN INVENTARIO
//                 for (const { id, unitQty } of updateStockQty) {
//                     await orderProductsConfirmedModel.update({ unitQty }, { where: { id } });
//                 }


//                 const orderRequest: orderInterfaceData = body;
//                 const listObjects = await calcProducts(orderRequest);
//                 const quoteOrder = listObjects.preOrder;
//                 body.userId = parseInt(body.userId);
//                 const payResume = quoteOrder.payResume

//                 const orderData = {
//                     userId: body.userId, // Viene del cuerpo de la solicitud
//                     productsList: JSON.stringify(body.productsList), // Viene del cuerpo de la solicitud, convierte el array a una cadena JSON
//                     orderNumber: body.orderId, // Viene del cuerpo de la solicitud
//                     payNumber: 0, // Número de pago (ingresar luego), vacío por defecto
//                     isOrderPaid: false, // Estatus de pago, false por defecto
//                     bank: '', // Vacío por defecto
//                     addressArrival: '', // Vacío por defecto
//                     depositorName: '', // Vacío por defecto
//                     depositorPhone: '', // Vacío por defecto
//                     subtotal: payResume.subtotal, // Viene de payResume
//                     discount: payResume.discount, // Viene de payResume
//                     ivaUsd: payResume.ivaUsd, // Viene de payResume
//                     igtf: payResume.igtf, // Viene de payResume
//                     totalBsd: payResume.totalBsd, // Viene de payResume
//                     totalUsd: payResume.totalUsd, // Viene de payResume
//                 };

//                 const orderSaved = await orderDetailConfirmedModel.create(orderData);

//                 res.status(201).end();

//                 async function deletePreOrderByUserId(userId: number) {
//                     const deletePreOrder = await cartListpreOrder.findOne({
//                         where: {
//                             userId: userId
//                         }
//                     });    
//                     return deletePreOrder
//                 }
//                 const userId = orderData.userId;
//                 const deletePreOrder = await deletePreOrderByUserId(userId);
//                 await deletePreOrder?.destroy({})

//                 //  fin del ELSE
//             }
//             // fin del IF que valida existOrder
//         } else {

//             // OUT OF STOCK //
//             // OUT OF STOCK //
//             // OUT OF STOCK //

//             const orderRequest: orderInterfaceData = body;
//             const listObjects = await calcProducts(orderRequest);
//             const quoteOrder = listObjects.preOrder;
//             body.userId = parseInt(body.userId);
//             const payResume = quoteOrder.payResume;
//             const productsCalculated = listObjects.productsCalculated;
//             const existProduct: string[] = checkStock(productsCalculated);
//             console.log(":::::::::::::::::::::::::", listObjects.productsCalculated);

//             if (existProduct.length === 0) {

//                 const existProduct = body;
//                 existProduct["productsList"] = [];
//                 existProduct["payResume"] = payResume;
//                 res.status(200).json(existProduct);

//             } else {

//                 const productsList: checkProductInterface[] = [];
//                 let OutStockList: any;

//                 await Promise.all(existProduct.map(async (productID) => {
//                     const product = await cartListProducts.findByPk(parseInt(productID));
//                     const outOfStockProduct: checkProductInterface = {
//                         id: product?.dataValues.id,
//                         name: product?.dataValues.name,
//                         code: product?.dataValues.code,
//                         unitQty: product?.dataValues.unitQty,
//                         unitPerBox: product?.dataValues.unitPerBox,
//                         isOffer: product?.dataValues.isOffer,
//                         isFree: product?.dataValues.isFree,
//                         isOutStock: product?.dataValues.isOutStock,
//                         price: product?.dataValues.price,
//                         requestedQty: product?.dataValues.requestedQty,
//                         discount: product?.dataValues.discount,
//                     };
//                     productsList.push(outOfStockProduct);
//                 }));


//                 OutStockList = body; // Asignar valor a OutStockList
//                 OutStockList["productsList"] = productsList;
//                 OutStockList["payResume"] = payResume;


//                 res.status(403).json(OutStockList);
//             }

//             // fin del ELSE que valida existOrder
//         }


//     } catch (error) {
//         console.error("Error al guardar en la base de datos:", error);
//         res.status(500).json({
//             msg: 'Error interno contacte al administrador.'
//         });
//     }

// }




