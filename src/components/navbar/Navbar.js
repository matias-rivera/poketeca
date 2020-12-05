import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { MenuItems } from './MenuItems';
import './Navbar.css'

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    return (
        <nav className='navbar-items'>
            <Link to='/' className='navbar-logo'>Poketeca</Link>
            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, i) => (
                    <li key={i}>
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Button>Sign up</Button>
        </nav>
      );
}
 
export default Navbar;