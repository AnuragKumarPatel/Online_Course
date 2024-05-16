import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import Footer from "../componant/Footer";


import toast from "react-hot-toast";

const Contact=({setIsLoggedIn})=>{
  
const [formData,setFormData]=useState({
    email:"",usermessage:""
})


const navigate=useNavigate();

function changeHandler(event){
   setFormData((preData)=>({
    ...preData,
    [event.target.name]:event.target.value
   })
   

  )
}

async function submitHandler(event){
    event.preventDefault();
    console.log("Button clicked")

try{
    console.log("try")
    const response=await fetch('http://localhost:4000/api/v1/usermsg',
    {
        
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        
    })
    console.log("response")
   const data=await response.json()
   console.log("submitted messege is ",data) 
   if(data.success===false)
{
 toast.error("Incorrect email",data.message) ; 
}
if(data.success===true)
{
    
    toast.success("messege submitted Successful");
    
    navigate("/")
    setIsLoggedIn(false);
}

console.log('form data  ',formData);

}catch(error){
    console.log("Error occor ",error)

}
 

}



    return(
        <div className="">
        <div className="contactbg h-screen flex justify-center items-center flex-col   w-screen">
<form onSubmit={submitHandler} >
    
            <label >
        <p  className="text-medium font-semibold mt-1">
            Email Address<sup>*</sup>
        </p>
       
               
        <input className="rounded bg-white shadow-sm  h-7 p-3  text-lg mt-2 w-[400px]"
        required
        type="email"
        value={formData.email}
        name="email"
        placeholder="Enter Email"
        onChange={changeHandler}
        />
    </label>
    <label className="">
        <p  className="text-medium font-semibold mt-2">
            messege<sup>*</sup>
        </p>
     

        <textarea 
        className="rounded bg-white shadow-sm h-[200px] p-3 text-lg mt-2 w-full border-none"
        required
        type="usermessage"
        value={formData.usermessage}
        name="usermessage"
        placeholder="Type your message"
        onChange={changeHandler}
       
/>
       
       
        
        
    </label>

    <button className="w-full bg-yellow-500 text-richblack-5 font-medium text-bold rounded-md h-7 mt-2 mb-2">
        submit 
    </button>
  
</form>

</div>
<Footer />

</div>

    );
}

export default Contact;