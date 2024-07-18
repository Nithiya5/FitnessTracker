
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: '#333',
        overflow: 'hidden',
        padding: '20px 10px' 
    };

    const navLinksStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'flex-end', // Align items to the right
        alignItems: 'center'
    };

    const navLinkItemStyle = {
        padding: '0 20px'
    };

    const navLinkStyle = {
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'block',
        fontSize: '18px' 
    };

    return (
        <nav style={navbarStyle}>
            <ul style={navLinksStyle}>
                <li style={navLinkItemStyle}>
                    <Link to="/" style={navLinkStyle}>Home</Link>
                </li>
                <li style={navLinkItemStyle}>
                    <Link to="/about" style={navLinkStyle}>About</Link>
                </li>
                <li style={navLinkItemStyle}>
                    <Link to="/Signup" style={navLinkStyle}>Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

