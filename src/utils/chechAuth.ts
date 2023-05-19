import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js"

export default async (req: any, res: Response, next: any) => {
    const token: any = (req.headers.aboitoken || "");

    if (token) {
        try {
            const decoded: any = jwt.verify(token, 'secretno');
            const user = await UserModel.findById(decoded._id)


            if (!user) {
                return res.status(401).send({
                    status: 401,
                    message: "Not authention"
                })
            }

            req.userId = decoded._id;

            next()
        } catch (error) {
            return res.status(401).send({
                status: 401,
                message: "Not authention"
            })
        }
    } else {
        return res.status(401).send({
            status: 401,
            message: "Not authention"
        })
    }

};