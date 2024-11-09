// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

function Navbar() {
    // State to track the active page
    const [activePage, setActivePage] = useState("Home");

    // Function to handle page change
    const handlePageChange = (page) => {
        setActivePage(page);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./logo.jpeg" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <Link
                        to="/"
                        className={activePage === "Home" ? "active" : ""}
                        onClick={() => handlePageChange("Home")}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/experiences"
                        className={activePage === "Experiences" ? "active" : ""}
                        onClick={() => handlePageChange("Experiences")}
                    >
                        Experiences
                    </Link>
                </li>
                <li>
                    <Link
                        to="/online-experiences"
                        className={activePage === "Online Experiences" ? "active" : ""}
                        onClick={() => handlePageChange("Online Experiences")}
                    >
                        Online Experiences
                    </Link>
                </li>
            </ul>
            <div className="user-menu">
                <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
            </div>
        </nav>
    );
}

export default Navbar;
