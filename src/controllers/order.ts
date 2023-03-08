import { Request, Response } from "express"
import orderModal from "../models/order"
const { Telegraf } = require("telegraf")
const app = new Telegraf("6171366961:AAEiCKtkELm3uVjmNg2qRPA7TTSfUaEmnqE")


export const getorder = async (req: Request, res: Response) => {
    try {
        const order = await orderModal.find()
        if (!order) {
            return res.send({
                status: 404,
                message: 'order is not found'
            })
        }
        res.send({ order })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const getorderbyId = async (req: Request, res: Response) => {
    try {
        const order = await orderModal.find({ _id: req.params.id })
        if (!order) {
            return res.send({
                status: 404,
                message: 'order is not found'
            })
        }
        res.send({ order })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const createorder = async (req: Request, res: Response) => {
    try {
        const neworder = new orderModal({
            name: req.body.name,
            telnumber: req.body.telnumber,
            productId: req.body.productId,
            count: req.body.count,
            address: req.body.address
        })
        const text = `Yangi buyurtma 
buyurtmachi ismi: ${req.body.name}
buyurtmachi telefon raqami: ${req.body.telnumber}       
        `

        // await neworder.save();


        app.telegram.sendMessage(-1001690827818, text)

        res.status(200).send({
            message: "order Created",
            data: "neworder"
        })

    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const removeorder = async (req: any, res: Response) => {
    try {

        orderModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  order"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " order not found"
                    })
                }
                res.status(200).send({
                    message: " order deleted"
                })
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: 500,
            message: "Failed to delete"
        });
    }
}