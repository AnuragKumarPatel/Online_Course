import { useEffect, useState,} from "react";

function Dashboard(props) {
  let coursedata=props.coursedata;
  console.log("course data is ",coursedata)
  

  useEffect(()=>{
    console.log("anurag")
    getUserData();
    const token=localStorage.getItem("token");
    console.log(token)
  },[])
 
 const [display,setDispla]=useState('')

  // let formData=props.LoginForm.email;
  // console.log("form email is ",formData);
  // let coursedata=props.coursedata; 
  // const navigate=useNavigate();
 
const email =localStorage.getItem('email')
console.log(email)


const [empData,setEmpData]=useState('')

const  getUserData=async()=>{
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
  console.log("response is ",data.course)


  let s= coursedata.find(coursedata=>coursedata.name==data.course)
  setDispla(s);
  }
  catch(error){
    console.log("error is ",error)
  }
}
console.log(display)

  return (
   
    <div className="flex flex-1 justify-center items-center text-black text-3xl ">
      {/* <h1>{empData.image}</h1> */}
      {/* <img src={empData.image}></img> */}
      <div className="flex w-screen h-screen mt-10 fixed">

      <div className="w-[20%]  border-red-300 flex items-center  flex-col justify-center gap-4">
      <h1 className="p-3 text-black font-semibold text-3xl">Your Profile</h1>

        <p className="p-3 text-black font-semibold text-3xl"><span >{empData.firstName}</span> <span>{empData.lastName}</span></p>
        <img src={empData.image} alt="yourImage"  className="w-20 h-20 rounded-[50%]" />
        <p className="p-3 text-shark-300 font-semibold text-sm">{empData.email}</p>
        <p className="p-3 text-black font-semibold text-3xl">{empData.course}</p>
      </div>
      <div className="w-[80%] flex justify-center items-center">

      <div className=" bg-white shadow-slate-400 shadow-xl rounded-xl flex flex-col justify-center">
    
    <div className=" h-[400px] w-[500px] flex flex-col justify-center items-center">
        <div className="h-[280px] w-[280px] flex justify-center items-center">
        <img src={display.image} alt="imagenotupload" height={300} width={300}/>
        </div>
        <div>
        <h5 className="text-3xl font-bold shadow-inner mt-5">{display.title}</h5>
        </div>
        <div className="text-xl font-bold text-green-500 mt-4 text-center w-[80%]">
        <p>{display.des}</p>
        </div>
  
    </div>
    <div className="flex justify-evenly mb-4">
    <button className="text-xl w-[50%] mb-4 text-white p-2 font-bold bg-blue-700 rounded-lg transition ease hover:scale-105 hover:bg-blue-800 duration-300 hover:text-xl">KnowMore</button>
    {/* <button className="text-xl text-white  bg-blue-700 p-2 font-bold rounded-lg"
        
   >Learn {display.name}</button> */}
    </div>
  </div>

      </div>
 
      </div>
   

    </div>
  );
  
}

export default Dashboard;
