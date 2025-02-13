import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '../api/routes/user.route.js'
import authRouter from '../api/routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to database!')
}).catch(()=>{
    console.log('Failed to connect to database!')
})

const app = express();

app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT} !!!!`)
})

app.use("/api/user",userRouter);

app.use("/api/auth", authRouter);

