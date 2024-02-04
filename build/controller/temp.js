"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStock = exports.calcularDescuentoGlobal = exports.calcularDescuentoProducto = exports.getPayResumeCal_culo = void 0;
class getPayResumeCal_culo {
    constructor(_precio, _descuento) {
        this.productos = [];
        console.log(this.productos);
    }
    agregarProducto(precio, porcentajeDescuento) {
        this.productos.push({
            precio: precio,
            descuento: porcentajeDescuento,
        });
        console.log(this.productos);
    }
    calcularDescuentoProducto(precio, porcentajeDescuento) {
        const descuento = precio * (porcentajeDescuento / 100);
        const precioConDescuento = precio - descuento;
        console.log(precioConDescuento);
        return precioConDescuento;
    }
    calcularDescuentoGlobal() {
        let totalDescuento = 0;
        for (let producto of this.productos) {
            const precioConDescuento = this.calcularDescuentoProducto(producto.precio, producto.descuento);
            const descuentoAplicado = producto.precio - precioConDescuento;
            totalDescuento += descuentoAplicado;
        }
        return totalDescuento;
    }
}
exports.getPayResumeCal_culo = getPayResumeCal_culo;
function calcularDescuentoProducto(precio, porcentajeDescuento) {
    const descuento = precio * (porcentajeDescuento / 100);
    const precioConDescuento = precio - descuento;
    return precioConDescuento.toFixed(2);
}
exports.calcularDescuentoProducto = calcularDescuentoProducto;
;
function calcularDescuentoGlobal(price, isOffer) {
    let totalDescuento = 0;
    if (isOffer != 0) {
        const precioConDescuento = calcularDescuentoProducto(price, isOffer);
        const descuentoAplicado = price - parseFloat(precioConDescuento);
        totalDescuento += descuentoAplicado;
    }
    return parseFloat(totalDescuento.toFixed(2));
}
exports.calcularDescuentoGlobal = calcularDescuentoGlobal;
;
function checkStock(products) {
    let outOfStock = [];
    const outOfStockProduct = [];
    products.forEach((product) => {
        const remainingQty = product.unitQty - product.requestedQty;
        if (remainingQty <= 0) {
            outOfStockProduct.push(product.id.toString());
            outOfStock = outOfStockProduct;
        }
        else {
            product.isConfirmed = true;
        }
    });
    return outOfStock;
}
exports.checkStock = checkStock;
//# sourceMappingURL=temp.js.map