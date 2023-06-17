import React, { useState } from 'react';
const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {firstName, lastName, email, password, phone });
  };

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          required/>
        </div>
        <div className="form-group">
         <input
            type="tel"
            placeholder="Phone"
            className="User-Input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          required/>
        </div>
        <button type="submit" className="button">Sign Up</button>
        
      </form>
    </div>
  );
};

export default SignUpPage;
