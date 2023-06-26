import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { UserContext } from "../Context";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [Emailerror, set_Email_Error] = useState(false);
  const [Passworderror, set_Password_Error] = useState(false);
  const navigate = useNavigate();
  const { updateUserName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
  }

  function handleEye() {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    if (submitting) {
      axios
        .post("https://artgallery-api.onrender.com/User_login", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response.data.msg === "Login Successfull") {
            navigate("/");
            set_Email_Error(false)
            set_Password_Error(false)
            updateUserName(response.data.Name);
          } else if(response.data==="Incorrect Password") {
            set_Email_Error(false);
            set_Password_Error(true);
          }
          else{
            set_Password_Error(false);
            set_Email_Error(true);
          }
          setSubmitting(false);
        })
        .catch((error) => {
          console.error(error);
          set_Email_Error("An error occurred during login");
          setSubmitting(false);
        });
    }
  }, [submitting]);

  return (
    <div className="Login">
      <div className="User_Login">
        <h2>Login</h2>
        <form method="POST" onSubmit={handleSubmit}>
          <input
            placeholder="email"
            type="email"
            className="user-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {Emailerror && <p className="email-error">User Not Found</p>}
          <div className="password-inline">
            <input
              type={open ? "text" : "password"}
              placeholder="password"
              className="user-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="openeye" onClick={handleEye}>
              {open ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          {Passworderror && <p className="password-error">Incorrect password</p>}
          <p className="SignUp">
            Couldn't have an account? 
            <span className="SignUp_Link">
              <Link to="/User_SignUp"> Sign Up</Link>
            </span>
          </p>
          <button type="submit" className="Submit">
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
