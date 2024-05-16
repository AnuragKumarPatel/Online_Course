const mongoose=require('mongoose')
const nodemailer=require("nodemailer")
require("dotenv").config();
const userMessage=new mongoose.Schema({

   
    email:{
        type:String,
        required:true,
    },
    usermessage:{
        type:String,
        required:true, 
    }
    
})

module.exports=mongoose.model('message',userMessage);