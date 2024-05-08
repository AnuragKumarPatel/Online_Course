// import { coursedata, coursedata } from "../data";

import Card from "../componant/Card";

function Home(props) {
  let coursedata=props.coursedata;
  // console.log(coursedata.title);
  return (
    <div className="">
      <div className="bghomeimg w-screen h-screen  flex justify-center items-center flex-col ">
      <div className="head flex justify-center flex-col">
      <h1 className=" font-bold text-6xl   text-richblack-25   text-center">Online Course Registration</h1>
      <h3 className="   text-richblack-25 text-4xl font-bold   text-center mt-4">Boost your skill with register in interested courses </h3>
      <p className="   text-richblack-25  text-center mt-4">This course is absolut helpfull for your carrer ,so don't miss this opportunities </p>
      
     <h4 className=" text-richblack-25 text-2xl">Start Your Learning Journey Today</h4> 
    <p className="  text-richblack-100  mt-4 w-[95%] ">
Ready to embark on a journey of discovery and growth? Browse our catalog of courses and take the first step towards achieving your goals. Whether you're pursuing a new career path, expanding your knowledge base, or simply indulging your curiosity, [Platform Name] is here to support you every step of the way.
      </p>
      </div>
      </div>
      <h4 className="text-6xl text-black font-bold text-center mt-5 mb-5">View and Enroll in Your intersted Courses</h4>
      <div className="flex flex-wrap mt-5 justify-evenly gap-2 ">
    {
      coursedata.map((coursedata)=>(
        <Card {...coursedata} key={coursedata.id}></Card>

      )
      )
    }
</div>
    <div className="w-screen h-[100px] bg-black mt-10 flex justify-center items-center flex-col">
      <footer className="text-white text-2xl font-semibold">HTML | CSS | JAVA | JAVA SCRIPT</footer>
      <footer className="text-white text-2xl font-semibold">onlinecourse@gmail.com</footer>
    </div>
    </div>
  );
}

export default Home;
