import { Request, Response } from "express";
import { adminClients, adminUsers, encryptPassword, comparePassword } from "../models/admin";
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/role';
import Clients from "../models/usuario";


export const signUp = async (req: Request, res: Response) => {

    try{
        if (req.body !== undefined && req.body !== null) {
            const { body } = req.body;
            let roles = body.rol;
            console.log("BODY:::::::::::. ", body)
            const userFound = await Clients.findOne({
                where: {
                    email: body.email
                }
            });
            console.log("User Found::: ", userFound);
            if (!userFound){

                const newUser = {
                    uuid: body.uuid,
                    rif: body.rif,
                    name: body.name,
                    email: body.email,
                    phone: body.phone,
                    phone2: body.phone2,
                    address: body.address,
                    represent: body.represent, // EMPRESA
                    password: await encryptPassword(body.password),
                    status: body.status ? 1 : 0,
                    codeId: body.uuid,
                    roles: body.rol
                }
                console.log("New User::: ", newUser);

                if (roles) {
                    const foundRole = await Role.findOne({
                        where: {
                            name: roles
                        }
                    });
                    console.log(":::::::::::: ", foundRole);
                    // newUser.roles = foundRole.map(role => role.dataValues.id);
                    newUser.roles = foundRole?.dataValues.id.toString();
                } else {
                    const role = await Role.findOne({
                        where: {
                            value: 3
                        }});
                    newUser.roles = role?.dataValues.id.toString();
                }
        
                const savedUser = await Clients.create(newUser);
                console.log("Saved User", savedUser);
        
                const token = jwt.sign({id: savedUser.dataValues.id}, config.SECRET, {
                    expiresIn: 86400 // 24 hours
                });
        
                res.cookie('nombre_cookie', token, {
                    httpOnly: true,
                    maxAge: 86400, // tiempo de vida de la cookie en milisegundos
                    secure: false, // establece si la cookie solo se envía a través de HTTPS
                    sameSite: 'lax', // controla cómo se envía la cookie en las solicitudes de terceros
                    path: '/' // establece la ruta en la que la cookie es válida
                });
        
                res.send('Cookie enviada');
        
                // res.json({"token: ":token}); // vamos por 01:14:00 horas de la clase
            } else {
                res.status(403).json({msg: "Usuario ya existe"})
            }

        }
    } catch(error) {

    }

}



export const signIn = async (req: Request, res: Response) => {
    const userFound = await adminUsers.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!userFound) {
        res.status(400).json({Message: "User not found."})
        return
    }

    console.log("sign in user found::: ", userFound);
    const matchPassword = await comparePassword(req.body.password, userFound.dataValues.password)

    if(!matchPassword){
        res.status(401).json({token: null, Message: 'Invalid password or user.'})
        return
    }

    const token = jwt.sign({id: userFound.dataValues.id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    });

    res.cookie('nombre_cookie', token, {
        httpOnly: true,
        maxAge: 86400, // tiempo de vida de la cookie en milisegundos
        secure: false, // establece si la cookie solo se envía a través de HTTPS
        sameSite: 'lax', // controla cómo se envía la cookie en las solicitudes de terceros
        path: '/' // establece la ruta en la que la cookie es válida
    });

    res.send('Cookie enviada');

}

export const signOut = async (_req: Request, _res: Response) => {

}
