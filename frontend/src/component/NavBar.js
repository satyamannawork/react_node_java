import React from 'react';
import   './NavBar.css';
//import PropTypes from 'prop-types';
import {Link} from  'react-router-dom'
const NavBar = () => {
    return (
       <nav className="navbar">
           <div className="nav__logo">
                <h2>MERN Shopping cart</h2>
           </div>

           {/* logo */}

           <ul className="nav__links">
               <li>
                   <Link to="/cart" className="cart_link">
                    <i className="fas fa-shopping-cart"></i>
                    Cart
                    <span className="cartlog_badge">0</span>
                   </Link>
                </li>

                <li>
                   <Link to="/" >
                    {/* Icon */}
                    Shop
                   
                   </Link>
                </li>
           </ul>
           {/* links */}

           <div className="humbarger_menu">
               <div></div>
               <div></div>
               <div></div>
           </div>
           {/* humbarger manu */}
       </nav>
    );
};

// NavBar.propTypes = {
    
// };

export default NavBar;