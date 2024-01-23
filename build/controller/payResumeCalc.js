"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularDescuentoGlobal = exports.calcularDescuentoProducto = exports.getPayResumeCalc = void 0;
class getPayResumeCalc {
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
exports.getPayResumeCalc = getPayResumeCalc;
function calcularDescuentoProducto(precio, porcentajeDescuento) {
    const descuento = precio * (porcentajeDescuento / 100);
    const precioConDescuento = precio - descuento;
    console.log(precioConDescuento);
    return precioConDescuento.toFixed(2);
}
exports.calcularDescuentoProducto = calcularDescuentoProducto;
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
//# sourceMappingURL=payResumeCalc.js.map