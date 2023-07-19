const express=require("express")

const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { UserModel } = require("../model/User.model")
const UserRouter=express.Router()

UserRouter.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body
       try {
          bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.json({msg:err})
            }else{
                let User=new UserModel({name,email,password:hash})
                await User.save()
                res.json({msg:"User Signup Success"})
            }
          }) 
       } catch (error) {
        res.json({msg:error})
       }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
       try {

        const User=await UserModel.findOne({email})
         if(User){
            bcrypt.compare(password,User.password,(err,result)=>{
                if(result){
                    let token=jwt.sign({"userId":User._id,"Username":User.name},"masai")
                    res.json({msg:"Login Success",token,"name":User.name})
                }else{
                    res.json({msg:"err 34"})
                }
              
            })
         }else{
            res.json({msg:"User not found"})
         }
        
       } catch (error) {
        res.json({msg:"err at 42"})
       }
})


module.exports={
    UserRouter
}