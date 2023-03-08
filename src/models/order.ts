import mongoose from "mongoose"

interface IOrder {
    name: string;
    telnumber: string;
    productId: any;
    count: number;
    address: string;
    isView: boolean;
}
const orderSchema = new mongoose.Schema<IOrder>(
    {
        name: {
            type: String,
            required: true,
        },
        telnumber: {
            type: String,
            required: true,
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
        count: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        isView: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true
    },
);
export default mongoose.model<IOrder>('order', orderSchema);