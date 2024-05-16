import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/Logo.svg"
import onlinelogo from '../assets/onlinelogo.png'
import toast from "react-hot-toast";
const Navbar=(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return(
        <div className="navbar flex justify-evenly items-center w-full  max-w[1160] bg-slate-200 shadow-md h-10 fixed">
           <Link to="/"> 
           <div className="flex justify-center items-center">
           <img src={onlinelogo} alt="Logo" width={50} height={15} loading="lazy"/>
           <span className="text-2xl text-richblack-800 font-serif font-extrabold">ONLINE COURSE</span>

           </div>
           </Link>
          
          
           <nav>
            <ul className="flex   gap-x-6 text-black font-semibold text-xl ">
                <li className="transition ease hover:scale-110  hover:text-blue-600 duration-500">
                    <Link to="/">Home</Link>
                </li>
                <li className="transition ease hover:scale-110 hover:text-blue-600 duration-500">
                    <Link to="/about">About</Link>
                </li>
                <li className="transition ease hover:scale-110 hover:text-blue-600 duration-500">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
           </nav>

            {/* Login,signup, Logout,Dashboard  */}
            <div className="flex  items-center gap-4 ">
                {isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-blue-500  text-white py-[4px] px-[10px] rounded-[4px]  font-semibold transition ease hover:scale-110 hover:bg-blue-600 duration-300">
                            Log in
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-blue-500  text-white  py-[4px] px-[10px] rounded-[4px]   font-semibold transition ease hover:scale-110 hover:bg-blue-600 duration-300">
                            Sign Up
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(true)
                            toast.success("Log Out") 
                          
                        }}
                        className="bg-blue-500  text-white  py-[4px] px-[10px] rounded-[4px]   font-semibold transition ease hover:scale-110 hover:bg-blue-600 duration-300"
                        >
                            LogOut
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-blue-500  text-white  py-[4px] px-[10px] rounded-[4px]   font-semibold transition ease hover:scale-110 hover:bg-blue-600 duration-300">
                           Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>

    );
}
export default Navbar;