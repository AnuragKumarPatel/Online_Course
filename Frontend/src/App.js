import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./componant/Navbar"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About";
import { useState } from "react";
import  coursedata  from "./data"
import Contact from "./pages/Contact";
function App() {
const [isLoggedIn,setIsLoggedIn]=useState(true)

// console.log(coursedata)

  return(
   
    <div className="w-screen h-screen  flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
     
    {/* <Home ></Home> */}
      <Routes>
        <Route path="/" element={<Home coursedata={coursedata}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={<Dashboard coursedata={coursedata}/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

     </Routes>
    
    </div>
  );

  
}

export default App;
