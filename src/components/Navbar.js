import React from 'react';
import './Navbar.css';
import DrawerToggleButton from './Sidedrawer/DrawerToggleButton';


function Navbar(props) {

    return (
        <div>
            <header className="navbar">
            <nav className="navbar_nav">
                <div className='navbar-toggle_button'>
                    <DrawerToggleButton click={props.clickHandler}/>
                </div>

            <div className='navbar_logo' ><li><a href ='/'>Volkswagen</a></li></div>
            
            
            <div className="space"></div>
            <div className="navbar_items">
            <ul>
               
                <li ><a href="/">HOME</a></li>
                <li><a href="/models">MODELS</a></li>
                <li><a href="/features">FEATURES</a></li>
                <li><a href="/about">ABOUT US</a></li>
            </ul>
            </div>
            </nav>
            </header>
        </div>
    )
}

export default Navbar


