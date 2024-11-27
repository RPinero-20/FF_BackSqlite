import { Request, Response } from 'express';
import { sectionsHome, productsHome } from '../models/home';
import { Model } from 'sequelize-typescript';
import { ProductProps } from '../src/types';
import { parse } from 'dotenv';

export const getNotFound = async (_req: Request, res: Response) => {
    res.status(404);
}

async function getHomeSections() {
    const sectionsFromDB = await sectionsHome.findAll();
    return sectionsFromDB
}


async function getHomeProducts() {
    const productList = await productsHome.findAll();
    return productList
}


export const getProducts = async (_req: Request, res: Response) => {
    try {
        const sections = await getHomeSections();
        const products = await getHomeProducts();

        const sectionsToFront = sections.map(section => {
            const newSection = {
                sectionId: section.dataValues.id.toString(),
                sectionName: section.dataValues.name,
                sectionImageUrl: section.dataValues.imageUrl,
                // productList: section.dataValues.productList,
            }
            return newSection
        });

        const productsList: Array<ProductProps> = products.map(product => {
            const isFree: boolean = product.dataValues.isFree === true;
            const price: number = isFree ? 0 : parseFloat(product.dataValues.price);
            const productsToFront = {
                id: product.dataValues.id.toString(),
                imageUrl: product.dataValues.imageUrl,
                name: product.dataValues.name,
                code: product.dataValues.code,
                description: product.dataValues.description,
                isOffer: product.dataValues.isOffer,
                isFree: product.dataValues.isFree,
                isOutStock: product.dataValues.isOutStock,
                categoryID: product.dataValues.categoryID.toString(),
                sectionID: product.dataValues.sectionID.toString(),
                price: price
            }
            return productsToFront
        });

        const updatedSections = sectionsToFront.map(section => {
            const matchingProducts = productsList.filter(product => product.sectionID === section.sectionId);
            return {
                ...section,
                productList: matchingProducts
            };
        });

        res.json(updatedSections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getProductList = async (_req: Request, res: Response) => {
    // Traer lista de productos por categoría
    try {
        const productsFromDb = await getHomeProducts();

        const productsList: Array<ProductProps> = productsFromDb.map((product) => ({
            id: product.dataValues.id.toString(),
            imageUrl: product.dataValues.imageUrl,
            name: product.dataValues.name,
            code: product.dataValues.code,
            description: product.dataValues.description,
            isOffer: product.dataValues.isOffer,
            isFree: product.dataValues.isFree,
            isOutStock: product.dataValues.isOutStock,
            categoryID: product.dataValues.categoryID.toString(),
            sectionID: product.dataValues.sectionID.toString(),
            price: parseFloat(product.dataValues.price)
        }));

        res.json(productsList);
    } catch {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

