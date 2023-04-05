import { Link } from 'react-router-dom';
import logo from '/logo.png';

function Header() {
    return (
        <header>
            <nav id="navbar">
                <a href="#">
                    <img src={logo} alt="Logo" id="logo" />
                </a>
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
            </nav>
        </header>
    );
}

export default Header;
