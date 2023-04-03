import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-navigation">
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
            </div>
            <div className="footer-information">
                <a href="#">
                    <img src="/logo.png" alt="Logo" id="logo" />
                </a>
                <ul>
                    <li>Proshops Ltd.</li>
                    <li>Clonross, Drumree</li>
                    <li>Co. Meath,</li>
                    <li>A85 PK30</li>
                    <li>Tel: 01 - 8259289</li>
                    <li>Email: info@primalformulas.ie</li>
                </ul>
            </div>
            <div className="socials-links"></div>
        </footer>
    );
}

export default Footer;
