import { Request, Response } from "express";
import { bankInfoInterface } from "../src/types";
import { paymentDetailsModel } from "../models/buyListConfirm";
import { userInfo } from "../middlewares/authJwtStore";


export const getBanksListInformation = async (req: Request, res: Response) => {
    const token = req.headers["x-access-token"];
    let userId: string = "";
    if(token){
        userId = await userInfo(token);
    }

    try {
        const banksList = await paymentDetailsModel.findAll({attributes: {exclude: ['id']}})

        res.status(200).json({banksList});
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}