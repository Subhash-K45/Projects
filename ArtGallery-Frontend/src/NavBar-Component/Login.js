import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const [open, Setopen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
  }

  function handleEye() {
    Setopen((prev) => !prev);
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
          
          if (response.data === "Login Successful") {
           
          } else {
            
            setError("Incorrect email or password");
          }
          setSubmitting(false);
        })
        .catch((error) => {
         
          console.error(error);
          
          setError("An error occurred during login");
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
          <p className="SignUp">
            Couldn't have an account?
            <span className="SignUp_Link">
              <Link to="/User_SignUp">Sign Up</Link>
            </span>
          </p>
          <button type="submit" className="Submit">
            Submit
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
