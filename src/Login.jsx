import { useState } from "react";
import axios from "axios";
const Login = () => {

    const [emailId, setEmailId ] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
          
     try{
        const res = await axios.post("http://localhost:7777/login", {
            emailId,
            password,
        },
         { withCredentials: true}  // token will available on browser(cookies will show also which the help of display profile and all of this)
        );
      } catch(err) {
        console.log(err);
      }
    };

    return (

        <div className="flex justify-center my-10">
            <div className="card card-border bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div>
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
                                type="text" 
                                value = {password}
                                className="input" 
                                onChange={(e) => setPassword(e.target.value)}
                                // binding your input component with changing the names
                                />
                           
                        </fieldset>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;