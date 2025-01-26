import React from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-div">
                <img src={logo} className="logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#activity">Activities</a></li>
                <li><a href="#teams">Our Team</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;