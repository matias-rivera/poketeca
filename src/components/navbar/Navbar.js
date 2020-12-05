import React, { useState } from 'react';
import Button from './Button';
import { MenuItems } from './MenuItems';
import './Navbar.css'

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    return (
        <nav className='navbar-items'>
            <h1 className='navbar-logo'>Poketeca</h1>
            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, i) => (
                    <li key={i}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
            <Button>Sign up</Button>
        </nav>
      );
}
 
export default Navbar;