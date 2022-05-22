import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rockefella</h1>
      <div className="links">
        <Link to="/">Routes</Link>
        <Link to="/trip">Trips</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>NEW TRIP</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;