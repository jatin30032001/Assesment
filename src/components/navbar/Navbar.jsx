import React from "react";
import "./navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../components/assets/icons/DPhi Logo.png'
function Navbar() {
  return (
    <nav className="navbar navbar nav">
      <div className ="navbar-brand" href="#" style={{marginLeft:"30px"}}>
        <img
          src = {logo}
          width="50"
          height="50"
          className ="d-inline-block align-center"
          alt=""
        />
       <span style= {{marginLeft:"18px"}  }> DPhi</span> 
      </div>
    </nav>
  );
}

export default Navbar;
