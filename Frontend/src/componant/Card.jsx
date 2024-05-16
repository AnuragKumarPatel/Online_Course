import {  useNavigate } from "react-router-dom";
const Card=({title,des,image,name})=>{
// let coursedata=props.coursedata


// console.log(coursedata)
// console.log(title)
const navigate=useNavigate()

return(


    <div className="transition mb-10 ease hover:scale-105 duration-700  shadow-slate-200 shadow-xl rounded-xl ">
    
    <div className=" h-[400px] w-[400px] flex flex-col justify-center items-center">
        <div>
        <img src={image} alt="imagenotupload" height={255} width={255}/>
        </div>
        <div>
        <h5 className="text-3xl font-bold shadow-inner ">{title}</h5>
        </div>
        <div className="text-xl font-bold text-green-500">
        <p>{des}</p>
        </div>
  
    </div>
    <div className="flex justify-evenly mb-4">
    <button className="text-xl text-white p-2 font-bold bg-blue-700 rounded-lg transition ease hover:scale-110 hover:bg-blue-600 duration-300">KnowMore</button>
    <button className="text-xl text-white  bg-blue-700 p-2 font-bold rounded-lg transition ease hover:scale-110 hover:bg-blue-600 duration-300" onClick={()=>{
        navigate("/signup")
    }}>Learn {name}</button>
    </div>
  </div>
);


}
export default Card;