const bcrypt=require("bcrypt")
const model=require("../models/models")

exports.createdata=async (req,res) =>{
    try{
      
const {firstName,lastName,email,password,course}=req.body;
console.log("hello")
console.log(req.body)

 //cheak if user already exits
 const existingUser=await model.findOne({email});
 if(existingUser)
 {
     return res.status(400).json({
         success:false,
         message:"User Alredy exist",
     })
 }
let hashedPassword;
try{
    hashedPassword=await bcrypt.hash(password,10);
}
catch(err){
    return res.status(400).json({
        success:false,
        message:"Error in hashing Password",
    })
}

const response=await model.create({
    firstName,
    lastName,
    email,
    password:hashedPassword,
    course,
    image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}`,

});
console.log("hello ji");


return res.status(200).json({
    success:true,
    response,
    message:"data is created successfully in database"
})

    }
    catch(error){
     
        console.log("data entry error")
        console.error(error)
   return res.status(400).json({
            success:false,
        
            message:"data is not created successfully in database"
        })
    }

}

