const express = require("express")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { OemModel } = require("../model/OEM_Specs.model")

const OemRouter = express.Router()

OemRouter.post("/add", async (req, res) => {
    const {name, modelname, eyear_of_model, price, colors, oem_mileage, Power, Max_Speed ,image} = req.body
    try {


        let User = new OemModel({name, modelname, eyear_of_model, price, colors, oem_mileage, Power, Max_Speed ,image})
        await User.save()
        res.json({ msg: "Cars Added Success" })


    } catch (error) {
        res.json({ msg: error })
    }
})


OemRouter.get("/", async (req, res) => {
    try {
        const user=await OemModel.find()
        res.json(user)
   } catch (error) {
        res.json({ msg: error })
    }
})




module.exports = {
    OemRouter
}