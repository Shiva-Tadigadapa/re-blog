import express  from "express"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json())
app.use(cookieParser())

dotenv.config();

const connect=() => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to mongo")
    }).catch(err=>{
        console.log(err) 
    })
}

app.use("/api/users",userRoutes)
app.use("/api/",authRoutes) 

app.use((err,req,res,next)=>{
    const status = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message,

    });
});

app.listen(8000,()=>{
    connect();
    console.log("connected to server")
})     