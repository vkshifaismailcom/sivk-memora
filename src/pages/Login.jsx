import {useState} from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
 const handleLogin=async (e)=>{e.preventDefault();
    try{const response=await axios.get("http://localhost:3000/users");
        const user=response.data.find((user)=>user.email===email);
        if(!user){alert("Email not founded");return;}
        if(user.password!==password){alert("wrong password");return;}
        alert("login succesfull")
        navigate("/")
      }
    catch(error){console.log(error)}
 }
 return(
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="enter your Email here" value={email} onChange={((e)=>setEmail(e.target.value))} />
            <input type="password" placeholder="enter your password here" value={password} onChange={((e)=>setPassword(e.target.value))} />
            <button type="submit">LOGIN</button>
            <h6>don't have an acount</h6>
        <Link to="/register">Create an account</Link>
        </form>
        
    </div>
 )
}
export default Login;