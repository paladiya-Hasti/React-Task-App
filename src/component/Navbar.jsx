import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import  '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

 

  return (
    <div>
   
    <div className='navbar'>
      <div className='navbar-content'>
      
      <img src="data:image/png;base64,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"  className="logo" alt="" />
      
      <Link  to="/" className="link">Home</Link>

          <Link  to="/register" className="link"><FaUserAlt className="user-icon" /></Link>

     
  
      </div>
      
    </div>
    </div>
  )
}

export default Navbar
    