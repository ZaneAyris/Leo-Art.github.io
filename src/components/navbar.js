import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div className = "Navigation">
    <li>
      <Link to="/" className='Navigation-link'>Home</Link>
    </li>
    <li>
      <Link to="/about" className='Navigation-link'>About</Link>
    </li>
    <li>
      <Link to="/art" className='Navigation-link'>Art</Link>
    </li>
    <li>
      <Link to="/contact" className='Navigation-link'>Contact</Link>
    </li>
  </div>
  );
}
export default navbar;