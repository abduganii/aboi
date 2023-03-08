import { Request, Response } from "express"
import requestModal from "../models/request"

export const getrequest = async (req: Request, res: Response) => {
    try {
        const request = await requestModal.find()
        if (!request) {
            return res.send({
                status: 404,
                message: 'Request is not found'
            })
        }
        res.send({ request })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const getrequestbyId = async (req: Request, res: Response) => {
    try {
        const request = await requestModal.find({ _id: req.params.id })
        if (!request) {
            return res.send({
                status: 404,
                message: 'Request is not found'
            })
        }
        res.send({ request })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const createrequest = async (req: Request, res: Response) => {
    try {
        const newRequest = new requestModal({
            name: req.body.name,
            address: req.body.address,
            telNumber: req.body.telNumber,
        })
        await newRequest.save();
        res.status(200).send({
            message: "Request Created",
            data: newRequest
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removerequest = async (req: any, res: Response) => {
    try {

        requestModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  Request"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " Request not found"
                    })
                }
                res.status(200).send({
                    message: " Request deleted"
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