import mongoose from "mongoose"

interface IProduct {
    img: any;
    name: string;
    categorieId: any;
    description: string;
    price: string;
    view: number;
}
const productSchema = new mongoose.Schema<IProduct>(
    {
        img: {
            type: [String],
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        categorieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categorie",
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        view: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true
    },
);
export default mongoose.model<IProduct>('product', productSchema);