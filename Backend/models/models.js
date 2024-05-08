const mongoose=require('mongoose')
const nodemailer=require("nodemailer")
require("dotenv").config();
const userModel=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },


    firstName:{
        type: String,
       
        required:true
    },
    lastName:{
        type:String,
 
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        // maxlength:10,
        required:true
    },
    course:{
        type:String,
        // maxlength:10,
        required:true
    },
  
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),

     },
     updatedAt:{
         type:Date,
         required:true,
         default:Date.now()
     },
     image:{
        type: String,
		required: true,
     }
})

userModel.post("save" ,async function(doc){
    try{
    
        console.log("docs ",doc);
    //transporter
    let transporter=nodemailer.createTransport(
        {
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        }
    );
    //send mail
    let info=await transporter.sendMail({
        from:"codehelp",
        to:doc.email,
     
        subject:`You are Register successfully`,
        html:`<h2>Dear ${doc.firstName}  ${doc.lastName}</h2>
        <p> You are Register in <b>${doc.course}</b> course successfully</p>
       
        <p>Thank you for registration</p>`
    
    })
    console.log("info ",info);
    
    }catch(error){
    console.error(error)
    }
    });
    
    
    
    // const File=mongoose.model("file",fileSchema);
    // module.exports=File;

module.exports=mongoose.model('studentdata',userModel);