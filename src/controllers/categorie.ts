import { Request, Response } from "express"
import CategorieModal from "../models/categories"

export const getcategorie = async (req: Request, res: Response) => {
    try {
        const categorie = await CategorieModal.find()
        if (!categorie) {
            return res.send({
                status: 404,
                message: 'User is not found'
            })
        }
        res.send({ categorie })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const getcategoriebyId = async (req: Request, res: Response) => {
    try {
        const categorie = await CategorieModal.find({ _id: req.params.id })
        if (!categorie) {
            return res.send({
                status: 404,
                message: 'categorio is not found'
            })
        }
        res.send({ categorie })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const createcategorie = async (req: Request, res: Response) => {
    try {
        const newCategorie = new CategorieModal({
            name: req.body.name,
        })
        await newCategorie.save();
        res.status(200).send({
            message: "categorio Created",
            data: newCategorie
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const updatecategorie = async (req: Request, res: Response) => {
    try {


        await CategorieModal.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                name: req.body.name
            }
        )
        res.status(200).json({
            message: "Categori updated"
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removeCollection = async (req: any, res: Response) => {
    try {

        CategorieModal.findByIdAndRemove(
            {
                _id: req.params.id,
            },
            (err: any, doc: any) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: "Unable to remove  Categorie"
                    });
                }
                if (!doc) {
                    return res.status(404).json({
                        message: " Categorie not found"
                    })
                }
                res.status(200).send({
                    message: " Categorie deleted"
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