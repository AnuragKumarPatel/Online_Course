import React from "react"
// import frameImage from "../assets/frame.png"
import SignUpForm from "./SignUPForm";
import LoginForm from "./LoginFrom";
import {FcGoogle} from "react-icons/fc"


const Template=({title,desc1,desc2,image,formType,setIsLoggedIn })=>{
return(
    <div className="w-full h-full bgimg flex justify-center items-center">
    <div  className=" flex flex-col w-full max-w-[450px] py-5 mx-auto  gap-y-0 text-slate-700 justify-center  items-center brightness-125 bg-slate-400 opacity-70 rounded-lg">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className=" max-w-[400px] mx-0 "> 
               
        {/* <p  className="text-xl font-semibold">
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p> */}
{formType==="signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
}
<div className="flex items-center">
    <div className="w-full h-[0.5px] bg-slate-300  "></div>
<p  className="text-medium font-semibold text-center">OR</p>
<div className=" bg-slate-300 w-full h-[0.5px] "></div>
</div>

<button  className=" font-semibold flex items-center justify-center rounded border-white bg-richblack-100 
 text-richblack-900 w-full h-10  mt-2 ">
    <FcGoogle />
    Sign Up with Google
    </button>

</div>
 
    </div>
    </div>
);
}
export default Template;