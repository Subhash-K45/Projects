import { Link } from "react-router-dom"
import { useState } from "react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
const Login = ()=>{
    const[open,Setopen]=useState(false)
    function handleSubmit(e){
        e.preventDefault()
        console.log('clicked')
    }
    function handleEye(){
        Setopen(prev => !prev)
    }
    return (
        <div className="Login">
            <div className="User_Login">
                <h2>Login</h2>
                <form method="POST" onSubmit={(e)=>handleSubmit(e)}>
                    <input placeholder="email" 
                    type="email" 
                    className="user-email"  
                    required/>
                    <div className="password-inline">
                        <input type={open ? "text" : "password"} 
                        placeholder="password"  
                        className="user-password" 
                        required />
                        <span className="openeye" onClick={handleEye}>{open ? <AiFillEyeInvisible/> :<AiFillEye/>}</span>
                    </div>
                    <p className="SignUp">Could'int Have a Acoount ?  
                    <span className="SignUp_Link">
                    <Link to="/User_SignUp"> SignUp</Link></span></p>
                    <button type="submit"  className="Submit">Submit</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login