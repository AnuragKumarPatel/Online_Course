import React, { useState } from "react";
import{AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const SignUpForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", conformPassword:"",course:"Html"
    })

    const navigate=useNavigate();
    const [userPassword, setUserPassowrd] = useState(false)




    function changeHandler(event) {
        setFormData((preData) => ({
            ...preData,
            [event.target.name]: event.target.value
        }))
    }
 async function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.conformPassword){
            toast.error("Passwords do not match");
            return;
        }
        try{
       const resopnse=await fetch('http://localhost:4000/api/v1/createUser',

        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }
        )
const data=await  resopnse.json();
console.log(data) ;
if(data.success===false)
{
 toast.error("User Alredy exist") ; 
}
if(data.success===true)
{
 
    toast.success("Account Created");
    // localStorage.setItem('token',data.token)
    localStorage.setItem('email',data.response.email)
    navigate("/dashboard")
setIsLoggedIn(false);

   
}
console.log('form data  ',formData);






    }catch(error){
        toast.error("some error occor");
    }
       
            
       
    }


// async function createUser(formData){
//     console.log("This is user form data ",formData);
   
// }

    return (
        <div className="py-0">
         

            <form onSubmit={submitHandler}>

                {/* first name last name containre */}
                <div  className="text-medium font-semibold flex justify-center items-center gap-2">
                    <label>
                        <p className="text-medium font-semibold mt-1">First Name<sup>*</sup></p>
                        <input
                        className="rounded bg-white shadow-sm  h-7 p-2  text-lg mt-1 w-[100%] "
                            required
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            placeholder="Enter Firs Name"
                        
                        />
                    </label>
                    <label>
                        <p className="text-medium font-semibold mt-1">Last Name<sup>*</sup></p>
                        <input
                        className="rounded bg-white shadow-sm  h-7 p-3  text-lg mt-1 w-[100%]"
                            required
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                        />
                    </label>

                </div>


                <label  className="text-medium font-semibold">
                    <p className="text-medium font-semibold mt-2">Email Address<sup>*</sup></p>
                    <input
                    className="rounded bg-white shadow-sm  h-7 p-3  text-lg mt-1 w-full"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                    />
                </label>
                <label  className="text-medium font-semibold">
                    <p className="text-medium font-semibold mt-2">Course<sup>*</sup></p>
                    <select
                    className="rounded bg-white shadow-sm  h-7 p-0  text-lg mt-0 w-full"
                        required
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={changeHandler}
                       
                        >
                        <option value="Html">Html</option>
                        <option value="Css">Css</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Java">Java</option>
                        <option value="Php">Php</option>
                        <option value="Python">Python</option>
                        <option value="C Language">C Language</option>
                        <option value="C++ Language">C++ Language</option>
                        <option value="Data Structure">Data Structure</option>
                        </select>
                </label>

                <div className="relative flex justify-center gap-2">
                    <label>
                        <p className="text-medium font-semibold mt-1">Creat Password<sup>*</sup></p>
                        <input
                        className="rounded bg-white shadow-sm  h-7 p-3  text-lg mt-2 w-[100%]"
                            required
                            type={userPassword ? ("text") : ("password")}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter password"
                        />
                        <span onClick={() => setUserPassowrd((prev) => !prev)}
                         className="absolute left-[170px] bottom-[5px]"
                        >
                            {userPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label>
                        <p className="text-medium font-semibold mt-1">Conform Password<sup>*</sup></p>
                        <input
                        className="rounded bg-white shadow-sm h-7 p-3  text-lg mt-2 w-[100%]"
                            required
                            type={userPassword ? ("text") : ("password")}
                            name="conformPassword"
                            value={formData.conformPassword}
                            onChange={changeHandler}
                            placeholder="Conform password"
                        />
                        <span onClick={() => setUserPassowrd((prev) => !prev)}
                        className="absolute right-3 bottom-[5px]"
                        >
                            {userPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                

                <button className="w-full bg-yellow-500 text-richblack-5 font-medium text-bold rounded-md h-7 mt-4 mb-2">
        Creat Account 
    </button>

            </form>

        </div>
    );
}
export default SignUpForm;