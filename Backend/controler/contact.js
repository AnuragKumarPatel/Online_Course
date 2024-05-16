const model=require("../models/contactmodel");
const models=require("../models/models");
require("dotenv").config();
exports.contactmsg=async(req,res)=>{
    
    try{

        const{email,usermessage}=req.body;  
        console.log(req.body)
        //validation on email and password
        if(!email || !usermessage){
            return res.status(400).json({
                success:false,
                message:"Pleas fill all the details carefully",
            })
        }


        

        //cheak for registered user
        let loginUser=await models.findOne({email});
            console.log("User email is ",loginUser)
        //if not a registered user
        if(!loginUser){
            return res.status(401).json({
               success:false,
               message:"User is not registered" 
            });

        }

        const response=await model.create({
            email,
            usermessage,

        })

          return  res.status(200).json({
                success:true,
                response,
                // loginUser,
               
                message:"message submited successfully"  
              });
              
            
        }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"you are not logedIn",
        });
    }
}


  




