
import { cartListProducts } from "../models/payResume";
import { checkProductInterface, orderDetailsInterface, orderInterfaceData, payResumeInterfaceData, productListInterfaceData } from "../src/types";


export async function calcProducts(orderRequest: orderInterfaceData ) {
    const body: orderInterfaceData = orderRequest;

    //Obtener productos de la CartList
    const productID: number[] = body.productsList.map((strID: productListInterfaceData) => strID.productId)
    const productQty: number[] = body.productsList.map((prodQty: productListInterfaceData) => prodQty.quantity)
    const productByIdPromises = productID.map(async (id: number) => {
        const product = await cartListProducts.findByPk(id);
        return product;
    });

    const products = await Promise.all(productByIdPromises);
    // console.log("products ::::::: ", products);

    // Obtener precio de productos, calcular descuento, descuento global y colocando a 0 los productos Free
    const productsWithQty = products.map((product, index) => {
        const isFree: boolean = product?.dataValues.isFree === true;
        const price: number = isFree ? 0 : parseFloat(product?.dataValues.price);
        const priceDiscount = calcularDescuentoProducto(price, product?.dataValues.isOffer);
        const productDiscount = calcularDescuentoGlobal(price, product?.dataValues.isOffer);
        return {
            userId: parseInt(body.userId),
            ...product?.dataValues,
            price: priceDiscount,
            requestedQty: productQty[index],
            discount: productDiscount
            // AGREGAR TOKEN_ID
        };
    });


    // Obteniendo precio de productos calculados por la cantidad
    const productsCalculated = productsWithQty.map((product) => {
        return {
            ...product,
            price: product.price * product.requestedQty
        };
    });

    // Obteniendo subtotal a pagar
    const subtotal = productsCalculated.reduce((total, product) => {
        return total + product.price;
    }, 0);

    // Obteniendo total de descuento por productos
    const totalDescuentoPorProducto: number = productsCalculated.reduce((total, product) => {
        const descuentoPorProducto: number = product?.requestedQty * product?.discount;
        return total + descuentoPorProducto;
    }, 0);


    // Obtener cálculos de impuestos
    const ivaUsd: number = 16;
    const dolarToday: number = 36.11; //Obtener de API externa
    const subTotalBsd: number = subtotal * dolarToday;
    const iva: number = subTotalBsd * (ivaUsd / 100);
    const totalBsd: number = subTotalBsd + iva;
    const igtf = subtotal * (3 / 100);
    const totalImpuesto = igtf * 0.16;
    const totalUsd: number = subtotal + totalImpuesto;


    // Construyendo objeto para retornar
    const payResume: payResumeInterfaceData = {
        subtotal: parseFloat(subtotal.toFixed(2)),
        discount: totalDescuentoPorProducto,
        ivaUsd: 16,
        igtf: 3,
        totalBsd: parseFloat(totalBsd.toFixed(2)),
        totalUsd: parseFloat(totalUsd.toFixed(2))
    }

    // Filtrar resultados Null y Nan para retornar valor 0
    for (let key in payResume) {
        if (payResume[key as keyof payResumeInterfaceData] === null) {
            payResume[key as keyof payResumeInterfaceData] = 0;
        };
        for (let key in payResume) {
            if (isNaN(payResume[key as keyof payResumeInterfaceData])) {
                payResume[key as keyof payResumeInterfaceData] = 0;
            }
        };
    };

    const preOrder = {
        ...body,
        payResume: payResume
    };
    const listObjects = {preOrder, productsCalculated} ;
    return listObjects //preOrder;

}

export function calcularDescuentoProducto(precio: number, porcentajeDescuento: number) {
    const descuento = precio * (porcentajeDescuento / 100);
    const precioConDescuento = precio - descuento;
    return precioConDescuento.toFixed(2);
};

export function calcularDescuentoGlobal(price: number, isOffer: number) {
    let totalDescuento = 0;
    if (isOffer != 0) {
        const precioConDescuento = calcularDescuentoProducto(
            price,
            isOffer
        );
        const descuentoAplicado = price - parseFloat(precioConDescuento);
        totalDescuento += descuentoAplicado;
    }
    return parseFloat(totalDescuento.toFixed(2));
};

export function checkStock(products: checkProductInterface[]): string[] {
    let outOfStock: string[] = [];
    const outOfStockProduct: string[] = [];
    products.forEach((product) => {
        const remainingQty = product.unitQty - product.requestedQty;
        if (remainingQty <= 0) {
            outOfStockProduct.push(product.id.toString());
            outOfStock = outOfStockProduct;
        } else {
            product.isConfirmed = true; // Agregar propiedad isConfirmer si hay inventario
        }
    });

    return outOfStock;
}
// const descuentoGlobal = calcularDescuentoGlobal(products);
// console.log(descuentoGlobal); // Imprime el descuento global en dólares



