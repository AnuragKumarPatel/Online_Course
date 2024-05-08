const bcrypt=require("bcrypt")
const model=require("../models/models");
const jwt=require("jsonwebtoken");
require("dotenv").config();


exports.login=async(req,res)=>{
    
    try{

      

        const{email,password}=req.body;  
        console.log(req.body)
        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Pleas fill all the details carefully",
            })
        }
      
        //cheak for registered user
        let loginUser=await model.findOne({email});
            console.log("User email is ",loginUser)
        //if not a registered user
        if(!loginUser){
            return res.status(401).json({
               success:false,
               message:"User is not registered" 
            });

        }


        const payload={
            email:loginUser.email,
            id:loginUser._id,
            // role:loginUser.role,
        }

        //varify password & generate a Jwt token

        if(await bcrypt.compare(password,loginUser.password)){
            //password match
            let token=jwt.sign(payload,process.env.JWI_SECRETE,{
                expiresIn:"2h"
            });
           console.log("login user id is",loginUser._id);
            loginUser=loginUser.toObject();
            loginUser.token=token;
           

            loginUser.password=undefined;
           

            // const options={
            //     expires:new Date(Date.now()+3*24*60*60*1000),
            //     httpOnly:true,
            // }
            // res.cookie("token",token,options).status(200).json({
            //   success:true,
            //   token,
            //   loginUser,
            //   message:"User loged in successfully"  
            // });

          return  res.status(200).json({
                success:true,
                token,
                loginUser,
               
                message:"User loged in successfully"  
              });
              
            
        }
        else{
            //password do not match
            return res.status(403).json({
               success:false,
               message:"Password incorrect" 
            })
        }

    }

    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"you are not logedIn",
        });
    }

  


}

