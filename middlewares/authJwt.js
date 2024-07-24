import jwt from 'jsonwebtoken'
import config from '../config'
import { adminUsers } from '../models/admin';
import Role from '../models/role';

export const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers["x-access-token"];

        console.log(token);
        if (!token) {
            res.status(403).json({Message: "No token provided."});
            return
        }

        const decoded = jwt.verify(token, config.SECRET)
        req.id = decoded.id; // la consulta a getusuarios no retorna porque {"Message": "Moderator attributes required"}
        console.log("decoded in jwt :::::::::: ", decoded);
    
        const user = await adminUsers.findOne({
            where: {
                // uuid: id
                uuid: decoded.id
            } // {password: 0} OJO ACÁ PUEDE SER UTIL PARA NO USAR O ENVIAR EL PASS DEL USUARIO EN LA VALIDACIÓN ENTRE CAMBIOS DE RUTAS
        });
        console.log("USER in jwt ::::::::::: ", user)
        if(!user) {
            res.status(400).json({Message: 'User not found'});
            return
        }

        next();

    } catch (error) {
        res.status(401).json({Message: 'Unauthorized'})
    }
}


export const IsModerator = async (req, res, next) => {
    console.log("IS MODERATOR");
    const user = await adminUsers.findOne({
        where: {
            //uuid: req.id
            uuid: req.id 
        },
        attributes: ['email', 'roles']
    });// AUNQUE LA VARIABLE decoded FUE DECLARADA EN VERIFYTOKEN, 
    // TODAS LAS FUNCIONES DESPUES DE ESA, TENDRÁN ACCESO A ELLA,
    // SIEMPRE QUE TENGAN REQUEST 

    const roles = await Role.findOne({
        where: {
            value: user.dataValues.roles
        },
        attributes: ['name', 'value']
    });

    console.log("USER ROLES::: ", roles);

    if(roles.dataValues.value === 1) {
        next();
    } else {
        res.status(403).json({Message: "Moderator attributes required"})
    }

}


export const IsAdmin = async (req, res, next) => {
    console.log("QWEQWEQWE")
    const user = await adminUsers.findOne({
        where: {
            //uuid: req.id
            uuid: req.id 
        },
        attributes: ['email', 'roles']
    });// AUNQUE LA VARIABLE decoded FUE DECLARADA EN VERIFYTOKEN, 
    // TODAS LAS FUNCIONES DESPUES DE ESA, TENDRÁN ACCESO A ELLA,
    // SIEMPRE QUE TENGAN REQUEST 

    const roles = await Role.findOne({
        where: {
            value: user.dataValues.roles
        },
        attributes: ['name', 'value']
    });

    console.log("USER ROLES::: ", roles);

    if(roles.dataValues.value === 0) {
        next();
    } else {
        res.status(403).json({Message: "Admin attributes required"})
    }

}

