import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import{AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import toast from "react-hot-toast";

const LoginForm=({setIsLoggedIn})=>{
  
const [formData,setFormData]=useState({
    email:"",password:""
})

const [userPassword,setUserPassowrd]=useState(false)
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
    const response=await fetch('http://localhost:4000/api/v1/login',
    {
        
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        
    })
    console.log("response")
   const data=await response.json()
   console.log("login data is",data) 
   if(data.success===false)
{
 toast.error("Incorrect email/password",data.message) ; 
}
if(data.success===true)
{
    
    toast.success("Logged in");
    localStorage.setItem('token',data.token)
    localStorage.setItem('email',data.loginUser.email)
    navigate("/dashboard")
    setIsLoggedIn(false);
}

console.log('form data  ',formData);

}catch(error){
    console.log("Error occor ",error)

}
 

}



    return(
        <div className="py-0">
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
            Password<sup>*</sup>
        </p>
     

        <input 
        className="rounded bg-white shadow-sm h-7 p-3 text-lg mt-2 w-full"
        required
        type={userPassword?('text'):('password')}
        value={formData.password}
        name="password"
        placeholder="Enter password"
        onChange={changeHandler}
       
/>
        <span onClick={()=>setUserPassowrd((prev)=>!prev)}
className="absolute right-10  bottom-[195px]"
      >
           {userPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)} 
        </span>
       
        
        <Link to="/" >
            <p className=" text-blue-700 max-w-max ml-auto text-sm">
              <span> forgot passowrd</span>
            </p>
        </Link>
    </label>

    <button className="w-full bg-yellow-500 text-richblack-5 font-medium text-bold rounded-md h-7 mt-2 mb-2">
        Sign in 
    </button>
  
</form>
</div>

    );
}

export default LoginForm;