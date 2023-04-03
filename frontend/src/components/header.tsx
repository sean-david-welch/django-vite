import React from 'react';
import logo from '/assets/logo.png';

function Header() {
    return (
        <header>
            <nav id="navbar">
                <a href="#">
                    <img src="/logo.png" alt="Logo" id="logo" />
                </a>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Cart</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
