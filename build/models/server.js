"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("../routes/home"));
const admin_1 = __importDefault(require("../routes/admin"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            client: '/api/client',
            admin: '/api/admin',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use('/', express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.client, home_1.default);
        this.app.use(this.apiPaths.admin, admin_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto!!! ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map