import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

import UserModel from "../models/user"



export const login = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({ email: req.body.name, password: req.body.password })

        if (!user) {
            return res.send({
                status: 404,
                message: 'Invalid password or login'
            });
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            "secretno",
            {
                expiresIn: "30d"
            }
        )

        res.send({ user, token })

    } catch (error) {
        return res.send({
            status: 400,
            message: "login failed"
        });
    }
}