import Template from "../componant/Tamplate";
// import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
  // <div className="flex items-center">
   <Template
   title="Log In"
  //  desc1="Build skills for today, tomorrow,and beyond."
  //  desc2="Education to future-proof your career."
  //  image={loginImg}
   formType="login"
   setIsLoggedIn={setIsLoggedIn}
   
   
   
   
   /> 
  // </div>
  );
}

export default Login;
