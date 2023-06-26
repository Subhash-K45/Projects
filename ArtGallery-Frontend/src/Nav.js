import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context";

const Nav = () => {
  const { userName } = useContext(UserContext);

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
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          {userName ? (
            <span className="Home-Login user-name">{userName}</span>
          ) : (
            <NavLink to="/Login" className="Home-Login">
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
