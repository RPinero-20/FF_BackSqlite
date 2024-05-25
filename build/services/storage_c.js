"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.savePictureToPath = void 0;
const express_1 = require("express");
const multer_1 = __importStar(require("multer"));
const path_1 = require("path");
const fs_1 = require("fs");
function savePictureToPath(data, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code } = data;
        console.log("savePictureToPath: code && file ", code, file);
        const saveImage = multer_1.default.diskStorage({
            destination: (0, path_1.join)(__dirname, '../public/assets/images/productsThumbnails/test/'),
            filename: (req, file, cb) => {
                cb(null, code + '-' + file.originalname.toLocaleLowerCase);
            }
        });
        const fileFilter = (req, file, cb) => {
            const filetypes = /jpeg|jpg|png|webp/;
            const mimetype = filetypes.test(file.mimetype);
            const extname = filetypes.test((0, path_1.extname)(file.originalname).toLowerCase());
            if (mimetype && extname) {
                cb(null, true);
            }
            else {
                cb(new Error('El archivo debe ser una imagen.'));
            }
        };
        const fileUpload = (0, multer_1.default)({
            storage: saveImage,
            fileFilter: fileFilter
        }).single('picture');
        return fileUpload;
    });
}
exports.savePictureToPath = savePictureToPath;
const saveImage = multer_1.default.diskStorage({
    destination: (0, path_1.join)(__dirname, '../public/assets/images/productsThumbnails/'),
    filename: (_req, file, cb) => {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test((0, path_1.extname)(file.originalname).toLowerCase());
    if (mimetype && extname) {
        cb(null, true);
    }
    else {
        cb(new Error('El archivo debe ser una imagen.'));
    }
};
const fileUpload = (0, multer_1.default)({
    storage: saveImage,
    fileFilter: fileFilter
}).single('picture');
exports.default = fileUpload;
//# sourceMappingURL=storage_c.js.map