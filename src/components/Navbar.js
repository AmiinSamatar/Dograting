import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Main.css'

function Navbar() {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
     
    <nav className='nav'>
      <a href="#" className="nav__brand">
        Dog Rating </a>
      <ul className={active}>
      <li className="nav__item">
  <Link to="/" className="nav__link">
    Home
  </Link>
</li>

        <li className="nav__item">
  <Link to="/ratings" className="nav__link">
   Growl list
  </Link>
</li><li className="nav__item">
  <Link to="/superwag" className="nav__link">
    Superwaglist
  </Link>
</li>
<li className="nav__item">
  <Link to="/sharelinks" className="nav__link">
    Wag list
  </Link>
</li>        
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search"/>
        <img src="" alt=""/>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    
    
  );
}

export default Navbar;

  
      
    

