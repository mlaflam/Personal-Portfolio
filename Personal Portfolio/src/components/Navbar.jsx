import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">

      <div className='left-section'>
        <div className='navbar-title'> Personal Portfolio</div>
      </div>

      <div className='right-section'>
        <Link className='header-link' to={'/'}>Home</Link>
        <Link className='header-link' to={'/about'}>About</Link>
        <Link className='header-link' to={'/projects'}>Projects</Link>
        <Link className='header-link' to={'/contact'}>Contact</Link>
      </div>
      
    
    </header>
  )
}

export default Navbar