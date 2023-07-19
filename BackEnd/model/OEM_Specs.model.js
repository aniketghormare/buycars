const mongoose=require("mongoose")


const oemSchema=mongoose.Schema({
    "name":String,
    "modelname":String,
    "year_of_model":Number,
    "price":Number,
    "colors":String,
    "oem_mileage":String,
    "Power":Number ,
    "Max_Speed":Number,
    "image":String
    

},{
    versionKey:false
})


const OemModel=mongoose.model("oem",oemSchema)



module.exports={
    OemModel
}