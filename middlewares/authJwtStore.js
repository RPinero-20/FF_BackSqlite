import jwt from 'jsonwebtoken'
import config from '../config'
import { adminClients } from '../models/admin';
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
        req.id = decoded.id;
        console.log("decoded in jwtStore :::::::::: ", decoded);

        const user = await adminClients.findOne({
            where: {
                uuid: decoded.id
            }
        });
        console.log("CLIENT in jwtStore ::::::::::: ", user)
        if(!user) {
            res.status(400).json({Message: 'User not found'});
            return
        }

        next();

    } catch (error) {
        res.status(401).json({Message: 'Unauthorized'})
    }
}


export const IsGuest = async (req, res, next) => {
    console.log("GUEST");
}


export const IsClient = async (req, res, next) => {

    const user = await adminClients.findOne({
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

    if(roles.dataValues.value === 2) {
        next();
    } else {
        res.status(403).json({Message: "Moderator attributes required"})
    }
}
