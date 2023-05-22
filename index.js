const express = require("express")
const cookieParser = require("cookie-parser")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.route")
const {auth} = require("./middlewares/auth")
const { productRouter } = require("./routes/product.route")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",userRouter)
app.use(auth)
app.use("/products",productRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`connected to DB listen on http://localhost:${process.env.port}`) 
    }catch(err){
        console.log(err.message)
    }
})
