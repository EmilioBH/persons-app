import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname} = useLocation();
  
  return (
    <div className="navbar-container">
      { pathname !== "/" && <Link to="/">Home</Link> }
      <Link to="/hobbies">Hobbies</Link>
      <Link to="/countries">Countries</Link>
    </div>
  )
}

export default NavBar;