import mongoose from "mongoose"

interface IUser {
    name: string;
    password: string;
}
const userSchema = new mongoose.Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    },
);
export default mongoose.model<IUser>('User', userSchema);