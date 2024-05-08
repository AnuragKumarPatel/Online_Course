import { useEffect, useState,} from "react";
// import { useNavigate } from "react-router-dom";
// import LoginForm from "./LoginFrom";
import Card from "../componant/Card";
function Dashboard(props) {
  let coursedata=props.coursedata;
  console.log("course data is ",coursedata)
  // let formData=props.LoginForm.email;
  // console.log("form email is ",formData);
  // let coursedata=props.coursedata; 
  // const navigate=useNavigate();
 
const email =localStorage.getItem('email')
console.log(email)


const [empData,setEmpData]=useState('')
const getUserData=async()=>{
  try{
    const getStudent=await fetch(
      `http://localhost:4000/api/v1/getdata/${email}`,
      {
        method: "GET",
        headers:{         
            'Content-Type':'application/json'
        
        },
      }
    );
    const {data}=await getStudent.json();
    setEmpData(data);
  console.log("response is ",data)

  }
  catch(error){
    console.log("error is ",error)
  }
}
useEffect(()=>{
  getUserData();
  const token=localStorage.getItem("token");
  console.log(token)
},[])

console.log(empData);


  return (
    <div className="flex flex-1 justify-center items-center text-black text-3xl ">
      {/* <h1>{empData.image}</h1> */}
      {/* <img src={empData.image}></img> */}
      <div className="flex w-screen h-screen mt-10">
      <div className="w-[20%]  border-red-300 flex items-center  flex-col">
        <h1 className="p-3 text-black font-semibold text-3xl">Your Profile</h1>
        <p className="p-3 text-black font-semibold text-3xl"><span >{empData.firstName}</span><span>{empData.lastName}</span></p>
        <img src={empData.image} alt="yourImage"  className="w-20 h-20 rounded-[50%]" />
        <p className="p-3 text-shark-300 font-semibold text-sm">{empData.email}</p>
        <p className="p-3 text-black font-semibold text-3xl">{empData.course}</p>
      </div>
      <div className="w-[80%] flex justify-center items-center">

      <div className="flex flex-wrap mt-5 justify-evenly gap-2 ">
    {
     
        
      coursedata.map((coursedata)=>(
        <Card {...coursedata} key={coursedata.id} ></Card>

      )
      )
    }
</div>

      </div>
 
      </div>
   

    </div>
  );
}

export default Dashboard;
