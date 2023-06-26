import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./Context";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [submitForm, setSubmitForm] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { updateUserName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitForm(true);
  }
   function handleEye() {
    setOpen((prev) => !prev);
  }
  useEffect(() => {
    if (submitForm) {
      axios
        .post("https://artgallery-api.onrender.com/User_SignUp", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phone: phone,
        })
        .then((response) => {
          if (response.data === "userFound") {
            setEmailError(true);
          } else if (response.data === "Saved Successfully") {
            localStorage.setItem("userName", firstName); 
            setEmailError(false);
            updateUserName(firstName);
            navigate("/");
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setSubmitForm(false);
        });
    }
  }, [submitForm]);

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
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            className="User-Input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="User-Input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {emailError && <p className="sign-up_email-error">User Found</p>}
        <div className="form-group password-inline">
        <input
              type={open ? "text" : "password"}
              placeholder="password"
              className="User-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="openeye" onClick={handleEye}>
              {open ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone"
            className="User-Input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
