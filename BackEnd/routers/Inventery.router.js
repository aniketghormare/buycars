const express = require("express")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { InventeryModel } = require("../model/Marketplace_Inventory.model")
const { auth } = require("../middleware/User.middleware")


const InventeryRouter = express.Router()

InventeryRouter.post("/add",auth, async (req, res) => {
    const {OdometerKM, Major_Scratches, Original_Paint, Number_of_accidents_reported, Number_of_previous_buyers, Registration_Place, model,Dealer,userId} = req.body
    try {


        let User =await new InventeryModel({OdometerKM, Major_Scratches, Original_Paint, Number_of_accidents_reported, Number_of_previous_buyers, Registration_Place, model,Dealer,userId})
        await User.save()
        res.json({ msg: "Inventery Added Success" })


    } catch (error) {
        res.json({ msg: error })
    }
})


InventeryRouter.get("/",auth, async (req, res) => {
   try {
        const user=await InventeryModel.find()
        //{userId:req.body.userId}
        res.json(user)
   } catch (error) {
        res.json({ msg: error })
    }
})


InventeryRouter.patch("/update/:carid",auth, async (req, res) => {
    const {carid}=req.params
    const useriddoc=req.body.userId
    try {
        let car=await InventeryModel.findOne({_id:carid})
        let caruserid=car.userId
        if(useriddoc===caruserid){
            await InventeryModel.findByIdAndUpdate({_id:carid},req.body)
            res.json({msg:"patch done"})
        }else{
            res.json({msg:"not patched"})
        }
    } catch (error) {
        res.send(error)
    }
 })


 InventeryRouter.delete("/delete/:carid", auth, async(req, res) => {
    const {carid}=req.params
    const useriddoc=req.body.userId
    try {
        let car=await InventeryModel.findOne({_id:carid})
        let caruserid=car.userId
        if(useriddoc===caruserid){
            await InventeryModel.findByIdAndDelete({_id:carid})
            res.json({msg:"Deleted"})
        }else{
            res.json({msg:"not Deleted"})
        }
    } catch (error) {
        res.send(error)
    }
})


module.exports = {
    InventeryRouter
}