const model=require("../models/models")


exports.getdata=async (req,res)=>{

    try{
       const email=req.params.email;
       console.log("user email is ",email)  
       const userdata=await model.findOne({email:email});
       console.log("getting user data is",userdata);
       
       res.json({
           success:true,
           data:userdata,
       })
       console.log("data is ",userdata)
    }
    catch(error){
       res.status(500).json({ success: false, error: error });
   console.log(error);
    }   
   
   }