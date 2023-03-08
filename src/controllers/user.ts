import { Request, Response } from "express"
import UserModel from "../models/user"

export const getuser = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.find()

        if (!user) {
            return res.send({
                status: 404,
                message: 'User is not found'
            })
        }
        res.send({ user })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
