const express=require("express")
const { connection } = require("./db")
const { UserRouter } = require("./routers/user.router")
const cors=require("cors")
require("dotenv").config()
const { OemRouter } = require("./routers/oem.router")
const { InventeryRouter } = require("./routers/Inventery.router")
const app=express()

app.use(express.json())
app.use(cors())
app.use("/users",UserRouter)

app.use("/oemadd",OemRouter)
app.use("/inventery",InventeryRouter)
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`server is running at ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
    
})