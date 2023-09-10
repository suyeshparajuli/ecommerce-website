import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul>
        <li>
            <Link to="/">Home</Link>
            <Link to="/product">products</Link>
            <Link to="/MyCart">Mycart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
