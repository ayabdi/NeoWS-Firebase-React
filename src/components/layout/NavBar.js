import React, { useState, useEffect, useRef } from "react";
import '../css/NavBar.scss'

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {


  return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Cutco</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
  );
};

export default NavBar;
