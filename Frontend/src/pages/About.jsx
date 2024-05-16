import Footer from "../componant/Footer";
import anurag from "../assets/anurag.jpg"
import ayush from "../assets/ayush.jpg"
import anish from "../assets/WhatsApp Image 2024-05-14 at 08.01.05_e0b90084.jpg"
import mohit from "../assets/Mohit.jpg"

import aboutimg from "../assets/aboutimg.png"
function About(){
    return(
        <div>
        <div className=" w-[80%] auto   mt-12  flex justify-center items-center flex-col">
          <h1 className=" text-4xl text-black font-semibold text-center">About Us</h1>

         <p className=" text-xl font-semibold mt-5 text-wrap">
         Welcome to our Online Course Registration System! We are a team of dedicated individuals passionate about simplifying the process of course registration for students and institutions alike. Let us introduce ourselves:
         </p>
         <div>
            <img src={aboutimg} alt="" />
         </div>
         <p className=" text-xl font-semibold mt-5 text-wrap">
         Our Mission
At the Online Course Registration System, we're on a mission to simplify the process of enrolling in courses. We believe that education should be accessible to everyone, and our platform is built with that principle in mind.
         </p>
         <div className="flex justify-center items-center flex-col w-[90%] gap-20 mt-5">
        <div className=" transition ease hover:scale-105 duration-1000 flex w-[100%] bg-slate-50 shadow-md h-[100%] justify-center items-center rounded-sm profile p-5">
            <div className="w-[30%] flex justify-center items-center flex-col">

            <h2 className=" from-neutral-950 text-xl font-semibold">
            Anurag (Backend Developer)
            </h2>
            <div className=" rounded-[50%]  flex justify-center items-center ">
            <img src={anurag} alt="developer img" className="w-[120px] h-[120px] rounded-[50%]"/>
            <img src="" alt="" srcset="" />
            </div>
            </div>
            <p className="w-[70%] p-6 text-center font-inter">
            Anurag is the mastermind behind the system's backend architecture. With his expertise in programming and system design, he ensures that our platform operates seamlessly and efficiently, handling all the data processing and server-side operations
            </p>
        </div>

        <div className=" transition ease hover:scale-105 duration-1000 flex w-[100%] bg-slate-50 shadow-md h-[100%] justify-center items-center rounded-sm profile p-5">
        <p className="w-[70%] p-6 font-inter">
        Ayush is our frontend guru. He is responsible for crafting the user interface and experience, making sure that our platform is intuitive, user-friendly, and visually appealing. Ayush's creativity and attention to detail ensure that users have a smooth and enjoyable experience while navigating through our system.
            </p>
            <div className="w-[30%] flex justify-center items-center flex-col">

            <h2 className=" from-neutral-950 text-xl  font-semibold">
            Ayush (Frontend Developer)
            </h2>
            <div className="  rounded-[50%] flex justify-center items-center ">
            <img src={ayush} alt="developer img" className="w-[120px] h-[120px] rounded-[50%]"/>
            </div>
            </div>
          
        </div>
        <div className=" transition ease hover:scale-105 duration-1000 flex w-[100%] bg-slate-50 shadow-md h-[100%] justify-center items-center rounded-sm profile p-5">
            <div className="w-[30%] flex justify-center items-center flex-col">

            <h2 className=" from-neutral-950 text-xl font-semibold">
            Anish (Flow Chart)
            </h2>
            <div className=" rounded-[50%]  flex justify-center items-center ">
            <img src={anish} alt="developer img" className="w-[120px] h-[120px] rounded-[50%]"/>
            </div>
            </div>
            <p className="w-[70%] p-6 font-inter">
            Anish is the brains behind the systematic flow of our platform. His expertise lies in creating comprehensive flow charts that outline the entire registration process, from start to finish. Anish's meticulous planning and organization ensure that our system operates logically and efficiently, minimizing any potential hiccups along the way.
            </p>
        </div>
        <div className=" transition ease hover:scale-105 duration-1000 flex w-[100%] bg-slate-50 shadow-md h-[100%] justify-center items-center rounded-sm profile p-5">
        <p className="w-[70%] p-6 text-wrap font-inter">
        Mohit specializes in database design, particularly in creating Entity-Relationship (ER) diagrams. He meticulously designs the database structure of our system, ensuring that all data is stored and organized effectively. Mohit's ER diagrams serve as the backbone of our platform, providing a solid foundation for seamless data management and retrieval.
            </p>
            <div className="w-[30%] flex justify-center items-center flex-col">

            <h2 className=" from-neutral-950 text-xl font-semibold">
            Mohit (ER-Diagram ) 
            </h2>
            <div className="  rounded-[50%] bg-red-600 flex justify-center items-center ">
            <img src={mohit} alt="developer img" className="w-[120px] h-[120px] rounded-[50%]"/>
            </div>
            </div>         
        </div>      
         </div>
        </div>

        <div className="mt-10  flex flex-col items-center justify-center mb-5">
            <p className="text-xl font-sans bg-slate-100 p-10 ">
            Together, we combine our unique skills and expertise to develop and maintain a robust Online Course Registration System that caters to the needs of students, educational institutions, and administrators alike. We are committed to continuously improving our platform to provide the best possible experience for our users.      
            </p>
            <p className="text-xl font-sans bg-slate-100 w-full text-center p-5">
            Thank you for choosing the Online Course Registration System. We're excited to help you reach your educational goals!
            </p>
        </div>
        <Footer />
        </div>
    );
        
    
}
export default About;