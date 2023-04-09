import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleUser,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';
import useTransparentHeader from '../../hooks/useTransparentHeader';

import NavItem from './NavItem';
import NavButton from './NavButton';

function Navbar() {
    const isTransparent = useTransparentHeader();

    return (
        <nav id="navbar" className={isTransparent ? 'transparent' : ''}>
            <ul className="nav-list">
                <Link to="/">
                    <img src={logo} id="logo" alt="Logo" />
                </Link>
                <NavButton
                    to="/products"
                    icon={
                        <FontAwesomeIcon icon={faArrowRight} className="icon" />
                    }
                >
                    Products
                </NavButton>
                <NavItem to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                </NavItem>
                <NavItem to="/login">
                    <FontAwesomeIcon icon={faCircleUser} size="xl" />
                </NavItem>
            </ul>
        </nav>
    );
}

export default Navbar;
