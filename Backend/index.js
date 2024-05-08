const express=require("express")
const app=express();
// const bodyParser=require('body-parser')
require("dotenv").config();
var cors=require("cors")
PORT=process.env.PORT||3000


app.use(
    cors({
      origin : "*" 
    })
)

// app.use(bodyParser.json())

// add middleware program 
app.use(express.json());
//import router
const userroute=require("./router/router")

// add mount
app.use("/api/v1",userroute);




//add database

const connectDb=require('../Backend/config/database')
connectDb();






app.listen(PORT,()=>{
    console.log(`server is started in port no ${PORT}`);
})


//add default route
// app.post("/",(req,res)=>{
//     res.send(
//        "<h1>This is home page brother</h1>"
//     )
// console.log("request ki body ",req.body)
// })