import Template from "../componant/Tamplate";
// import signupImg from "../assets/signup.png";

function Signup({setIsLoggedIn }) {
  return (
    <Template
    title="Register In Online Course"
    desc1="Build skills for today, tomorrow,and beyond."
    desc2="Education to future-proof your career."
    // image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    
    
    
    
    /> 
  );
}

export default Signup;
