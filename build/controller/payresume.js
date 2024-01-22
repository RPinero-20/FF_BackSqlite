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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayResumeCalc = exports.getPayResume = void 0;
function getPayResume(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const precio = 200;
        const descuento = 50;
        const { body } = req;
        console.log(body);
        const calculos = {
            "subtotal": 12.99,
            "discount": 20,
            "ivaUS": 16,
            "igtf": 3,
            "total": 12.41
        };
        res.json(calculos);
    });
}
exports.getPayResume = getPayResume;
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
//# sourceMappingURL=payresume.js.map