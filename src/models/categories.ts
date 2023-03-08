import mongoose from "mongoose"

interface ICategories {
    name: string;
}
const categorieSchema = new mongoose.Schema<ICategories>(
    {
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    },
);
export default mongoose.model<ICategories>('categorie', categorieSchema);