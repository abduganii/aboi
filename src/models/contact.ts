import mongoose from "mongoose"

interface ICantact {
    telnumber: string;
    location: string;
    workTimeStart: string;
    workTimefinsh: string;
}
const cantactSchema = new mongoose.Schema<ICantact>(
    {
        telnumber: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        workTimeStart: {
            type: String,
            required: true,
        },
        workTimefinsh: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    },
);
export default mongoose.model<ICantact>('cantact', cantactSchema);