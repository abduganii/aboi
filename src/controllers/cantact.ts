import { Request, Response } from "express"
import cantactModal from "../models/contact"

export const getcantact = async (req: Request, res: Response) => {
    try {
        const cantact = await cantactModal.find()
        if (!cantact) {
            return res.send({
                status: 404,
                message: 'cantact is not found'
            })
        }
        res.send({ cantact })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const createcantact = async (req: Request, res: Response) => {
    try {
        const newcantact = new cantactModal({
            telnumber: req.body.telnumber,
            location: req.body.location,
            workTimeStart: req.body.workTimeStart,
            workTimefinsh: req.body.workTimefinsh
        })
        await newcantact.save();
        res.status(200).send({
            message: "cantact Created",
            data: newcantact
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const updatecantact = async (req: Request, res: Response) => {
    try {


        await cantactModal.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                telnumber: req.body.telnumber,
                location: req.body.location,
                workTimeStart: req.body.workTimeStart,
                workTimefinsh: req.body.workTimefinsh
            }
        )
        res.status(200).json({
            message: "cantact updated"
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removeContact = async (req: any, res: Response) => {
    try {

        cantactModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  cantact"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " cantact not found"
                    })
                }
                res.status(200).send({
                    message: " cantact deleted"
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