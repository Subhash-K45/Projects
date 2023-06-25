import { NavLink } from "react-router-dom";
const Nav = () => {
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
          <NavLink to="/Login" className="Home-Login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
