const mongoose=require("mongoose")


const inventerySchema=mongoose.Schema({
    "OdometerKM":Number,
    "Major_Scratches":Number,
    "Original_Paint":String,
    "Number_of_accidents_reported":Number,
    "Number_of_previous_buyers":Number,
    "Registration_Place":String,
     "model":String,
     "Dealer":String,
     "userId":String
   
    

},{
    versionKey:false
})


const InventeryModel=mongoose.model("inventery",inventerySchema)



module.exports={
    InventeryModel
}