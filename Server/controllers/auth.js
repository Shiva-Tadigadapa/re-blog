import mongoose from "mongoose"
import User from "../models/user.js"
import bcrypt from "bcrypt"
import { createError } from "../error.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


export const signup = async (req,res,next)=>{
    console.log(req.body)
     try{
        const {name,email,password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        const newUser = new User({
            name,
            email,
            password:hash
        })
        await newUser.save();
        res.status(200).json({message:"new user has been created"})
     

     }catch(err){
        next(createError(err.message,500))
     }
}

export const signin = async (req,res,next)=>{
    console.log(req.body)
     try{
        // const {name,email,password} = req.body;
        const user =await User.findOne({name:req.body.name})
        if(!user)return next(createError("User not found",404))
        const isCorrect =await bcrypt.compare(req.body.password,user.password)
        if(!isCorrect) return next(createError("Password is incorrect",400))
        
        const token =jwt.sign({id:user._id}, process.env.JWT)

        const {password,...others} = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
        })
        .status(200)
        .json(others);

     }catch(err){
        next(createError(err.message,500))
     }
}