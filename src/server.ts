
import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import router from "./routes";

const app = express();
const mongodb: any = process.env.MONGO_ULR
mongoose
    .connect(mongodb)
    .then(() => console.log("mongodb connected"))
    .catch((err): any => console.log(err))


app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());
app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running in http://localhost:${process.env.PORT}`)
})