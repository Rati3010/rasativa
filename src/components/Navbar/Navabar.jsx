import React from "react";
import logo from '../../assets/Godrej-logo.jpg'
import './Navbar.css';
import { BiSearch } from "react-icons/bi";

const Navabar = () => {
  return (
    <nav className="navbar">
        <div className="nav-logo-container">
           <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
            <p>HAIR COLOR</p>
            <p>CONTACT US</p>
            <p>|</p>
            <p><BiSearch/></p>
        </div>
    </nav>
  );
};

export default Navabar;
