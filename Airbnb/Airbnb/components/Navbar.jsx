import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src="./logo.jpeg" alt="Logo" />
            <img src="./2.jpeg" alt="Khuzaima" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#online-experiences">Online Experiences</a></li>
            </ul>
            <div className="user-menu">
                <a href="#login">Login</a> / <a href="#signup">Signup</a>
            </div>
        </nav>
    );
}

export default Navbar;
