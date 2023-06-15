import {  Routes, Route } from "react-router-dom";
import Login from "./NavBar-Component/Login";
import Contact from "./NavBar-Component/Contact";
import Gallery_OverView from "./NavBar-Component/Gallery_Overview";
import Home from "./NavBar-Component/Home";
import Contemporary from "./Gallery-Overview-Components/Contemporary";
import Sculptures from "./Gallery-Overview-Components/Sculputures";
import Mixed_Art from "./Gallery-Overview-Components/Mixed_Art";
const Router= () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Gallery_Overview" element={<Gallery_OverView />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Contemporary_Paintings" element={<Contemporary/>}/>
        <Route path="/Sculptures" element={<Sculptures/>}/>
        <Route path="/Mixed_Art" element={<Mixed_Art/>}/>
      </Routes>
    </>
  )
  
};
export default Router