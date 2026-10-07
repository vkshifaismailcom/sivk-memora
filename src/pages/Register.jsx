import {useState} from "react";
import axios from "axios";
function Register(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleRegister=(event)=>{event.preventDefault();
        if(!name||!email||!password){alert("please fill all fields");return;}
        const user={name,email,password};
  axios.post("http://localhost:3000/users", user)
  .then((res)=>{alert("Registration succesful");})
  .catch((res)=>{alert("Registration failed")})  
    }
return(
    <form onSubmit={handleRegister}>
        <h1>REGISTER</h1>
        <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" >REGISTER</button>
    </form>
)
}
export default Register;