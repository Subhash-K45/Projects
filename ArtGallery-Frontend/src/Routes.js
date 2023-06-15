import {  Routes, Route } from "react-router-dom";
import Login from "./NavBar-Component/Login";
import Contact from "./NavBar-Component/Contact";
import Gallery_OverView from "./NavBar-Component/Gallery_Overview";
import Home from "./NavBar-Component/Home";

const Router= () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Gallery_Overview" element={<Gallery_OverView />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  )
  
};
export default Router