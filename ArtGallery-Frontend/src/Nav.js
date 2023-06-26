import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context";

const Nav = () => {
  const { userName, updateUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    updateUserName(null);
    navigate("/Login");
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      updateUserName(storedUserName);
    }
  }, [updateUserName]);

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery_Overview">Gallery Overview</NavLink>
        </li>
        <li>
          <a href="#footer" onClick={handleContactClick}>
            Contact
          </a>
        </li>
        <li >
          {userName ? (
            <>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/Login" className="login-link">
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
