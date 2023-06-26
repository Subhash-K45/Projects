import React, { useState,useEffect,useContext } from 'react';
import{useNavigate} from "react-router-dom"
import axios from 'axios';
import { UserContext } from "./Context";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [submitForm,setSubmitForm]=useState(false);
  const [email_error,set_Email_Error]=useState(false);
  const navigate = useNavigate();
  const { updateUserName } = useContext(UserContext);

  useEffect(() => {
    if (submitForm) {
      axios
        .post("https://artgallery-api.onrender.com/User_SignUp", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          Password: Password,
          Phone: Phone,
        })
        .then((response) => 
        {
          if(response.data==="userFound"){
            set_Email_Error(true)
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setSubmitForm(false);
        });
    }
  }, [submitForm]);
  
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitForm(true);
   
  }
  

  return (
    <div className="container">
      <h2 className="heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         <input
            type="text"
            placeholder="First Name"
            className="User-Input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          required/>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            className="User-Input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          required/>
        </div>
        <div className="form-group">
          
          <input
            type="email"
            placeholder="Email"
            className="User-Input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          required/>
        </div>
        <div className="form-group">
         
          <input
            type="password"
            placeholder="Password"
            className="User-Input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          required/>
        </div>
        <div className="form-group">
         <input
            type="tel"
            placeholder="Phone"
            className="User-Input"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          required/>
        </div>
        <button type="submit" className="button">Sign Up</button>
        
      </form>
    </div>
  );
};

export default SignUpPage;
