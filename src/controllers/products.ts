import { Request, Response } from "express"
import ProductsModal from "../models/product"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const Products = await ProductsModal.find().populate('categorieId')
        if (!Products) {
            return res.send({
                status: 404,
                message: 'Products is not found'
            })
        }
        res.send({ Products })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}

export const getProductsbyId = async (req: Request, res: Response) => {
    try {
        const Products = await ProductsModal.find({ _id: req.params.id }).populate('categorieId')
        if (!Products) {
            return res.send({
                status: 404,
                message: 'Products is not found'
            })
        }
        res.send({ Products })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const createProducts = async (req: Request, res: Response) => {
    try {
        const newProducts = new ProductsModal({
            img: req.body.img,
            name: req.body.name,
            categorieId: req.body.categorie,
            description: req.body.description,
            price: req.body.price
        })
        await newProducts.save();
        res.status(200).send({
            message: "Products Created",
            data: newProducts
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}
export const updateProducts = async (req: Request, res: Response) => {
    try {


        await ProductsModal.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                img: req.body.img,
                name: req.body.name,
                categorieId: req.body.categorie,
                description: req.body.description,
                price: req.body.price
            }
        )
        res.status(200).json({
            message: "Products updated"
        })
    } catch (error) {
        res.status(500).json({
            message: "No access"
        })
    }
}


export const removeProducts = async (req: any, res: Response) => {
    try {

        ProductsModal.findByIdAndRemove(
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