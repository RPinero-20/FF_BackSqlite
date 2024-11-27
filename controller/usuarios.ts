import { Request, Response } from 'express';
import adminUsers from '../models/usuario';


export const getUsuarios = async (_req: Request, res: Response) => {
    const usuarios = await adminUsers.findAll();
    res.json(usuarios);
}


export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await adminUsers.findByPk(id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`,
        });
    }
}


export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const existEmail = await adminUsers.findOne({
            where: {
                email: body.email
            }
        });

        if (existEmail) {
            res.status(400).json({
                msg: 'Email de usuario ya existe. ' + body.email
            }); return
        }

        const usuario = await adminUsers.create(body);
        res.json(usuario);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        });
    }
}


export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await adminUsers.findByPk(id);
        if (!usuario) {
            res.status(404).json({
                msg: 'No existe usuario con ID: ' + id
            }); return
        }

        await usuario.update(body);
        res.json(usuario);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Comuníquese con el administrador.'
        })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    // Se realiza una eliminación lógica en lugar de física para evitar registros huerfanos
    const { id } = req.params;
    const usuario = await adminUsers.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: 'No se encuentra el usuario con indicado' + id
        });
    } else {
        await usuario.update({ status: false });
    }
    res.json(usuario)
}

