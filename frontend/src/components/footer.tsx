import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer-navigation">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-information">
                <a href="#">
                    <img src={logo} alt="Logo" id="logo" />
                </a>
                <ul>
                    <li>Primal Formulas Ltd.</li>
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
