import { Request, Response } from "express";
import { clientLoginUserInterfaceModel, userParams } from "../src/types";
import { authJwt, authJwtStore } from "../middlewares";
import { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import config from "../config";
import { guestSession } from "../models/clientSession";
import Clients from "../models/usuario";
import { adminClients, comparePassword, encryptPassword } from "../models/admin";
import {v4 as uuidv4} from 'uuid';
import { verifyToken, verifyTokenClient } from "../middlewares/authJwtStore";


export const userAuthGuest = async (req: Request, res: Response) => {

    try {
        const receivedToken = req.headers["x-access-token"];
        console.log('receivedToken::: ', receivedToken);
        if(!receivedToken){
            verifyTokenClient(req, res);
        } else {
            verifyTokenClient(req, res);
        }
    } catch (error) {
        res.status(500).json({ error: "Error al generar el token de invitado" });
    }
}


export const clientSignUp = async (req: Request, res: Response) => {
    const { body } = req;
    const email = body.email;
    console.log("?????? BODY:", body);
    try {
        const findClient = await Clients.findOne({
            where: {
                email: email
            }
        });
        if (!findClient) {
            let clientUid = uuidv4()
            console.log("CREANDO CLIENTE::::: UUID", clientUid);
            const client = {
                uuid: clientUid,//body.id,
                rif: body.rif,
                name: `${body.firstName} ${body.lastName}`,
                email: body.email,
                phone: body.phone,
                phone2: body.phone2 || '',
                address: body.address || '',
                represent: body.company || '',
                codeId: clientUid,
                password: await encryptPassword(body.password.toString()),
                status: 1,
            }
            console.log(">>>>>>>> CLIENT: ", client);
            await Clients.create(client);
            res.status(201).json({ Message: 'Cliente creado.' });
        } else {
            res.status(400).json({ Message: 'El correo ya se encuentra registrado.' });
        }
    } catch (error) {
        res.status(500).json({ Message: 'Comuníquese con el administrador.' })
    }
}


export const clientSignIn = async (req: Request, res: Response) => {
    try {
        console.log("BODY ::::: ", req.body) ;

        const body: clientLoginUserInterfaceModel = req.body;
        const { user, password } = body;

        const userFound = await adminClients.findOne({
            where: {
                email: user,
            },
        });

        if(!userFound){
            res.status(401).json({token: null, Message: 'Invalid password or user.'})
            return
        }

        console.log("User Found SIGNIN:::: ", userFound );
        const userName = userFound?.dataValues.name;
        let savedPassword = userFound?.dataValues.password;
        let receivedPassword = password;
        const pass = await comparePassword(receivedPassword, savedPassword);

        if(!pass){
            res.status(401).json({token: null, Message: 'Invalid password or user.'})
            return
        }

        if (userFound) {
            // console.log("STATUS:::: ", userFound.dataValues.status);
            if (userFound.dataValues.status !== false) {
                const token = jwt.sign({id: userFound.dataValues.uuid}, config.SECRET, {
                    expiresIn: 86400 // 24 hours
                }); // asigna el token
                console.log("TOKEN::::::::: ", token);
                await guestSession.create({uuid: userFound.dataValues.uuid, validToken: token, isLogged: true});
                console.log({userName: userName, token: token, isLogged: true});
                res.status(201).json({userName: userName, token: token, isLogged: true});
            }

        } else {
            res.status(403).json({
                msg: 'Usuario o contraseña incorrectos'
            });
        };

    } catch (error) {
        res.status(500).json({
            msg: 'Login error, code: unknown.'
        });

    }
}