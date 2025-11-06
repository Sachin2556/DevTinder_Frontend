import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
const Login = () => {

    const [emailId, setEmailId ] = useState("");
    const [password, setPassword] = useState("");
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName ] = useState("");
    const [isLoginForm,setIsLoginForm ] = useState(false);
    const [error, setError] = useState("");
    const dispatch= useDispatch();
    const navigate = useNavigate();
    
    const handleSignup = async() => {
         try{
            const res = await axios.post(
                 BASE_URL +"/signup",{
                    firstname,
                    lastname,
                    emailId,
                    password,
                 },
                 { withCredentials : true}
            );
            dispatch(addUser(res.data.data));
            return navigate("/profile");
         }
         catch(err){
            setError(err?.response?.data || "Something went wrong");
         }
    }
    const handleLogin = async () => {
          
     try{
        const res = await axios.post(
            BASE_URL + "/login", {
            emailId,
            password,
        },
         { withCredentials: true}  // token will available on browser(cookies will show also which the help of display profile and all of this)
        );
        // console.log(res.data);
        dispatch(addUser(res.data));
        return navigate("/");
      } catch(err) {
        setError(err?.response?.data || "Something went wrong");
      }
    };

    return (

        <div className="flex justify-center my-10">
            <div className="card card-border bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLoginForm ? "Login" : "SignUp"}</h2>
                    <div>
                    {!isLoginForm && <><fieldset className="fieldset">
                            <legend className="fieldset-legend">First Name</legend>
                            <input 
                               type="text" 
                               value={firstname}
                               className="input" 
                               onChange={(e) =>  setFirstName(e.target.value)}
                               
                               />
                               
                           
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Last Name</legend>
                            <input 
                               type="text" 
                               value={lastname}
                               className="input" 
                               onChange={(e) =>  setLastName(e.target.value)}
                               
                               />
                               
                           
                        </fieldset>

                        </>}


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email ID</legend>
                            <input 
                               type="text" 
                               value={emailId}
                               className="input" 
                               onChange={(e) =>  setEmailId(e.target.value)}
                               
                               />
                               
                           
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input 
                                type="password" 
                                value = {password}
                                className="input" 
                                onChange={(e) => setPassword(e.target.value)}
                                // binding your input component with changing the names
                                />
                           
                        </fieldset>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary"
                         onClick={isLoginForm ? handleLogin : handleSignup}>
                                  {isLoginForm ? "Login" : "SignUp"}
                        </button>
                    </div>
                    <p className="m-auto cursor-pointer py-2 text-blue-600" onClick={() => setIsLoginForm((value) => !value)}>
                         {isLoginForm
                            ? "New User? Signup Here"
                            : "Existing User? Login Here"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;