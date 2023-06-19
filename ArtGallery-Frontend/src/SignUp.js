import React, { useState,useEffect } from 'react';
import axios from 'axios';
const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [submitForm,setSubmitForm]=useState(false)
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
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
        .finally(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setPhone("");
          setSubmitForm(false);
        });
    }
  }, [submitForm]);
  
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitForm(true);
    console.log("Form submitted:", { firstName, lastName, email, Password, Phone });
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
